import { useState } from "react";
import { CancelEditNoteButton, EditNoteButtonsContainer, NoteText, SaveNoteButton } from "./Note.styled"

interface NoteTextEditerProps {
    editableText: string | undefined
    onCancel: () => void
    onSave: (text: string) => void;
}

export const NoteTextEditer = ({ editableText, onCancel, onSave } : NoteTextEditerProps) => {
    const [ text, setText ] = useState(editableText ? editableText : "");

    return (
        <>
            <NoteText value={ text } onChange={ event => { setText(event.target.value) }}/>
            <EditNoteButtonsContainer>
                <CancelEditNoteButton onClick={ () => onCancel() }>Cancel</CancelEditNoteButton>
                <SaveNoteButton onClick={ () => { onSave(text) }}>Save</SaveNoteButton>
            </EditNoteButtonsContainer>
        </>
    )
}