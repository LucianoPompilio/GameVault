import { Link } from 'react-router-dom';
import Button from '../components/Button';
import GameCard from '../components/GameCard';

function Home() {
  return (
    <div className='flex flex-wrap gap-4'>
      <h1>Home</h1>
      <div className='flex flex-wrap gap-4'>
      <GameCard title="The Legend of Zelda: Breath of the Wild"
      year="2017"
      developer="Nintendo"
      image="https://assets.nintendo.com/image/upload/q_auto/f_auto/store/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58"
      onButtonClick={() => alert('¡Juego seleccionado!')}
       />
      <GameCard title="Super Mario Odyssey"
      year="2017"
      developer="Nintendo"
      image="https://assets.nintendo.com/image/upload/q_auto/f_auto/store/software/switch/70010000001130/c42553b4fd0312c31e70ec7468c6c9bccd739f340152925b9600631f2d29f8b5"
      onButtonClick={() => alert('¡Juego seleccionado!')}
       />
      <GameCard title="Elden Ring"
      year="2022"
      developer="From Software"
      image="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/capsule_616x353.jpg?t=1767883716"
      onButtonClick={() => alert('¡Juego seleccionado!')}
       />
       </div>


      </div>
   
  );
}

export default Home;
