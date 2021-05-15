import React from 'react';

import { Container } from './styles';

const Services: React.FC = () => {
  return (
    <>
      <Container id="services">
        <header>
          <h2>What I Do</h2>
          <p>Modern design creation</p>
        </header>

        <main>
          <div>
            <img src="./img/icon1.png" />
            <h2>Web Design</h2>
            <p>
              Nulla reprehenderit consequuntur deserunt autem ducimus
              repellendus mollitia illum in error vitae, iusto ullam vero.
            </p>
          </div>

          <div>
            <img src="./img/icon2.png" />
            <h2>Web Development</h2>
            <p>
              Nulla reprehenderit consequuntur deserunt autem ducimus
              repellendus mollitia illum in error vitae, iusto ullam vero.
            </p>
          </div>

          <div>
            <img src="./img/icon3.png" />
            <h2>Android Apps</h2>
            <p>
              Nulla reprehenderit consequuntur deserunt autem ducimus
              repellendus mollitia illum in error vitae, iusto ullam vero.
            </p>
          </div>

          <div>
            <img src="./img/icon4.png" />
            <h2>Photography</h2>
            <p>
              Nulla reprehenderit consequuntur deserunt autem ducimus
              repellendus mollitia illum in error vitae, iusto ullam vero.
            </p>
          </div>

          <div>
            <img src="./img/icon5.png" />
            <h2>Content Writing</h2>
            <p>
              Nulla reprehenderit consequuntur deserunt autem ducimus
              repellendus mollitia illum in error vitae, iusto ullam vero.
            </p>
          </div>

          <div>
            <img src="./img/icon6.png" />
            <h2>Video Editor</h2>
            <p>
              Nulla reprehenderit consequuntur deserunt autem ducimus
              repellendus mollitia illum in error vitae, iusto ullam vero.
            </p>
          </div>
        </main>
      </Container>
    </>
  );
};

export default Services;
