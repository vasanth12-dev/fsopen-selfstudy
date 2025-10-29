import note from "./note";
const Notes = () => {
    return(
        <>
            <ul>
                {note.map((element)=> <li key={element.id}>{element.content}</li>)}
            </ul>
        </>
    )
}

export default Notes;