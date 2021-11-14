
import { createContext, useContext } from "react";
import { ActionMap, MyActionTypes } from "./typeDefs";

const Context = createContext({ state: { hello: 'world' }, dispatch: ({ type, payload } :  ActionMap<MyActionTypes> ) => {} })



export const useGlobalState = () => {
    return useContext(Context)
}


const { state, } = useGlobalState()
