import { EditNoteButton, EditNoteButtonsContainer, NoteText } from "./Note.styled"

interface NoteTextViewerProps {
    viewedText: string | undefined
    onEdit: () => void
}

export const NoteTextViewer = ({ viewedText, onEdit } : NoteTextViewerProps) => {
    return (
        <>
            <NoteText value={ viewedText ? viewedText : "" }/>
            <EditNoteButtonsContainer>
                <EditNoteButton onClick={ () => onEdit() }>Edit</EditNoteButton>
            </EditNoteButtonsContainer>
        </>
    )
}