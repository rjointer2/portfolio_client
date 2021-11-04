
import { initialGameObject } from "../../typeDef";

//import * as actionTypes from './actionTypes';

type ActionMap<T> = {
    [P in keyof T]: P
}

type action<T, P> = { 
    type: T,
    payload: P
}

type reducer<S, A> = ( s: S, a: A ) => S;

export const gameReducer: reducer<initialGameObject, action<ActionMap<'WALK' | 'HURT' | 'JUMP'>, initialGameObject>> = ( 
    state, action 
) => {

    switch( action.type ) {

        case 'WALK':
            return action.payload
    

        default:
            return state
    }

}

