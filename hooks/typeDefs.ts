
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

export type MyActionTypes = {
    MENU_NAV: boolean
}
