import styled from "styled-components"

interface NoteListItemProps {
    active?: boolean
}

export const NoteListContainer = styled.div`
    width: 300px;
    height: 100%;
    padding: 18px;
    flex-grow: 1;
    min-height: 40px;
    overflow: hidden;
    overflow-y: auto;
    background-color: ${props => props.theme.colors.background.primary};
    color: ${props => props.theme.colors.text.primary};
    border-top: 1px solid ${props => props.theme.colors.border};
`

export const NoteListItemContainer = styled.button<NoteListItemProps>`
    width: 100%;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    padding: 9px 16px;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    background-color: ${props => props.theme.colors.background.primary};
    color: ${props => props.theme.colors.text.primary};

    &:hover {
        background-color: ${props => props.theme.colors.accent.hover};
        color: ${props => props.theme.colors.text.inverse};
    }

    ${props => props.active && `
        background-color: ${props.theme.colors.accent.primary};
        color: ${props.theme.colors.text.inverse};
        font-weight: 600;
    `}
`
