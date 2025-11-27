import styled from "styled-components"

export const NoteContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 18px;
    gap: 18px;
    background-color: ${props => props.theme.colors.background.primary};
`

export const NoteTitle = styled.div`
    padding: 2em;
    font-weight: 600;
    border-radius: 4px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: ${props => props.theme.colors.background.secondary};
    border: 1px solid ${props => props.theme.colors.border};
    color: ${props => props.theme.colors.text.secondary};
`

export const NoteText = styled.textarea`
    readonly;
    resize: none;
    flex-grow: 1;
    border-radius: 4px;
    padding: 18px;
    background-color: ${props => props.theme.colors.background.primary};
    border: 1px solid ${props => props.theme.colors.border};
    color: ${props => props.theme.colors.text.primary};

    &:focus {
        outline: none;
    }
`

export const EmptyNoteContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    flex-grow: 1;
    margin: 18px;
    border-radius: 4px;
    background-color: ${props => props.theme.colors.background.primary};
    border: 1px solid ${props => props.theme.colors.border};
    color: ${props => props.theme.colors.text.secondary};
`

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 18px;
`