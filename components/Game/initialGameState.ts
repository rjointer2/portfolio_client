import { Sprite } from "../../typeDef";

export const initialPlayerState: Sprite = {
    hitbox_color: "#ff0000",
    name: "player",
    height: 48,
    width: 48,
    harmed: false,
    jumping: false,
    x: 20,
    y: 0, 
    weight: 1,
    spriteSheet: {
        walk: {
            cols: 5,
            spriteSrc: './sprites/cat/walk.png',
            spriteWidth: 240
        },
        jump: {
            cols: 1,
            spriteSrc: './sprites/cat/jump.png',
            spriteWidth: 48
        },
        hurt: {
            cols: 2,
            spriteSrc: './sprites/cat/Hurt.png',
            spriteWidth: 92
        }
    }
}

export const initialEnemyState: Sprite = {
    hitbox_color: "#ff0000",
    name: "enemy",
    jumping: false,
    harmed: false,
    height: 32,
    width: 32,
    x: 300,
    y: 0, 
    weight: 1,
    spriteSheet: {
        walk: {
            cols: 4,
            spriteSrc: './sprites/rat/walk.png',
            spriteWidth: 128
        },
        jump: {
            cols: 1,
            spriteSrc: './sprites/cat/jump.png',
            spriteWidth: 48
        },
        // do not use!
        hurt: {
            cols: 1,
            spriteSrc: './sprites/cat/jump.png',
            spriteWidth: 48
        }
    }
}