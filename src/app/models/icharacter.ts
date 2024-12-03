export interface ICharacter {
    id: number;
    name: string;
    height: number;
    weight: number;
    base_experience: number;
    abilities: Array<{
        ability: {
            name: string;
            url: string;
        };
        is_hidden: boolean;
        slot: number;
    }>;
    sprites: {
        front_default: string;
        back_default: string;
        other: {
            "official-artwork": {
                front_default: string;
            };
        };
    };
    types: Array<{
        type: {
            name: string;
            url: string;
        };
    }>;
    moves: Array<{
        move: {
            name: string;
            url: string;
        };
    }>;
    species: {
        name: string;
        url: string;
    };
    evolvesFrom: string;
    hp: number;
}
