
import { Sprite } from "../../../typeDef";
import { initialEnemyState } from "../initialGameState";

import { action, ActionMap, reducer } from "./gameReducerTypeDefs";

export const enemyReducer: reducer<Array<Sprite>, action<ActionMap<'FALL' | 'WALK' | 'GROUNDED' | 'REMOVE'>, Array<Sprite>>> = (
    state, action
) => {

    const { frame, context } = action;

    if(action.type === 'GROUNDED') {
        return state.map( e => {
            return {
                ...e,
                y: 100,
                jumping: false
            }
        })
    }

    if( action.type === 'FALL' ) {
        return state.map( e => {
            return {
                ...e,
                y: e.y + 3.2,
                jumping: false
            }
        })
    }   

    if(action.type === 'WALK') {


        if(frame % 100 === 0) {
            return [ ...state, initialEnemyState ]
        }

        return state.map(( e, i ) => {

            const sprite = document.createElement('img');
            const { spriteWidth, cols, spriteSrc } = e.spriteSheet.walk;
            sprite.src = spriteSrc
    
            const currentFrame = frame % cols;
            const width = spriteWidth / cols;
            const srcX = currentFrame * width;
    
            context.rect(e.x, e.y, e.width, e.height);
            context.drawImage(
                sprite, srcX, 0, 
            // w   h  
                32, 32, 
                e.x, e.y, 
                e.width, e.height,
            )


            return {
                ...e,
                x: e.x - 3
            }


        })
    }

    if( action.type === 'REMOVE' ) {
        return state.filter(( e) => e.x > -32 )
    }

    return state
    
}