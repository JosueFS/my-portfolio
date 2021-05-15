import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa';

const SocialLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    width: 48px;
    height: 48px;
    list-style: none;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;

      svg {
        color: ${(props) => props.theme.colors.text};
        transition: all 0.1s;

        &.bgDark {
          color: ${(props) => props.theme.colors.background};
        }
      }
    }

    //Github icon
    &:hover:nth-child(1) {
      a svg {
        &.bgDark {
          color: ${(props) => props.theme.colors.white};
        }
        color: ${(props) => props.theme.colors.github};
        width: 40px;
        height: 40px;
      }
    }

    //LinkedIn icon
    &:hover:nth-child(2) {
      a svg {
        color: ${(props) => props.theme.colors.linkedIn};
        width: 40px;
        height: 40px;
      }
    }

    //Gmail icon
    &:hover:nth-child(3) {
      a svg {
        color: ${(props) => props.theme.colors.gmail};
        width: 40px;
        height: 40px;
      }
    }
  }
`;

interface IProps {
  customClass?: string;
}

const SocialNetwork: React.FC<IProps> = ({ customClass = '' }) => {
  return (
    <SocialLinks>
      <li>
        <a href="https://github.com/JosueFS">
          <FaGithub size={32} className={customClass} />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/jfds">
          <FaLinkedin size={32} className={customClass} />
        </a>
      </li>
      <li>
        <a href="mailto:josue.18rj@gmail.com">
          <FaRegEnvelope size={32} className={customClass} />
        </a>
      </li>
    </SocialLinks>
  );
};

export default SocialNetwork;
