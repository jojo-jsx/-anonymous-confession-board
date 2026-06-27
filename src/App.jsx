import React from "react";
import { useState } from "react";
import ConfessionForm from "./Component/ConfessionForm";
import ConfessionList from "./Component/ConfessionList";
import { LuMoonStar } from "react-icons/lu";

function App() {
  const [confession, setConfession] = useState([]);
  const [text, setText] = useState("");

  const maxChar = 200;

  function clickSubmit(e) {
    e.preventDefault();

    if (!text.trim()) {
      return;
    }

    if (text.length > maxChar) {
      return;
    }

    const newConfession = {
      id: Date.now(),
      text: text.trim(),
      likes: 0,
    };

    setConfession([newConfession, ...confession]);

    setText("");
  }

  function clickLike(id) {
    const updatedConfession = confession.map((confession) => {
      if (confession.id === id) {
        return { ...confession, likes: confession.likes + 1 };
      } else {
        return confession;
      }
    });

    setConfession(updatedConfession);
  }

  function clickDelete(id) {
    const updatedConfession = confession.filter(
      (confession) => confession.id !== id,
    );

    setConfession(updatedConfession);
  }

  return (
    <div className="min-h-screen bg-[#08080F] px-4 py-6 md:py-12">
      <div className="max-w-2xl mx-auto">
        <div className=" flex flex-col justify-center text-center text-white  mb-8">
          <div className=" flex items-center justify-center text-3xl ">
            <LuMoonStar />
          </div>
          <h1 className="text-3xl font-bold mt-4 mb-2">Confession Board</h1>
          <p className="leading-relaxed text-[15px] text-[#847F7B]">
            A space to let things go. Speak freely, listen kindly. Everyone here
            is anonymous ---- including you.
          </p>
        </div>
        <ConfessionForm
          text={text}
          setText={setText}
          clickSubmit={clickSubmit}
        />
        <ConfessionList
          confessions={confession}
          clickLike={clickLike}
          clickDelete={clickDelete}
        />
      </div>
    </div>
  );
}

export default App;
