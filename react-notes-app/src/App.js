import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "18/12/22",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "18/12/22",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "18/12/22",
    },
    {
      id: nanoid(),
      text: "This is my fourth note!",
      date: "18/12/22",
    },
  ]);

  return (
    <div className="container">
      <NotesList />
    </div>
  );
};

export default App;
