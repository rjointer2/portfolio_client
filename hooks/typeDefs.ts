import { combineReducer } from "./state_management/reducers/combineReducer";
import { menuReducer } from "./state_management/reducers/menuReducer";
import { userReducer } from "./state_management/reducers/userReducer";

export type InitialState<S> = S;

export type Action<A> = A;

export type ActionTypes<M> = {
    [P in keyof M]: M[P]
}

export type ActionMap<AT> = {
    type: keyof AT
    payload?: any
}

export type Reducer<S, A> = (state: S, action: A) => S;

export type combineReducers<S, A> = (
    reducers: { [P in keyof S]: Reducer<S, A> }
) => Reducer<S, A>;



/* 

CUSTOM TYPES FOR GLOBAL STATE 

*/

// Menu

export type MyActionTypes = {
    MENU_NAV: boolean
}

export type MenuStateType = {
    [index: string]: any
    MENU_NAV: boolean
}

export type MneuActionType = {
    MENU_NAV: 'MENU_NAV'
}

export type MenuActionMap = ActionMap<MneuActionType>;


// User

type UserData = {
    username: string
}

export type UserStateType = {
    [index: string]: any
    user: UserData
}

export type UserActionType = {
    [index: string]: any
    USER_LOGGED_IN: 'USER_LOGGED_IN'
    USER_LOGGED_OUT: 'USER_LOGGED_OUT'
}

export type UserActionMap = ActionMap<UserActionType>


/* combine state and types */

export type CombineActionTypes = UserActionMap


export type InitialStateType = {
    [index: string]: any
    user: UserStateType | null
    menu: MenuStateType
}