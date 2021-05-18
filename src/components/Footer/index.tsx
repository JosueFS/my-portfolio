import { Container } from './styles';

const Footer = () => {
  return (
    <Container>
      <h5 className="logoText">JosueFS</h5>

      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#work">Works</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <p>Developed in 2021</p>
    </Container>
  );
};

export default Footer;
