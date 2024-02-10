function Movie({ name, poster }) {
  return (
    <div className="max-w-sm rounded-[20px] overflow-hidden shadow-lg">
      <img className="w-full" src={poster} alt={`Poster of ${name}`} />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{name}</div>
      </div>
    </div>
  );
}

export default Movie;
