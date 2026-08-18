import { useNavigate, useParams } from "react-router-dom";
import games from "../assets/Games";

function GameDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const game = games.find((game) => game.id === Number(id));

  return (
    <div className="w-64 bg-zinc-900 rounded-xl overflow-hidden shadow-lg p-4">

      <img
        src={game.image}
        alt={game.title}
        className="w-full h-40 object-cover rounded-md"
      />

      <h2>{game.title}</h2>

      <p>
        {game.year} · {game.developer}
      </p>

      <button
        onClick={() => navigate(-1)}
        className="rounded-full bg-amber-600 p-4"
      >
        Volver
      </button>

    </div>
  );
}

export default GameDetail;