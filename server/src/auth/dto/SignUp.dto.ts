// src/auth/dto/SignUp.dto.ts
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { UserRole } from 'src/users/dto/UserRole';

export class SignUpDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;

  @IsNotEmpty()
  @IsString()  
  @MinLength(6)
  username: string;

  @IsString()  
  role: UserRole;
}
