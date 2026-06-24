import React from 'react'
import ConfessionCard from "./ConfessionCard";



const ConfessionList = ({ confessions, onLike, onDelete }) => {
  if (confessions.length === 0) {
    return (
      <div className="text-center text-gray-400 py-10">
        <p className="text-xl">No confessions yet. Be the first! 🙈</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      {confessions.map((confession) => (
        <ConfessionCard
          key={confession.id}
          confession={confession}
          onLike={onLike}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ConfessionList;