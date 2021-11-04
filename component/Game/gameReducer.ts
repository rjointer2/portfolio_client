
import { Sprite } from "../../typeDef";

//import * as actionTypes from './actionTypes';

type ActionMap<T> = {
    [P in keyof T]: P
}

type action<T, P> = { 
    type: T,
    payload: P,
    context: CanvasRenderingContext2D,
    frame: number
}

type reducer<S, A> = ( s: S, a: A ) => S;

export const gameReducer: reducer<Sprite, action<ActionMap<'WALK' | 'HURT' | 'JUMP'>, Sprite>> = ( 
    state, action 
) => {

    const sprite = document.createElement('img');
    const { context, frame } = action;

    if(action.type === 'WALK') {
        const { spriteWidth, cols, spriteSrc } = state.spriteSheet.walk;
        sprite.src = spriteSrc

        const currentFrame = frame % cols;
        const width = spriteWidth / cols;
        const srcX = currentFrame * width;

        context.rect(state.x, state.y, state.width, state.height);
        context.drawImage(
            sprite, srcX, 0, 
        // w   h  
            48, 48, 
            state.x, state.y, 
            state.width, state.height
        )

        return state;
    }

    if(action.type === 'JUMP') {

        const { spriteWidth, cols, spriteSrc } = state.spriteSheet.jump;
        sprite.src = spriteSrc;

        const currentFrame = frame % cols;
        const width = spriteWidth / cols;
        const srcX = currentFrame * width;

        context.rect(state.x, state.y, state.width, state.height);
        context.drawImage(
            sprite, srcX, 0, 
        // w   h  
            48, 48, 
            state.x, state.y, 
            state.width, state.height
        )

        return {
            ...state,
            y_velocity: state.y_velocity + 0.9,
            x: state.x + state.x_velocity,
            y: state.y + state.y_velocity
        }
    }

    return state

}

