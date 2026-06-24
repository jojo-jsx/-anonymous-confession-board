import react from 'react'

const ConfessionCard = ({ confession, onLike, onDelete }) => {
  const { id, text, likes } = confession;

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 shadow-md mb-4">
      {/* The confession text */}
      <p className="text-white text-lg mb-3">{text}</p>

      {/* The action buttons — side by side */}
      <div className="flex items-center justify-between">
        <button
          className="flex items-center gap-1 text-pink-400 hover:text-pink-300 transition"
          onClick={() => onLike(id)}
        >
          ❤️ {likes}
        </button>

        <button
          className="text-gray-400 hover:text-red-400 text-sm transition"
          onClick={() => onDelete(id)}
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

export default ConfessionCard;