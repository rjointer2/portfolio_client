
import React, { useLayoutEffect, useMemo, useReducer, useState } from 'react';

// local state management
import { gameReducer } from './reducers/playerReducer';
import { initialPlayerState } from './initialGameState';
import { enemyReducer } from './reducers/enemyReducer';


export default function Game() {

    const [ init, setInit ] = useState(false);
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

            if(init) {
                context.fillStyle = '#4e5766';
                context.fillRect(0, 0, 320, 180);


                // enemies functions
                dispatchEnemies({ type: 'WALK', context, frame, player });
                dispatchEnemies({ type: 'FALL', context, frame });
                dispatchEnemies({ type: 'GROUNDED', context, frame });
                dispatchEnemies({ type: 'REMOVE', context, frame });



                // player functions
                dispatchPlayer({ type: 'ANIMATE', context, frame });
                if(player.y > 84) dispatchPlayer({ type: 'GROUNDED', context, frame });

                player.jumping === true && player.y >= 10 ? 
                    dispatchPlayer({ type: 'LIFT', context, frame })
                :
                    dispatchPlayer({ type: 'FALL', context, frame })
                
                dispatchPlayer({ type: 'HURT', context, frame, enemies });

                
                // update the frame
                setFrame( f => f + 1 )
            }

        }, 20)

        const invokeController = (e: KeyboardEvent) => { 
            if(e.code === 'ArrowUp' && player.jumping === false && player.y > 82 ) {
                dispatchPlayer({ type: 'LIFT', context: context, frame: frame })
            }
          }

        window.addEventListener('keydown', invokeController)

        return () => {
            window.removeEventListener('keydown', invokeController)
            clearTimeout(loop)
        }
        
    })

    return <button onClick={() => setInit(i => !i)}>Start Game</button>
}
