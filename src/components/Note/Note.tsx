import { useState } from "react";
import { CancelEditNoteButton, EditNoteButton, EditNoteButtonsContainer, NoteContainer, NoteText, NoteTitle, SaveNoteButton } from "./Note.styled"
import { useNote, useUpdateNote } from "hooks/api/note"
import { NoteTextEditer } from "./NoteTextEditer";
import { NoteTextViewer } from "./NoteTextViewer";

interface NoteProps {
    id: string
}

export const Note = ({ id } : NoteProps) => {
    const { data: notes } = useNote(id);
    const noteMutation =  useUpdateNote(id);

    const [ isEditMode, setEditMode ] = useState(false);

    const title = notes ? notes.title : "";

    return (
        <NoteContainer>
            <NoteTitle>{ notes?.title }</NoteTitle>
            { isEditMode ? (
                <NoteTextEditer
                    editableText={ notes?.text } 
                    onCancel={ () => setEditMode(false) }
                    onSave= { (text: string) => { noteMutation.mutateAsync({ title: (notes ? notes.title : ""), text : text }); setEditMode(false) } }/>
            ) : (
                <NoteTextViewer
                    viewedText={ notes?.text }
                    onEdit={ () => setEditMode(true) }/>
            )}

        </NoteContainer>
    )
}
