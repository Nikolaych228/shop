const initialStateCategory = {
    category: null,
};
  
  export const categoryReducer = (state = initialStateCategory, action) => {
    switch (action.type) {
      case 'SET_CATEGORY':
        return {
          ...state,
          category: action.payload,
        };
      case 'REMOVE_CATEGORY':
        return {
          ...state,
          category: null,
        };
      default:
        return state;
    }
  };