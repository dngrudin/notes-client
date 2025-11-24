import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle(
  ({ theme }) => css`
    html {
      box-sizing: border-box;
      font-size: 14px;
      font-family: 'Manrope', 'Segoe UI', system-ui, sans-serif;
      background-color: ${theme.colors.background.primary};
      color: ${theme.colors.text.primary};
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    html,
    body,
    #root {
        height: 100%;
        margin: 0;
        overflow: hidden;
    }
  `
);
