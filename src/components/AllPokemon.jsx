import { useState, useEffect } from "react";

const AllPokemon = () => {
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    async function fetchAllPokemon() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
        const pokemonData = await response.json();
        setAllPokemon(pokemonData.results); // pokemonData.results holds the actual list
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllPokemon();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">All Pokémon</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {allPokemon.map((pokemon, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded shadow-md text-center hover:bg-blue-100 transition duration-300"
          >
            <p className="capitalize font-medium">{pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPokemon;


