import styled from 'styled-components';

export const Container = styled.section`
  padding: 48px;

  background: ${(props) => props.theme.colors.white};

  main {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    div {
      padding: 24px;
      max-width: 340px;
      margin: 16px;
      transition: 0.5s;
      text-align: center;
      background: ${(props) => props.theme.colors.white};

      &:hover {
        filter: invert(1);
      }

      p {
        color: ${(props) => props.theme.colors.text};
      }
    }

    img {
      max-width: 80px;
    }

    h2 {
      margin-top: 16px;
      margin-bottom: 8px;
      font-size: clamp(2rem, 2rem + 1vw, 2rem);
      font-weight: 600;
    }

    p {
      margin: 0;
    }
  }
`;
