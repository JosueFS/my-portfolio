import styled from 'styled-components';

export const Container = styled.section`
  padding: 24px;

  background: ${(props) => props.theme.colors.white};

  main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 32px;
    justify-content: center;

    margin-top: 32px;

    div {
      min-width: 250px;
      padding: 16px;
      transition: 0.5s;
      text-align: center;
      border: 2px solid transparent;
      border-radius: 16px;
      background: ${(props) => props.theme.colors.white};

      h2 {
        margin-top: 16px;
        margin-bottom: 8px;
        font-size: clamp(2rem, 2rem + 1vw, 2rem);
        font-weight: 600;
      }

      img {
        width: 120px;
      }

      &:hover {
        &:nth-child(1) {
          border-color: #3c823c;
        }

        &:nth-child(2) {
          border-color: #61dafb;
        }

        &:nth-child(3) {
          border-color: #292a90;
        }

        &:nth-child(4) {
          border-color: #3374c0;
        }

        &:nth-child(5) {
          border-color: #da7bb6;
        }

        &:nth-child(6) {
          border-color: ${(props) => props.theme.colors.github};
        }
      }
    }

    @media handheld and (min-width: 769px),
      screen and (min-device-width: 769px),
      screen and (min-width: 769px) {
      grid-template-columns: repeat(3, minmax(250px, 350px));
    }
  }
`;
