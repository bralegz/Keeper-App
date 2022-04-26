import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [newNote, setNewNote] = useState({
    title:"",
    content: ""
  });
  const [allNotes, setAllNotes] = useState([]);

  function addNote(event) {
    const nameInput = event.target.name
    setNewNote({
      ...newNote,
      [nameInput]: event.target.value,
    })
  };

  function clickHandler(event) {
    event.preventDefault()
    setAllNotes(() => {
      return [...allNotes, newNote]
    })

    setNewNote({
      title:"",
      content: ""
    });

  };

  function deleteItem(id) {
    setAllNotes(() => {
      return allNotes.filter((note, index) => id !== index)
    })
  };


  return(
    <div>
        <Header />
        <CreateArea 
        addNote={addNote} 
        clickHandler={clickHandler} 
        titleValue={newNote.title} 
        textAreaValue={newNote.content}         
        />
        {allNotes.map((note, index) => {
          return (
            <Note 
              key={index}
              id={index}
              deleteItem={deleteItem} 
              title={note.title} 
              content={note.content}
            />
          );
        })}
        <Footer />
    </div>
  );  
};

export default App;