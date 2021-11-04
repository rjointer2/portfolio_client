
import React, { useLayoutEffect, useMemo, useReducer, useState } from 'react';

// local state management
import { gameReducer } from './gameReducer';
import { initialGameState } from './initialGameState';


export default function Game() {

    const [ player, dispatchPlayer ] = useReducer( gameReducer, initialGameState );

    

    const context = useMemo(() => {
        const canvas = document.querySelector('canvas') as HTMLCanvasElement
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
        return ctx
      }, []);

    const [ frame, setFrame ] = useState(0);
    

    useLayoutEffect(() => {

        const loop = setTimeout(() => {

            context.fillStyle = '#4e5766';
            context.fillRect(0, 0, 320, 180);

            if(player.y > 99) {
                dispatchPlayer({ type: 'WALK', payload: player, context: context, frame: frame })
            }

            if(player.y < 99) {
                dispatchPlayer({ type: 'JUMP', payload: player, context: context, frame: frame })
            }

            // update the frame
            setFrame( f => f + 1 )

        }, 20)


        window.addEventListener('click', () => {

        })

        return () => {
            clearTimeout(loop)
        }
        
    })

    return (
        <div>
            
        </div>
    )
}
