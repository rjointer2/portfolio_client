
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
    reducers: {
        [P in keyof S]: Reducer<S, A>
    }
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

export type UserStateType = {
    [index: string]: any
    user: null | {
        username: string
    }
}

export type UserActionType = {
    USER_LOGGED_IN: 'USER_LOGGED_IN'
}

export type UserActionMap = ActionMap<UserActionType>



export type InitialStateType = {
    user: null,
    menu: MenuStateType
    highscore: {

    }
}