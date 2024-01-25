import React, { useEffect, useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import styled from "styled-components";
import headerImg from "../assets/header.jpg";
import { Circle } from "./Contact";
import BgImage from "./UI/BgImage";
import CV from "../assets/CV.pdf";

const Div = styled.div`
  height: 520px;
  padding: 0 32px;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 32px;
  overflow: hidden;

  h1 {
    text-align: right;
    font-size: 4rem;
    z-index: 100;
    position: relative;
    color: white;
    white-space: pre-line;
  }

  @media (max-width: 769px) {
    h1 {
      font-size: 3rem;
    }
  }
`;

const Header = (props) => {
  const [i, setI] = useState(0);
  const text1 = "Juan Pablo Alvarado\nCloud Engineer";

  useEffect(() => {
    setTimeout(
      () => setI((i) => i + 1),
      i > text1.length ? 500 : Math.random() * 200
    );
  }, [i]);

  return (
    <Div>
      <BgImage src={headerImg}></BgImage>
      <h1>
        {text1.slice(0, i)}
        <span style={{ opacity: i % 2 ? 0 : 1 }}>_</span>
      </h1>
      <Circle href={CV} target="_blank">
        <FaFileAlt />
        <p>Curriculum</p>
      </Circle>
    </Div>
  );
};

export default Header;
