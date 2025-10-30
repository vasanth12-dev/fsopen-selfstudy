import Note from './components/Note'
import { use, useState } from 'react'
const Notes = (props) => {
  const [notes,setNotes] = useState(props.notes);
  const [note,setNote] = useState('a new note');
  const [showAll,setShowAll] = useState(true);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content : note,
      import : Math.random() < 0.5,
      id : String(notes.length+1)
    }

    console.log(noteObject);

    setNotes(notes.concat(noteObject));
    setNote('');
  }

  const handleChange = (event) => {
    setNote(event.target.value);
  }

  const noteShow = showAll ? notes : notes.filter(note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => setShowAll(!showAll)}>show {showAll ? 'important' : 'all'}</button>


      <ul>
        {noteShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>


      <form onSubmit={addNote}>
        <input value={note} onChange={handleChange}/>
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default Notes;