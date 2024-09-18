import PokemonList2 from "../components/TryPokemom"

const TryPokemonPage = () => {
  return (
    <div>TryPokemonPage
    <div className="pokemon-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
  <PokemonList2 />
</div>

<div className="pokemon-card p-4 bg-white shadow-md rounded-md text-center">
  <h2>Pokémon Name</h2>
  <img src="https://example.com/image.jpg" alt="Pokémon Name" className="mb-4" />
</div>

    </div>
  )
}

export default TryPokemonPage
