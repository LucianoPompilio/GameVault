import { Link } from 'react-router-dom';
import Button from '../components/Button';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Button
        label="Haz clic aquí"
        onClick={() => alert('¡Botón clickeado!')}
      />
      <Link to="/library" className='rounded-full bg-red-400 shadow-xl p-4'>Ir a Mi Biblioteca</Link>
    </div>
  );
}

export default Home;
