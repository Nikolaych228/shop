const initialState = {
    loggedIn: false,
    token: null,
    loading: false,
    error: null
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type){
        default:
            return state
        case 'LOGIN_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'LOGIN_SUCCES':
            return {
                ...state,
                loggedIn: true,
                loading: false,
                token: action.payload
            }
        case 'LOGIN_FAILURE':
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case 'LOGOUT':
            return{
                ...state
            }
        }

} 