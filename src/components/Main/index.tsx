/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useRef } from 'react';

import { Container, ButtonMenu, ButtonAboutMe, Sidebar } from './styles';
import SocialNetwork from '../SocialNetwork';

const Main: React.FC = () => {
  const menuRef = useRef<HTMLDivElement>();
  const sidebarRef = useRef<HTMLDivElement>();

  const toggleMenu = useCallback(() => {
    menuRef.current.classList.toggle('active');
    sidebarRef.current.classList.toggle('active');
  }, []);

  return (
    <>
      <ButtonMenu ref={menuRef} className="toggle" onClick={toggleMenu} />

      <Container className="banner" id="home">
        <div className="imgSidebar">
          <img
            src="./img/bg4.jpg"
            alt="Credits: https://unsplash.com/@nubelsondev"
          />
        </div>

        <div className="contentBx">
          <h5 className="logoText">JosueFS</h5>
          <div>
            <h4>
              <span>Hello</span>, I'm
            </h4>
            <h2>Josué Ferreira</h2>
            <h4>I'm Front End Web Developer</h4>
            <p>
              Passionate about solving problems and facilitating interaction. I
              am currently graduated in Systems Analysis and Development by the
              University Estácio de Sá (UNESA). I am looking for a career that
              allows me to contribute with my best ideas, improve the lives of
              people and businesses.
            </p>
            <ButtonAboutMe
              href="https://api.whatsapp.com/send?phone=5521966809161"
              className="btn"
            >
              Let's talk
            </ButtonAboutMe>
          </div>

          <SocialNetwork />
        </div>
      </Container>

      <Sidebar ref={sidebarRef}>
        <ul>
          <li>
            <a href="#home" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={toggleMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#work" onClick={toggleMenu}>
              Works
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </Sidebar>
    </>
  );
};

export default Main;
