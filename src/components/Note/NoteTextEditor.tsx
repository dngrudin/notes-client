import { useState } from "react";
import { ButtonsWrapper, NoteText } from "./Note.styled"
import Button from "components/common/Button/Button.styled";

interface NoteTextEditorProps {
    editableText: string | undefined
    onCancel: () => void
    onSave: (text: string) => void;
}

export const NoteTextEditor = ({ editableText, onCancel, onSave }: NoteTextEditorProps) => {
    const [text, setText] = useState(editableText ? editableText : "");

    return (
        <>
            <NoteText value={text} onChange={event => { setText(event.target.value) }} />
            <ButtonsWrapper>
                <Button $variant="secondary" onClick={() => onCancel()}>Cancel</Button>
                <Button $variant="primary" onClick={() => { onSave(text) }}>Save</Button>
            </ButtonsWrapper>
        </>
    )
}