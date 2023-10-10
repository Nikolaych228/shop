const initialStateType = {
    type: null,
};
  
  export const typeReducer = (state = initialStateType, action) => {
    switch (action.type) {
      case 'SET_TYPE':
        return {
          ...state,
          type: action.payload,
        };
      case 'REMOVE_TYPE':
        return {
          ...state,
          type: null,
        };
      default:
        return state;
    }
  };