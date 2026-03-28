import { Link } from "react-router-dom";
import Button  from "../components/Button";
function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Button 
        label="Haz clic aquí"
        onClick={() => alert("¡Botón clickeado!")}
      />
      <Link to="/library">
        Ir a Mi Biblioteca
      </Link>
    </div>
  );
}

export default Home;

