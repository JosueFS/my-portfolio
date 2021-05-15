import styled from 'styled-components';

export const Container = styled.section`
  padding: 48px;
  background: ${(props) => props.theme.colors.black};

  main {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;

    div {
      min-width: 49%;
      width: 49%;

      p {
        color: ${(props) => props.theme.colors.white};
      }
    }

    div + div {
      margin-left: 40px;

      img {
        max-width: 100%;
        max-height: 600px;
      }
    }
  }
`;
