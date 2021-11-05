
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


            // enemies functions
            if( frame % 100 === 0 ) dispatchEnemies({ type: 'SPAWN', payload: enemies, context: context, frame: frame });
            dispatchEnemies({ type: 'WALK', payload: enemies, context, frame });
            dispatchEnemies({ type: 'FALL', payload: enemies, context, frame });
            dispatchEnemies({ type: 'GROUNDED', payload: enemies, context, frame });
            dispatchEnemies({ type: 'REMOVE', payload: enemies, context, frame });



            // player functions
            dispatchPlayer({ type: 'ANIMATE', payload: player, context, frame });
            if(player.y > 84) dispatchPlayer({ type: 'GROUNDED', payload: player, context, frame });

            player.jumping === true && player.y >= 10 ? 
                dispatchPlayer({ type: 'LIFT', payload: player, context, frame })
            :
                dispatchPlayer({ type: 'FALL', payload: player, context, frame })
            
            dispatchPlayer({ type: 'HURT', payload: player, context, frame, enemies });

            

            

            // update the frame
            setFrame( f => f + 1 )

        }, 20)

        const invokeController = (e: KeyboardEvent) => { 
            if(e.code === 'ArrowUp' && player.jumping === false && player.y > 84 ) {
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
