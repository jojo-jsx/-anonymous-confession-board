import React from 'react'

const ConfessionCard = ({text, likes, onLike, onDelete}) => {
  return (
    <div className="ConfessionCard">
      <p className="Confession Text">{text}</p>
      <div className="CardActions">
     <div className="card-actions">
        <button className="like-btn" onClick={onLike}>
          ❤️ {likes}
        </button>

        <button className="delete-btn" onClick={onDelete}>
          Delete
        </button>
        </div>
      </div>
    </div>
  );
}

export default ConfessionCard
