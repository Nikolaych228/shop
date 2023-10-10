import { loginReducer } from './AuthReducer';
import { categoryReducer } from './CategoryReducer';
import { typeReducer } from './TypeReducer';
import { roleReducer } from './roleReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  login: loginReducer,
  role: roleReducer,
  category: categoryReducer,
  type: typeReducer
});

export default rootReducer;