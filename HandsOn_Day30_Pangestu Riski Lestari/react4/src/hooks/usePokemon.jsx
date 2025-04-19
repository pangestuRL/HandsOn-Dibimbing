import { useState, useEffect } from "react";
import axios from "axios";

const usePokemon  = () => {
    const [pokemonList, setPokemonList] = useState(["pikachu", "charmander", "tongtong"]);

    const getPokemonList = async () => {
        try {
            const res= await axios.get ("https://pokeapi.co/api/v2/pokemon-species/bulbasaur");
            console.log(res);
            setPokemonList(res.data.genera);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPokemonList();
    })

    return {
        pokemonList
    };
}

export default usePokemon;