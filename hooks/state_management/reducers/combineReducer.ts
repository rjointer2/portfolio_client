import { CombineActionTypes, combineReducers, InitialState, InitialStateType, MenuActionMap, MenuStateType, Reducer, UserActionType, UserStateType } from "../../typeDefs";
import { menuReducer } from "./menuReducer";
import { userReducer } from "./userReducer";

/* export const combineReducer: combineReducers<
    UserStateType & MenuStateType, UserActionType | MenuActionMap
> = ( reducers ) => ( state, action ) => Object.keys(reducers).reduce(
    (acc, prop) => ({
      ...acc,
      [prop]: reducers[prop](acc[prop], action),
    }),
    state
);
 */

/* type ReducerMap = { 
  user: typeof userReducer, 
  menu: typeof menuReducer 
}

type CR<RM, S, A> = {
  ( r: {
    [P in keyof RM]: RM[P]
  } ): ( s: S, a: A ) => S
}

const cr: CR<
  ReducerMap, InitialStateType, CombineActionTypes
> = ( r ) => ( s, a ) => Object.keys(r).reduce(
  (acc, prop) => ({
    ...acc,
    [prop]: r[prop](acc[prop], a),
  }),
  s
)

cr({ user: userReducer, menu: menuReducer }) */

type RM<S, A = any> = ( r: {
  [prop in keyof S]: Reducer<S[prop], A>
}) => ( s: S, a: A ) => void

const cr: RM<InitialStateType ,any> = (r) => ( s, a ) => Object.keys(r).reduce(
  (acc, prop) => ({
    ...acc,
    [prop]: r[prop](acc[prop], a),
  }),
  s
)