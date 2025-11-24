import { NoteListContainer } from "../NoteList/NoteList.styled"
import { NoteListItem } from "../NoteList/NoteListItem"
import { useNotes } from "hooks/api/note"


export const NoteList = () => {
    const { data: notes } = useNotes();

    return (
        <NoteListContainer>
            {notes?.map((note, i) => (
                <NoteListItem id={note.id} text={note.title} index={i} />
            ))}
        </NoteListContainer>
    )
}
