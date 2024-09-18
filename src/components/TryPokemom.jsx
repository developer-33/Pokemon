import  { useEffect, useState } from "react";
import axios from "axios";

const PokemonList2 = () => {
  const [pokemonList, setPokemonList] = useState([]); // State to store the list of Pokémon
  const [loading, setLoading] = useState(true); // Loading state

  // Function to fetch Pokémon data from the PokéAPI
  const fetchPokemon = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10"); // Fetches 10 Pokémon
      const pokemonResults = response.data.results;

      // Fetch detailed data for each Pokémon
      const detailedData = await Promise.all(
        pokemonResults.map(async (pokemon) => {
          const pokemonDetails = await axios.get(pokemon.url);
          return pokemonDetails.data;
        })
      );

      setPokemonList(detailedData); // Set the detailed Pokémon data
      setLoading(false); // End the loading state
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon(); // Fetch Pokémon data when the component mounts
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Show a loading indicator while fetching
  }

  return (
    <div className="pokemon-container text-yellow-400">
      {pokemonList.map((pokemon) => (
        <div key={pokemon.id} className="pokemon-card">
          <h2>{pokemon.name}</h2>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="pokemon-sprite"
          />
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <p>Base Experience: {pokemon.base_experience}</p>
          <p>Abilities: {pokemon.abilities.map(ability => ability.ability.name).join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default PokemonList2;
