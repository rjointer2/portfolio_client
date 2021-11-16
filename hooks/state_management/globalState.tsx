
import { ReactNode, useReducer } from "react";

// inital state
import { inittialState } from "./initialState";

// reducers
import { combineReducer } from "./reducers/combineReducer";
import { menuReducer } from "./reducers/menuReducer";
import { userReducer } from "./reducers/userReducer";

export const GlobalState = ({ children } : { children: ReactNode }) => {
    

}