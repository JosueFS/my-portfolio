import styled from 'styled-components';

export const Container = styled.section`
  padding: 16px;
  background: ${(props) => props.theme.colors.white};

  main {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
    justify-items: center;
    margin-top: 16px;
    transition: 0.5s;

    article {
      position: relative;
      width: 265px;
      height: 265px;
      transition: 0.5s;
      text-align: center;

      &:hover {
        div {
          box-shadow: 4px 8px 8px 0 rgb(0 0 0 / 20%);
        }
      }

      div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.5s;
        border-radius: 8px;

        & + div {
          background: ${(props) => props.theme.colors.black};
          opacity: 0;
          transition: 0.7s;

          &:hover {
            opacity: 0.6;

            h3 {
              letter-spacing: 3px;
            }
          }
        }

        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
        }

        h3 {
          color: ${(props) => props.theme.colors.white};
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: clamp(1.6rem, 1.6rem + 1vw, 2rem);
          transition: 0.5s;
        }
      }
    }
  }
`;
