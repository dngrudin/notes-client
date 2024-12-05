import styled from "styled-components"

interface NoteListItemProps {
    isSelected?: boolean
}

export const NoteContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ebecf0;
    width: 100%;
    height: 100%;
    min-height: 40px;
    border-radius: 3px;
    padding: 8px 8px;
`

export const NoteListContainer = styled.div`
    background-color: #ebecf0;
    width: 300px;
    height: 100%;
    min-height: 40px;
    border: solid #606060;
    border-radius: 3px;
    padding: 8px 8px;
    flex-grow: 0;
    overflow: hidden;
    overflow-y: auto;
`

export const NoteTitle = styled.div`
    padding: 2em;
    font-weight: bold;
    background-color: #3179ff;
    color: #ffffff;
    margin-bottom: 0.2rem;
    border-radius: 3px;
    text-align: center;
`

export const NoteText = styled.textarea`
    readonly: none;
    resize: none;
    background-color: #ebecf0;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    padding: 8px 8px;
    margin-bottom: 0.2rem;
    &:focus {
        outline: none;
    }
`

export const EmptyNoteContainer = styled.div`
    background-color: #ebecf0;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    color: #a5b2b6;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
`

export const NoteListItemContainer = styled.button<NoteListItemProps>`
    background-color: ${props => (props.isSelected ? "#808080" : "#fff")} ;
    border-radius: 3px;
    border: none;
    color: ${props => (props.isSelected ? "#ffffff" : "#606060")} ;
    cursor: pointer;
    max-width: 300px;
    padding: 0.5rem 1rem;
    margin-bottom: 0.2rem;
    text-align: left;
    font-weight: bold;
    transition: background 85ms ease-in;
    width: 100%;
    box-shadow: #091e4240 0px 1px 0px 0px;
    &:hover {
        background-color: #3179ff;
        color: #ffffff;
    }
`

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`