import styled from 'styled-components';

export const Container = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 4px 16px 16px;

  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.white};

  font-size: clamp(1rem, 1rem + 1vw, 1.6rem);
  line-height: initial;

  h5,
  p {
    width: fit-content;
    color: ${(props) => props.theme.colors.text};
  }

  h5 {
    text-transform: uppercase;
    letter-spacing: 1px;
    background: ${(props) => props.theme.colors.text};
    color: ${(props) => props.theme.colors.white};
    padding: 0 8px;
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    li {
      margin: 0 8px;
    }

    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 8px;
      background: linear-gradient(
        to right,
        ${(props) => props.theme.colors.github} 25%,
        ${(props) => props.theme.colors.primary} 25%,
        ${(props) => props.theme.colors.primary} 50%,
        ${(props) => props.theme.colors.linkedIn} 50%,
        ${(props) => props.theme.colors.linkedIn} 75%,
        ${(props) => props.theme.colors.gmail} 75%
      );
    }
  }

  @media handheld and (max-width: 520px),
    screen and (max-device-width: 520px),
    screen and (max-width: 520px) {
    padding: 4px 0 8px;
    display: block;

    h5,
    ul,
    p {
      margin: 0 auto;
      width: fit-content;
    }
  }
`;
