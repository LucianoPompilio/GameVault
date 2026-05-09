function Button({ label, onClick }) {
  return (
    <button onClick={onClick} className="rounded-full bg-amber-600 p-4">
      {label}
    </button>
  );
}

export default Button;
