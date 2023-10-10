export const loginRequest = () => (
    {
        type: 'LOGIN_REQUEST'
    }
)

export const loginSucces = (response) => (
    {
        type: 'LOGIN_SUCCES',
        payload: response
    }
)

export const loginFailure = () => (
    {
        type: 'LOGIN_FAILURE',
        payload: error
    }
)

export const logout = () => (
    {
        type: 'LOGOUT'
    }
) 