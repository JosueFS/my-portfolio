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
            <div>
              <img src="./img/img1.jpg" />
            </div>
            <div>
              <h3>Project #01</h3>
            </div>
          </article>

          <article>
            <div>
              <img src="./img/img2.jpg" />
            </div>
            <div>
              <h3>Project #02</h3>
            </div>
          </article>

          <article>
            <div>
              <img src="./img/img3.jpg" />
            </div>
            <div>
              <h3>Project #03</h3>
            </div>
          </article>

          <article>
            <div>
              <img src="./img/img4.jpg" />
            </div>
            <div>
              <h3>Project #04</h3>
            </div>
          </article>

          <article>
            <div>
              <img src="./img/img5.jpg" />
            </div>
            <div>
              <h3>Project #05</h3>
            </div>
          </article>

          <article>
            <div>
              <img src="./img/img6.jpg" />
            </div>
            <div>
              <h3>Project #06</h3>
            </div>
          </article>

          <article>
            <div>
              <img src="./img/img7.jpg" />
            </div>
            <div>
              <h3>Project #07</h3>
            </div>
          </article>

          <article>
            <div>
              <img src="./img/img8.jpg" />
            </div>
            <div>
              <h3>Project #08</h3>
            </div>
          </article>
        </main>
      </Container>
    </>
  );
};

export default Work;
