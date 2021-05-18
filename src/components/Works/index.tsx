import React from 'react';

import { Container } from './styles';

const Work: React.FC = () => {
  return (
    <>
      <Container id="work">
        <header>
          <h2>Recent Work</h2>
          <p>
            As I have not yet worked in a formal job, all of my projects are for
            study, I hope you like it!
          </p>
        </header>

        <main>
          <article>
            <a
              href="https://github.com/JosueFS/gobarber-web"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./img/gobarber.png" />
              <h3>GoBarber #01</h3>
            </a>
          </article>

          <article>
            <a
              href="https://github.com/JosueFS/Ecoleta-NLW"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./img/ecoleta.png" />
              <h3>Ecoleta #02</h3>
            </a>
          </article>

          <article>
            <a
              href="https://github.com/JosueFS/Be-The-Hero"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./img/bethehero.png" />
              <h3>Be The Hero #03</h3>
            </a>
          </article>

          <article>
            <a
              href="https://github.com/JosueFS/GamingWebsite"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./img/project1.png" />
              <h3>Playstation 5 UI Concept #04</h3>
            </a>
          </article>

          <article>
            <a
              href="https://github.com/JosueFS/labluby-react"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./img/github-profiles.png" />
              <h3>Github Profiles #05</h3>
            </a>
          </article>

          <article>
            <a
              href="https://github.com/JosueFS"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./img/my-profile.png" />
              <h3>More Projects</h3>
            </a>
          </article>
        </main>
      </Container>
    </>
  );
};

export default Work;
