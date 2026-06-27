import ConfessionCard from "./ConfessionCard";
import { IoChatbubbleOutline } from "react-icons/io5";

const ConfessionList = ({ confessions, clickLike, clickDelete }) => {
  return (
    <div className="mt-2">
      <div className="text-[#6C6864] flex items-center gap-2 mt-2 mb-1">
        <IoChatbubbleOutline />
        <p>{confessions.length} / Confession(s)</p>
      </div>

      {confessions.length === 0 ? (
        <div className="text-center text-gray-400 py-10">
          <p className="text-xl">No confessions yet. Be the first! 🙈</p>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto p-4">
          {confessions.map((confession) => (
            <ConfessionCard
              key={confession.id}
              confession={confession}
              clickLike={clickLike}
              clickDelete={clickDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ConfessionList;
