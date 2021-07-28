import React from "react";
import styled from "styled-components";
import CV from "../assets/CV.pdf";

import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const Div = styled.div`
  background-color: black;
  color: white;
  padding: 32px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 769px) {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
`;

export const Circle = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  max-width: 64px;
  cursor: pointer;
  background-color: white;
  color: black;
  padding: 12px;
  border-radius: 500px;
  transition: all 0.3s ease;

  svg {
    font-size: 3rem;
  }

  p {
    max-width: 0;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  &:hover {
    gap: 8px;
    max-width: 640px;
  }
  &:hover p {
    max-width: 200px;
  }
`;

const Contact = () => {
  return (
    <Div id="contact">
      <Row>
        <Circle href="https://github.com/juan230500" target="_blank">
          <FaGithub />
          <p>juan230500</p>
        </Circle>
        <Circle href="mailto:juanpo.alvarado@gmail.com" target="_blank">
          <FaEnvelope />
          <p>juanpo.alvarado@gmail.com</p>
        </Circle>
        <Circle
          href="https://www.linkedin.com/in/juan-pablo-alvarado-924849146/"
          target="_blank"
        >
          <FaLinkedin />
          <p>Juan Pablo Alvarado</p>
        </Circle>
        <Circle href={CV} target="_blank">
          <FaFileAlt />
          <p>Curriculum</p>
        </Circle>
      </Row>
    </Div>
  );
};

export default Contact;
