import { Pokemon } from '../types/Pokemon';

interface PokeApiResponse {
    id: number;
    name: string;
    types: {
        type: {
            name: string;
        };
    }[];
    sprites: {
        front_default: string;
    };
}

export async function getPokemonById(id: string): Promise<Pokemon> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    if (!response.ok) {
        throw new Error('Pokemon não encontrado!');
    }

    const data: PokeApiResponse = await response.json();

    const types = data.types.map(t => t.type.name).join(', ');

    return {
        id: data.id,
        name: data.name,
        types,
        sprite: data.sprites.front_default,
    };
}