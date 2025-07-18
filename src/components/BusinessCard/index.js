const BusinessCard = ({ data, onRegenerate }) => {
  return (
    <div className="bg-white mt-6 p-6 h-full shadow-md w-full max-w-md rounded">
      <h2 className="text-xl font-bold mb-2">{data.name} – {data.location}</h2>
      <p className="text-yellow-500 font-semibold mb-1">Rating: {data.rating}★</p>
      <p className="text-gray-700 font-semibold mb-3">Reviews: {data.reviews}</p>
      <p className="italic text-red-600 mb-4">"{data.headline}"</p>
      <button
        onClick={onRegenerate}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition block mx-auto"
      >
        Regenerate SEO Headline
      </button>
    </div>
  );
};

export default BusinessCard;
