import { NoteListItemContainer } from "./NoteList.styled"
import { useAppState } from "components/contexts/AppStateContext"

interface NoteListItemProps {
    id: string
    text: string
    index: number
}

export const NoteListItem = ({ id, text, index }: NoteListItemProps) => {
    const { state, dispatch } = useAppState()

    return (
        <NoteListItemContainer onClick={() => { dispatch({ type: "SELECT_NOTE", payload: id }) }} active={state.selectedId === id}>
            {text}
        </NoteListItemContainer>
    )
}