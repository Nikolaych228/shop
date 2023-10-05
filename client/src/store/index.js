import { applyMiddleware, createStore } from "redux";
import { rootReduser } from "./reducers/RootReducer";
import thunk from "redux-thunk"

export const store = createStore (rootReduser, applyMiddleware(thunk))