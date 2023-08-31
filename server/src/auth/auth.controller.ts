import {
  Body,
  Controller,
  HttpStatus,
  Inject,
  Post,
  UnauthorizedException,
  UsePipes,
  ValidationPipe,
  Headers,
  Get
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { comparePassword } from '../utils/bcrypt';
import { SignInDto } from './dto/SignIn.dto';
import { SignUpDto } from './dto/SignUp.dto'; 

@Controller('auth')
export class AuthController {
  constructor(
    @Inject('USERS_SERVICE') private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  @Post('login')
  @UsePipes(ValidationPipe)
  async login(@Body() signInDto: SignInDto)  {
    const email = signInDto.email;
    const user = await this.usersService.findOne({ email });

    if (!user) {
      throw new UnauthorizedException('invalid credentials');
    }

    if (!(await comparePassword(signInDto.password, user.password))) {
      throw new UnauthorizedException('invalid credentials');
    }

    const token = await this.jwtService.signAsync({
      id: user.id,
      email: user.email,
    });

    return {
      massage: 'Login Succuss!',
      status: HttpStatus.CREATED,
      token: token,
    };
  }

  @Get('check')
  async check(@Headers('Authorization') authorizationHeader: string) {
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Invalid token');
    }

    const token = authorizationHeader.split(' ')[1];
    const decodedToken: any = this.jwtService.decode(token);

    if (!decodedToken) {
      throw new UnauthorizedException('Invalid token');
    }

    const userId = decodedToken.id;
    const user = await this.usersService.findOne({ id: userId });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    return {
      role: user.role,
    };
  }

  @Post('register') // New endpoint for user registration
  @UsePipes(ValidationPipe)
  async register(@Body() signUpDto: SignUpDto) {
    // Check if a user with the provided email already exists
    const userExists = await this.usersService.findOne({ email: signUpDto.email });
    if (userExists) {
      throw new UnauthorizedException('User with this email already exists');
    }

    // Create a new user with the provided email and password
    const newUser = await this.usersService.createUser({
      email: signUpDto.email,
      password: signUpDto.password,
      username: signUpDto.username,
      role: signUpDto.role,
    });

    // Generate a token for the new user
    const token = await this.jwtService.signAsync({
      id: newUser.id,
      email: newUser.email,
    });

    return {
      message: 'Registration Success!',
      status: HttpStatus.CREATED,
      token: token,
    };
  }
}
