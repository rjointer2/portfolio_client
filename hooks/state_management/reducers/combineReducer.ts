

export {}

type State<Obj> = {
  [P in keyof Obj]: Obj[P]
} 


type userStateType = State<{
  user: {
    username: string
  }
}>

type menuStateType = State<{
  menu: {
    MENU_NAV: boolean
  }
}>

const userState: userStateType = {
  user: {
    username: 'Bob'
  }
}

const menuState: menuStateType = {
  menu: {
    MENU_NAV: false
  }
}


type Reducer<S, A> = (s: S, a: A) => S

const userReducer: Reducer<userStateType, any> = (s, a) => s;
const menuReducer: Reducer<menuStateType, any> = (s, a) => s;



type testS<S> = {
  [P in keyof S]: Reducer<S, any>
}

function cr<S, A> ( r: testS<userStateType | menuStateType> ) {
  return ( s: S, a: A ) => Object.keys(r).reduce(
    (acc, prop) => ({
      ...acc,
      [prop]: r[prop](acc[prop], a),
    }),
    s
  )
}

cr({ user: userReducer, menu: menuReducer})

















/* type Reducer<S, A> = 
S extends State<infer Q> 
? ( s: Q, a: A ) => S
: never */

/* type userState = {
  user: {
    username: string
  }
}
type menuState = {
  menu: {
    menu_nav: boolean
  }
}

const userReducer: Reducer<userState, any> = (s, a) => s;
const menuReducer: Reducer<menuState, any> = (s, a) => s;

export type ReducersMapObject<S> = {
  [K in keyof S]: Reducer<S[K], any>
}

const cr = ( r: ReducersMapObject<userState & menuState> ) => {}

cr({ "menu": menuReducer, "user": userReducer }) */


/* 
type testS<S> = {
  [P in keyof S]: P extends P ? Reducer<infer S, any> : never
}

const userReducer: Reducer<userState, any> = (s, a) => s;
const menuReducer: Reducer<menuState, any> = (s, a) => s;

const cr = (r: testS<userState & menuState>) => {}

cr({ user: userReducer })

type newState = testS<userState & menuState>

type Hello = {
  hello: "world"
}

type testInfer<T> =
T extends Hello
? Hello 
: 'other';

type helloTest = { hello: 'world' }

type testNewInfer = testInfer<helloTest> */

























/* 
export type userState = {
  [index: string]: any
  user: {
    username: string
  }
}

type UserActionMap = {
  type: {
      USER_LOGGED_IN: 'USER_LOGGED_IN'
      USER_LOGGED_OUT: 'USER_LOGGED_OUT'
  }
  payload: null | userState
}

export type menuState = {
  [index: string]: any
  menu: {
    MENU_NAV: string
  }
}

type MenuActionMap = {
  type: {
      MENU_NAV: string
  }
  payload: null | menuState
}

type Reducer<S, A> = (s: S, a: A) => S

type rm<S> = ( r: {
  [P in keyof S]: Reducer<S, any>
}) => ( s: S, a: any ) => S

const userReducer: Reducer<userState, UserActionMap> = (s, a) => s;
const menuReducer: Reducer<menuState, MenuActionMap> = (s, a) => s;

const test: rm<userState | menuState>  = (r) => ( s, a ) => Object.keys(r).reduce(
  (acc, prop) => ({
    ...acc,
    [prop]: r[prop](acc[prop], a),
  }),
  s
)


test({ user: userReducer, menu: menuReducer })


/* type RM<S, A> = ( r: {
  user : Reducer<S, A>,
  menu: Reducer<S, A>
}) => ( s: S, a: A ) => void

export const combineReducer: RM<UserStateType | MenuStateType, UserActionType | MenuActionMap> = (r) => ( s, a ) => Object.keys(r).reduce(
  (acc, prop) => ({
    ...acc,
    [prop]: r[prop](acc[prop], a),
  }),
  s
)

combineReducer({
 user: userReducer,
 menu: menuReducer
})  */

/*

type stateInfered<S> = {  
  [P in keyof S]: Reducer<S[P], any>
}


let testi: stateInfered<userState | menuState> = {
  "user": userReducer,
  "menu": menuReducer
}
 */
