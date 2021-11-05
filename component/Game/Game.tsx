
import React, { useLayoutEffect, useMemo, useReducer, useState } from 'react';

// local state management
import { gameReducer } from './reducers/playerReducer';
import { initialEnemyState, initialPlayerState } from './initialGameState';
import { enemyReducer } from './reducers/enemyReducer';


export default function Game() {

    const [ frame, setFrame ] = useState(0);

    const [ player, dispatchPlayer ] = useReducer( gameReducer, initialPlayerState );
    const [ enemies, dispatchEnemies ] = useReducer( enemyReducer, []  )


    const context = useMemo(() => {
        const canvas = document.querySelector('canvas') as HTMLCanvasElement
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
        return ctx
    }, []);

    
    

    useLayoutEffect(() => {

        const loop = setTimeout(() => {

            context.fillStyle = '#4e5766';
            context.fillRect(0, 0, 320, 180);

            
            if( frame % 100 === 0 ) dispatchEnemies({ type: 'SPAWN', payload: enemies, context: context, frame: frame });
            dispatchEnemies({ type: 'WALK', payload: enemies, context: context, frame: frame });

            if(player.y > 100) dispatchPlayer({ type: 'GROUNDED', payload: player, context: context, frame: frame });

            if(player.jumping === true && player.y >= 50 ) {
                dispatchPlayer({ type: 'LIFT', payload: player, context: context, frame: frame });
            } else {
                dispatchPlayer({ type: 'FALL', payload: player, context: context, frame: frame });
            }

            

            // update the frame
            setFrame( f => f + 1 )

        }, 20)

        const invokeController = (e: KeyboardEvent) => { 
            if(e.code === 'ArrowUp' && player.jumping === false && player.y >= 100 ) {
                dispatchPlayer({ type: 'LIFT', payload: player, context: context, frame: frame })
            }
          }

        window.addEventListener('keydown', invokeController)

        return () => {
            window.removeEventListener('keydown', invokeController)
            clearTimeout(loop)
        }
        
    })

    return (
        <div>
            
        </div>
    )
}
