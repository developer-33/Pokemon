


const Navbar2 = () => {
  return (
    <div>


<nav className="bg-yellow-500 p-4 flex justify-between items-center shadow-lg">
  <div className="flex items-center">
    <img src="/pokeball.png" alt="Pokeball" className="w-10 h-10 mr-3" />
    <span className="text-white font-bold text-xl">Pokémon Fansite</span>
  </div>
  <ul className="flex space-x-6">
    <li className="text-white hover:text-gray-200"><a href="/">Home</a></li>
    <li className="text-white hover:text-gray-200"><a href="/fourm">Forum</a></li>
    <li className="text-white hover:text-gray-200"><a href="#">Pokémon List</a></li>
    <li className="text-white hover:text-gray-200"><a href="#">Leaderboard</a></li>
    <li className="text-white hover:text-gray-200"><a href="#">Login</a></li>
  </ul>
</nav>


    </div>
  )
}

export default Navbar2