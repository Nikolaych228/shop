  
  export const loginRequest = () => ({
    type: 'LOGIN_REQUEST',
  });
  
  export const loginSuccess = (response) => ({
    type: 'LOGIN_SUCCESS',
    payload: response,
  });
  
  export const loginFailure = (error) => ({
    type: 'LOGIN_FAILURE',
    payload: error,
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });