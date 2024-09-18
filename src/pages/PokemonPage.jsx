
import PokemonList from "../components/Pokedex"


const PokemonPage = () => {
  return (
    <div className="pokemon-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    <PokemonList />
  </div>
  

  
  )
}

export default PokemonPage