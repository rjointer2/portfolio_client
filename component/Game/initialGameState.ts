import { initialGameObject } from "../../typeDef";

export const initialGameState: initialGameObject = {
    player: {
        hitbox_color: "#ff0000",
        name: "player",
        height: 32,
        width: 32,
        originalHeight: 32,
        x: 20,
        y: 0, 
        jumping: false,
        x_velocity: 0,
        y_velocity: 0,
        weight: 1,
        spriteSheet: {
            walk: {
                cols: 5,
                spriteSrc: './sprites/cat/walk.png',
                spriteWidth: 240
            },
        }
    }
}