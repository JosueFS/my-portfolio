import React from 'react';

import { Container } from './styles';

const About: React.FC = () => {
  return (
    <>
      <Container id="about">
        <header className="bgDark">
          <h2>About Me</h2>
          <p>The goal is to be 1% better every day</p>
        </header>

        <main>
          <div>
            <p>
              I currently work at Andina Coca-Cola Brasil as an administrative
              assistant, and every day when I get home I reserve a few hours to
              study and put some projects into practice.
              <br />
              <br />
              The main project I am working on is a network of suppliers and
              customers to sell their products, it is still in the conceptual
              phase, thinking about the best way to connect both.
            </p>
          </div>

          <div>
            <img src="./img/bg2.jpg" />
          </div>
        </main>
      </Container>
    </>
  );
};

export default About;
