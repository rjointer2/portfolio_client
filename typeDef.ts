
export type SpriteMap = {
    cols: number;
    spriteWidth: number;
    spriteSrc: string;
}

export type Sprite = {
    // characterisitics
    hitbox_color: string;
    name: string;

    // physical traits
    height: number;
    width: number;
    originalHeight: number;

    // coords
    x: number;
    y: number; 

    // abilities
    jumping: boolean;

    // physics
    x_velocity: number;
    y_velocity: number;
    airbone: boolean;

    weight: number;

    // sprite sheet resources

    spriteSheet: {
        walk: SpriteMap,
        jump: SpriteMap
        /* jump: SpriteMap
        hurt: SpriteMap */
    }
    
}
