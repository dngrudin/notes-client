import Button from "components/common/Button/Button.styled"
import { ButtonsWrapper, NoteText } from "./Note.styled"

interface NoteTextViewerProps {
    viewedText: string | undefined
    onEdit: () => void
}

export const NoteTextViewer = ({ viewedText, onEdit }: NoteTextViewerProps) => {
    return (
        <>
            <NoteText value={viewedText ? viewedText : ""} />
            <ButtonsWrapper>
                <Button variant="primary" onClick={() => onEdit()}>Edit</Button>
            </ButtonsWrapper>
        </>
    )
}