
import { Sprite } from "../../../typeDef";
import { action, ActionMap, reducer } from "./gameReducerTypeDefs";


export const gameReducer: reducer<Sprite, action<ActionMap<'FALL' | 'LIFT' | 'GROUNDED'>, Sprite>> = ( 
    state, action 
) => {

    const sprite = document.createElement('img');
    const { context, frame } = action;

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
        state.width, state.height,
    )

    if(action.type === "FALL") {
        return {
            ...state,
            y: state.y + 3.2,
            jumping: false
        }
    }

    if(action.type === "LIFT") {
        return {
            ...state,
            y: state.y - 3.2,
            jumping: true
        }
    }

    if(action.type === 'GROUNDED') {
        return {
            ...state,
            y: 100,
            jumping: false
        }
    }
 
    return state
    

}


