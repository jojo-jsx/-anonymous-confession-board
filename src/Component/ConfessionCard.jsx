import { LuGhost } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";

export default function ConfessionCard({ confession, clickLike, clickDelete }) {
  return (
    <div className="bg-[#0B0D14] border border-[#0B0D14] rounded-lg p-4 md:p-5 shadow-md mb-4 ">
      <div className="flex items-center gap-2 mb-3">
        <div className="bg-[#1C1D2B] text-[#A5A8CA] p-2 rounded-full text-xl">
          <LuGhost />
        </div>
        <p className="text-[#A5A8CA] font-bold">Anonymous</p>
      </div>
      <p className="text-white text-lg mb-3">{confession.text}</p>

      <div className="flex items-center justify-between">
        <button
          className="flex items-center gap-1 text-pink-400 hover:text-pink-300 transition"
          onClick={() => clickLike(confession.id)}
        >
          {confession.likes} ❤️
        </button>

        <button
          className="text-[#9C9793] hover:text-red-400 text-xl transition"
          onClick={() => clickDelete(confession.id)}
        >
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
}
