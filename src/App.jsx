<<<<<<< HEAD
import React from "react";
import { useState } from "react";

function App() {
  const [confession, setConfession] = useState([]);
  const [text, setText] = useState("");

  const maxChar = 200;

  function clickSubmit(e) {
    e.preventDefault();

    if (text == "") {
      return;
    }
    if (text != text.trim()) {
      return;
    }
    if (text.length > 200) {
      return `max length exceeded`;
    }

    const newConfession = [
      {
        id: Date.now(),
        text: { text },
        likes: 0,
      },
    ];

    setConfession([...newConfession, confession]);

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

  return <div>jojooo</div>;
}

export default App;
=======
import { useState } from "react";
import react from "react";
import ConfessionList from "./Component/ConfessionList";
import ConfessionCard from "./Component/ConfessionCard";


function App() {
        //state
  const [confessions, setConfessions] = useState([]);
  const [text, setText] = useState("");

        //Handler function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") return;

    const newConfession = {
      id: Date.now(),
      text: text,
      likes: 0,
    };

    setConfessions([newConfession, ...confessions]);
    setText("");
  };

  const handleLike = (id) => {
    setConfessions(
      confessions.map((confession) => {
        if (confession.id === id) {
          return { ...confession, likes: confession.likes + 1 };
        } else {
          return confession;
        }
      })
    );
  };

  const handleDelete = (id) => {
    setConfessions(
      confessions.filter((confession) => confession.id !== id)
    );
  };

          // Renders on Screen
  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <h1 className="text-3xl text-white font-bold text-center mb-8">
        🙈 Anonymous Confessions
      </h1>

      {/* The form will go here — needs the text state + handleSubmit */}

      <ConfessionList
        confessions={confessions}
        onLike={handleLike}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
>>>>>>> 5ebcdba3adf1f1480397417b826cda2d4cc5fd7c
