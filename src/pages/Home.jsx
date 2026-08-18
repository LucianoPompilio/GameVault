import { useState } from "react";
import GameCard from "../components/GameCard";
import { useNavigate } from "react-router-dom";
import GameDetail from "./GameDetail";
import Games from "../assets/Games";
function Home() {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState(""); 
  const [games, setGames] = useState(Games);
const navigate = useNavigate();
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
          onButtonClick={() => navigate("/game/" + game.id)}
        />
      ))}

    </div>

  </div>
);
}

export default Home;
