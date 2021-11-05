

export type ActionMap<T> = {
    [P in keyof T]: P
}

export type action<T, P> = { 
    type: T,
    payload: P,
    context: CanvasRenderingContext2D,
    frame: number
}

export type reducer<S, A> = ( s: S, a: A ) => S;