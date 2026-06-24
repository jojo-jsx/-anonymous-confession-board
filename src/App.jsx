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
