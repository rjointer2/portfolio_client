
import { Sprite } from "../../../typeDef";
import { initialEnemyState } from "../initialGameState";

import { action, ActionMap, reducer } from "./gameReducerTypeDefs";

export const enemyReducer: reducer<Array<Sprite>, action<ActionMap<'SPAWN' | 'WALK'>, Array<Sprite>>> = (
    state, action
) => {

    const { frame, context } = action;

    if(action.type === 'WALK') {
        state.map(( e, i, arr ) => {

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
                48, 48, 
                e.x, e.y, 
                e.width, e.height,
            )

            e.x = e.x - 1
        })

        console.log(state)

        return state.filter(( e, i ) => e.x > -32)
        
    }

    if( action.type === 'SPAWN' ) {
        const newEnemy = Object.create(initialEnemyState)
        return [...state, newEnemy]
    }

    

    return state;

    

}