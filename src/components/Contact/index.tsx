import React from 'react';

import { Container } from './styles';
import SocialNetwork from 'components/SocialNetwork';
import Footer from 'components/Footer';
import { FaWhatsapp } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <>
      <Container id="contact">
        <header className="bgDark">
          <h2>Let's get to know each other!</h2>
          <p>
            If you have any questions, a job offer, feedback or just want to say
            hello and be my friend, don't hesitate to talk to me:
          </p>
        </header>

        <main>
          <p>Belford Roxo, Rio de Janeiro - Brazil</p>
          <p>Improve people's lives:</p>
          <a href="https://api.whatsapp.com/send?phone=5521966809161">
            <span>
              <span>Let's talk</span>
              <FaWhatsapp size={32} />
            </span>
            <span>+55 (21) 96680-9161</span>
          </a>

          <SocialNetwork customClass="bgDark" />
          <Footer />
        </main>
      </Container>
    </>
  );
};

export default Contact;
