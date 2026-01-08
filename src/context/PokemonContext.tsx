import React, { createContext, ReactNode, useContext, useState } from "react";
import { Alert } from "react-native";

import { getPokemonById } from "../services/pokeApi";
import { Pokemon } from "../types/Pokemon";
import { useNavigation } from "@react-navigation/native";

interface PokemonContextData {
    pokemon: Pokemon | null;
    prevId: number | null;
    nextId: number | null;
    loading: boolean;
    loadPokemon: (id: number) => Promise<void>;
    favorites: Pokemon[];
    toggleFavorite: (pokemon: Pokemon) => void;
}

interface PokemonProviderProps {
    children: ReactNode;
}

export const PokemonContext = createContext<PokemonContextData>({} as PokemonContextData);

export function PokemonProvider({ children }: PokemonProviderProps) {
    const navigation = useNavigation();

    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [loading, setLoading] = useState(false);

    const [prevId, setPrevId] = useState<number | null>(null);
    const [nextId, setNextId] = useState<number | null>(null);

    const [favorites, setFavorites] = useState<Pokemon[]>([]);

    const toggleFavorite = (pokemonToAdd: Pokemon) => {
        const alreadyExists = favorites.some(p => p.id ===pokemonToAdd.id);

        if(alreadyExists) {
            setFavorites(current => current.filter(p => p.id !== pokemonToAdd.id));
        } else {
            setFavorites(current => [...current, pokemonToAdd]); // O que current quer dizer nesse contexto?
        }
    }

    async function loadPokemon(id: number) {
        setLoading(true);

        try {
            const data = await getPokemonById(String(id));
            setPokemon(data);
            setLoading(false);

            setPrevId(id > 1 ? id - 1 : null);
            setNextId(id + 1);

        } catch (error) {
            setLoading(false);
            Alert.alert(
                'Erro',
                'Não foi possível encontrar Pokémon.',
                [
                    {
                        text: 'OK',
                        onPress: () => navigation.goBack()
                    }
                ]
            );
        } 
    }

    return (
        <PokemonContext.Provider value={
            {
                pokemon,
                prevId,
                nextId,
                loading,
                favorites,
                loadPokemon,
                toggleFavorite,
            }
        }>{children}</PokemonContext.Provider>
    );
}

export function usePokemon() {
    return useContext(PokemonContext);
}