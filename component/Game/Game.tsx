
import React, { useLayoutEffect, useMemo, useReducer, useState } from 'react';

// local state management
import { gameReducer } from './gameReducer';
import { initialGameState } from './initialGameState';


export default function Game() {

    const [ gameState, gameDispatch ] = useReducer( gameReducer, initialGameState )

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

            // update the frame
            setFrame( f => f + 1 )

        }, 20)

        return () => {
            clearTimeout(loop)
        }
        
    })

    return (
        <canvas></canvas>
    )
}
