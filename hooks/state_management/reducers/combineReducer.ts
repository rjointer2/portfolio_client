import { combineReducers, MenuActionMap, MenuStateType, UserActionType, UserStateType } from "../../typeDefs";

export const combineReducer: combineReducers<
    UserStateType & MenuStateType, UserActionType | MenuActionMap
> = ( reducers ) => ( state, action ) => Object.keys(reducers).reduce(
    (acc, prop) => ({
      ...acc,
      [prop]: reducers[prop](acc[prop], action),
    }),
    state
);
