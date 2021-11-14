import { MenuActionMap, MenuStateType, Reducer } from "../../typeDefs";

export const menuReducer: Reducer<MenuStateType, MenuActionMap> = ( state, action ) => {

    state[action.type] = !action.payload

    return state
}