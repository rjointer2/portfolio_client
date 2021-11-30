
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


// Custom Types for Global State Management

// Menu


/* 
export type MenuActionMap = {
    type: 'MENU_NAV'
    payload: string
}


// User


export type UserStateType = {
    [index: string]: any
    user: {
        username: string
    }
}

export type UserActionMap = {
    type: {
        USER_LOGGED_IN: 'USER_LOGGED_IN'
        USER_LOGGED_OUT: 'USER_LOGGED_OUT'
    }
    payload: null | UserStateType
}

 */