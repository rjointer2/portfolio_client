
export type SpriteMap = {
    cols: number;
    spriteWidth: number;
    spriteSrc: string;
}

export type Sprite = {
    // characterisitics
    hitbox_color: string;
    name: string;
    harmed: boolean;

    // physical traits
    height: number;
    width: number;

    // coords
    x: number;
    y: number; 

    // physics
    weight: number;

    // powers
    jumping: boolean;

    // sprite sheet resources
    spriteSheet: {
        walk: SpriteMap,
        jump: SpriteMap,
        hurt: SpriteMap,
    }
    
}
