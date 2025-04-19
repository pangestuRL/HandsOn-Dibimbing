import usePokemon from "../../hooks/usePokemon";

function Pokemon () {
    const { pokemonList } = usePokemon();
    
    return (
        <div>
            <h1>Pokemon Page</h1>
            {pokemonList.map((item) => (
                <div key={item}>
                    <p>{item?.genus}</p>
                </div>
            ))}
        </div>
    )
}

export default Pokemon;