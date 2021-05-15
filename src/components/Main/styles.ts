import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  display: flex;

  div.imgSidebar {
    width: 500px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media handheld and (max-width: 768px),
      screen and (max-device-width: 768px),
      screen and (max-width: 768px) {
      display: none;
    }
  }

  div.contentBx {
    width: calc(100% - 500px);
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: space;
    padding: 48px 32px;

    @media handheld and (max-width: 768px),
      screen and (max-device-width: 768px),
      screen and (max-width: 768px) {
      width: 100%;
    }

    .logoText {
      width: fit-content;
      font-size: clamp(1.1rem, 1.1rem + 1vw, 1.6rem);
      text-transform: uppercase;
      letter-spacing: 1px;
      background: ${(props) => props.theme.colors.text};
      color: ${(props) => props.theme.colors.white};
      padding: 0 8px;
      margin-bottom: 64px;
    }

    div {
      margin-bottom: 64px;

      h4 {
        font-size: clamp(1.6rem, 1.6rem + 1vw, 2rem);
        color: ${(props) => props.theme.colors.text};
        font-weight: 300;

        span {
          color: ${(props) => props.theme.colors.primary};
          font-size: clamp(1.6rem, 1.6rem + 1vw, 2rem);
          font-weight: 700;
        }
      }

      h2 {
        font-size: clamp(3rem, 3rem + 1vw, 4rem);
        color: ${(props) => props.theme.colors.text};
        line-height: 1em;
      }

      p {
        font-size: clamp(1.1rem, 1.1rem + 1vw, 1.6rem);
        margin: 20px 0;
        font-weight: 300;
      }
    }

    ul {
      align-self: flex-start;
    }
  }
`;

export const ButtonMenu = styled.div`
  position: fixed;
  top: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 4px;

  background: ${(props) => props.theme.colors.black} url('./img/menu.png')
    no-repeat center;
  background-size: 32px;
  cursor: pointer;
  z-index: 1000;

  &.active {
    background: ${(props) => props.theme.colors.black} url('./img/close.png')
      no-repeat center;
    background-size: 24px;
  }
`;

export const ButtonAboutMe = styled.a`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white} !important;
  padding: 10px 30px;
  display: inline-block;
  font-size: clamp(1rem, 1rem + 1vw, 2rem);
  font-weight: 500;
  letter-spacing: 2px;
  border-radius: 4px;

  box-shadow: 0 0 16px ${(props) => props.theme.colors.primary};
`;

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: -100%;
  width: calc(100% - 500px);
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
  background: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  padding: 40px;
  z-index: 100;

  @media handheld and (max-width: 768px),
    screen and (max-device-width: 768px),
    screen and (max-width: 768px) {
    width: 100%;
  }

  &.active {
    right: 0;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    li {
      list-style: none;
      margin-bottom: 8px;

      a {
        color: ${(props) => props.theme.colors.white};

        font-size: clamp(2rem, 2rem + 1vw, 3.2rem);
        margin: 10px 0;
        font-weight: 300;
        letter-spacing: 2px;
        text-transform: uppercase;
        transition: all 0.3s ease;

        &:hover {
          color: ${(props) => props.theme.colors.primary};
          letter-spacing: 6px;
        }
      }
    }
  }
`;
