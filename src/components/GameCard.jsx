import Button from './Button';
function GameCard({ title, year, developer, image, onButtonClick }) {
  return (
    <div className="w-64 bg-zinc-900 rounded-xl overflow-hidden shadow-lg p-4 flex flex-wrap gap-4">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-md"
      />

      <h2>{title}</h2>

      <p>
        {year} · {developer}
      </p>

      <Button onClick={onButtonClick} label={'Add to Library'}></Button>
    </div>
  );
}

export default GameCard;
