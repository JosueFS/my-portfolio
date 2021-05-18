import styled from 'styled-components';

export const Container = styled.section`
  padding: 16px;
  background: ${(props) => props.theme.colors.background};

  main {
    display: grid;
    grid-gap: 32px;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    justify-content: center;
    transition: 0.5s;

    margin-top: 32px;

    article {
      position: relative;
      max-width: 500px;
      min-height: 220px;
      max-height: 280px;
      transition: 0.5s;
      text-align: center;
      border-radius: 8px;

      background: #000000;
      background: -moz-linear-gradient(top, #555 0%, #999 100%);
      background: -webkit-linear-gradient(top, #555 0%, #999 100%);
      background: linear-gradient(to top, #555 0%, #999 100%);

      &:hover {
        a {
          box-shadow: 4px 8px 8px 0 rgb(0 0 0 / 20%);
        }
      }

      a {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.5s;
        border-radius: 8px;

        &:hover {
          h3 {
            letter-spacing: 3px;
            opacity: 1;
          }

          img {
            filter: brightness(0.4);
          }
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 8px;
          transition: 0.5s;
        }

        h3 {
          position: absolute;
          text-align: center;
          opacity: 0;
          color: ${(props) => props.theme.colors.white};
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: clamp(1.6rem, 1.6rem + 1vw, 2rem);
          transition: 0.5s;
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
