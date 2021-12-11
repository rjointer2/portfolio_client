
export type SpriteMap = {
    cols: number;
    spriteWidth: number;
    spriteSrc: string;
}

export type Sprite = {
    // characterisitics
    hitbox_color: string;
    name: string;
    harmed: boolean;

    // physical traits
    height: number;
    width: number;

    // coords
    x: number;
    y: number; 

    // physics
    weight: number;

    // powers
    jumping: boolean;

    // sprite sheet resources
    spriteSheet: {
        walk: SpriteMap,
        jump: SpriteMap,
        hurt: SpriteMap,
    }
    
}


export interface User {
    username: string

}

type BaseState = {
    [index: string]: any
    user: User | null
    menu: {
        MENU_NAV: boolean
    }
}

export type State = Partial<BaseState>

// Action Defs

export type ActionTypes = {

    // MENU TYPES
    MENU_SEARCH: boolean,
    MENU_NAV: boolean,
    MENU_COMMENT: boolean,
    MENU_TODO: boolean,

    // USER TYPES
    USER_LOGGED_IN: null | User,
    USER_LOGGED_OUT: null,
    USER_AUTHENICATING: null
}

export type ActionMap = {
    type: keyof ActionTypes
    payload?: any
};


/**
 * @name ActionPayloadData
 * @description Type def for action payloads
 */


// Reducers

export type Reducer<S, A> = (state: S, action: A) => S;

export type combineReducersType<S, A> = (
    reducers: { [P in keyof S]: Reducer<S, A> }
) => Reducer<S, A>;