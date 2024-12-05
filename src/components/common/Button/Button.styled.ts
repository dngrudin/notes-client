import styled from "styled-components"

type ButtonType = 'do' | 'cancel'

export interface ButtonProps {
    buttonType: ButtonType;
}

const getColor = (type: ButtonType) : string => {
    switch (type) {
        case "do":     return "#5aac44";
        case "cancel": return "#ff3333";
    }
}

const Button = styled.button<ButtonProps>`
    background-color: ${props => getColor(props.buttonType)};
    border-radius: 3px;
    border: none;
    box-shadow: none;
    color: #fff;
    padding: 6px 12px;
    margin: 2px;
    text-align: center;
    &:hover {
        opacity: 0.8;
    }
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        background: #808080;
    }
`

export default Button;