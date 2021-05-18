import React from 'react';
import { SiGithub, SiNodeDotJs, SiReact, SiTypescript } from 'react-icons/si';

import { Container } from './styles';

const Skills: React.FC = () => {
  return (
    <>
      <Container id="skills">
        <header>
          <h2>Skills</h2>
          <p>I learning about create modern systems and beautiful interfaces</p>
        </header>

        <main>
          <div>
            <SiNodeDotJs size={120} color="#3C823C" />
            <h2>Node.js</h2>
            <p>Back-end</p>
          </div>

          <div>
            <SiReact size={120} color="#61DAFB" />
            <h2>React</h2>
            <p>Front-end</p>
          </div>

          <div>
            <SiReact size={120} color="#292A90" />
            <h2>React Native</h2>
            <p>Mobile Android/iOS</p>
          </div>

          <div>
            <SiTypescript size={120} color="#3374C0" />
            <h2>Typescript</h2>
            <p>Javascript superset</p>
          </div>

          <div>
            <img src="./img/styled-components.png" />
            <h2>Styled Components</h2>
            <p>CSS-in-JS Tool</p>
          </div>

          <div>
            <SiGithub size={120} color="#0D1117" />
            <h2>Github</h2>
            <p>Code hosting for repositories</p>
          </div>
        </main>
      </Container>
    </>
  );
};

export default Skills;
