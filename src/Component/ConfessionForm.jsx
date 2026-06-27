import { LuGhost } from "react-icons/lu";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa";

export default function ConfessionForm({ text, setText, clickSubmit }) {
  const textLimit = text.length > 200;
  const canSubmit = text.trim() && text.length <= 200;

  return (
    <div>
      <form
        onSubmit={clickSubmit}
        className="bg-[#0B0D14] rounded-2xl p-4 md:p-6"
      >
        <div className="flex items-center gap-4">
          <div className="bg-[#1C1D2B] text-[#A5A8CA] p-2 rounded-full text-xl">
            <LuGhost />
          </div>
          <p className="text-white font-medium text-xl">
            Share your Confession
          </p>
        </div>
        <div className="relative mt-3 mb-4">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Share something you've never told anyone..."
            className="w-full h-32 bg[#05050B] border border-[#121319] rounded-xl p-4 text-white placeholder:text-[#6C6864] placeholder:text-xl resize-none outline-none bg-[#05050B] pb-10 focus:border-[#1D1412]  focus:border-4
"
          ></textarea>
          <div className=" flex items-center justify-between absolute bottom-3 right-3">
            {textLimit && <p>Limit exceeded!</p>}

            <p className="border border-[#14151C] text-[#A5A8CA] w-17 text-center rounded-xl bg-[#14151C] px-1">
              {text.length}/200
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-[#6C6864]">
            <IoShieldCheckmarkOutline className="text-2xl" />
            <p>Your identity is never stored</p>
          </div>

          <button
            type="submit"
            disabled={!canSubmit}
            className="
      flex items-center gap-2
      px-4 py-2 rounded-xl

      bg-[#E66700]
      text-[#05050B]

      disabled:bg-[#14151C]
      disabled:text-[#6C6864]

      transition-all duration-300
    "
          >
            <FaPaperPlane className="text-xl" />
            Post Anonymously
          </button>
        </div>
      </form>
    </div>
  );
}
