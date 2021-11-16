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

type ReducerMap<> = { 
  user: typeof userReducer, 
  menu: typeof menuReducer 
}

type CR<RM, S, A> = {
  ( r: {
    [P in keyof RM]: RM[P]
  } ): ( s: RM[P], a: A ) => S
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

cr({ user: userReducer, menu: menuReducer })