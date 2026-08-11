import { useState } from "react";
import GameCard from "../components/GameCard";
function Home() {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState(""); 
  const [games, setGames] = useState([
  
    {
      id: 1,
      title: "The Legend of Zelda: Breath of the Wild",
      year: "2017",
      developer: "Nintendo",
      image: "https://assets.nintendo.com/image/upload/q_auto/f_auto/store/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58",
      category: "Adventure"
    },
    {
      id: 2,
      title: "Super Mario Odyssey",
      year: "2017",
      developer: "Nintendo",
      image: "https://assets.nintendo.com/image/upload/q_auto/f_auto/store/software/switch/70010000001130/c42553b4fd0312c31e70ec7468c6c9bccd739f340152925b9600631f2d29f8b5",
      category: "Platformer"
    },
    {
      id: 3,
      title: "Elden Ring",
      year: "2022",
      developer: "From Software",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/capsule_616x353.jpg?t=1767883716",
      category: "actionRpg"
    }
  ]);

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(search.toLowerCase())&& game.category?.toLowerCase().trim().includes(category.toLowerCase().trim())
  );
  console.log(category.trim())
return (
  <div className="p-4">

    <h1 className="text-3xl font-bold mb-6">
      Home
    </h1>

    <input
      type="text"
      placeholder="Buscar juego..."
      onChange={(event) => setSearch(event.target.value)}
      className="border border-gray-300 rounded-lg px-4 py-2 w-80 mb-6"
    />
  <select onChange={(event) => setCategory(event.target.value)}>
    
  <option value="">All</option>
  <option value="adventure">Adventure</option>
  <option value="platformer">Platformer</option>
  <option value="actionRpg">Action RPG</option>
</select>


    <div className="flex flex-wrap gap-4">

      {filteredGames.map((game) => (
        <GameCard
          key={game.id}
          title={game.title}
          year={game.year}
          developer={game.developer}
          image={game.image}
          onButtonClick={() => alert(game.title)}
        />
      ))}

    </div>

  </div>
);
}

export default Home;
