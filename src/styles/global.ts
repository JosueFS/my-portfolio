import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  a {
    text-decoration: none;

    &:visited {
      color: inherit;
    }
  }

  section {
    position: relative;
    min-height: 100vh;
    width: 100%;

    > p {
      font-size: clamp(1rem, 1rem + 1vw, 1.6rem);
    }

    header {
    width: 100%;
    text-align: center;

      &.bgDark {
        h2, p {
          color: ${(props) => props.theme.colors.white};
        }

        h2::before {
          background: ${(props) => props.theme.colors.primary};
        }
      }

      h2 {
        position: relative;
        color: ${(props) => props.theme.colors.primary};
        font-size: clamp(1.6rem, 1.6rem + 1vw, 4rem);
        font-size: 700;
        letter-spacing: 1px;
      }

      >   p {
        color: ${(props) => props.theme.colors.text};
        max-width: 700px;
        display: inline-block;
        margin-top: 16px;
        font-size: clamp(1.1rem, 1.1rem + 1vw, 1rem);

      }

      h2::before {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -10px;
        width: 60px;
        height: 4px;
        background: ${(props) => props.theme.colors.black};
      }
    }
  }
`;

export default GlobalStyles;
