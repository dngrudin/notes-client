import styled from "styled-components"

interface NoteListItemProps {
    selected?: boolean
}

export const NoteListContainer = styled.div<{ $scrolled?: boolean }>`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 0;
    padding: 18px;
    flex-grow: 1;
    min-height: 40px;
    overflow: hidden;
    overflow-y: auto;
    background-color: ${props => props.theme.colors.background.primary};
    color: ${props => props.theme.colors.text.primary};
    border-top: 1px solid ${props => props.$scrolled ? props.theme.colors.border : "transparent"};

    &::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.background.primary};
}

    &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.accent.primary};
}

    &::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.accent.hover};
}

    scrollbar-color: ${props => props.theme.colors.accent.primary} 
                        ${props => props.theme.colors.background.primary};
`

export const NoteListItemContainer = styled.button<NoteListItemProps>`
    border-radius: 4px;
    border: none;
    flex-shrink: 0;
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

    ${props => props.selected && `
        background-color: ${props.theme.colors.accent.primary};
        color: ${props.theme.colors.text.inverse};
        font-weight: 600;
    `}
`
