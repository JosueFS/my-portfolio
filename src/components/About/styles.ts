import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 48px;
  background: ${(props) => props.theme.colors.black};

  main {
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;

    div {
      p {
        text-align: center;
        font-size: clamp(1.1rem, 1.1rem + 1vw, 1.6rem);
        color: ${(props) => props.theme.colors.white};
        margin-bottom: clamp(1.6rem, 1.6rem + 1vw, 2.4rem);
      }
    }

    div + div {
      height: auto;
      overflow: hidden;

      img {
        max-width: 100%;
      }
    }

    @media handheld and (min-width: 769px),
      screen and (min-device-width: 769px),
      screen and (min-width: 769px) {
      grid-template-columns: repeat(3, minmax(250px, 350px));
    }
  }
`;
