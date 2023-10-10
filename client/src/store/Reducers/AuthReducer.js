const initialStateLogin = {
    loading: false,
    loggedIn: false,
    token: null,
    error: null,
  };
  
  const loginReducer = (state = initialStateLogin, action) => {
    switch (action.type) {
      case 'LOGIN_REQUEST':
        return { 
          ...state,
          loading: true,
          error: null
        };
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          loading: false,
          loggedIn: true,
          token: action.payload,
          error: null,
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          loading: false,
          loggedIn: false,
          token: null,
          error: action.payload,
        };
      case 'LOGOUT':
        return {
          ...state,
          loggedIn: false,
          token: null,
          error: null,
        };
      default:
        return state;
    }
  };
  
  export { loginReducer };