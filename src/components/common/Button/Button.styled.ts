import styled, { css } from "styled-components"

type ButtonVariant = 'primary' | 'secondary'

export interface ButtonProps {
    $variant: ButtonVariant;
}

const Button = styled.button<ButtonProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
    text-align: center;
    white-space: nowrap;
    font-weight: 500;

    color: ${props => props.theme.colors.text.primary};

    ${props => {
        switch (props.$variant) {
            case 'primary':
                return css`
                    background-color: ${props.theme.colors.accent.primary};

                    &:hover:enabled {
                        background-color: ${props.theme.colors.accent.hover};
                    }

                    &:active:enabled {
                        background-color: ${props.theme.colors.accent.active};
                    }
                `;

            case 'secondary':
                return css`
                    background-color: ${props.theme.colors.background.tertiary};

                    &:hover:enabled {
                        background-color: ${props.theme.colors.background.hover};
                    }

                    &:active:enabled {
                        background-color: ${props.theme.colors.background.active};
                    }
                `;
        }
    }}

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        background-color: ${props => props.theme.colors.state.disabled};
    }
`

export default Button;