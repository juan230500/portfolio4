import React, { useState } from "react";
import styled from "styled-components";
import table from "../../assets/table.jpg";
import { Layer } from "../UI/Layer";
import projectsJson from "../../assets/projects.json";

const Div = styled.div`
  height: 720px;
  width: 100%;
  position: relative;
  overflow: hidden;

  background-image: url(${table});
  background-size: cover;

  button {
    position: relative;
    z-index: 1000;
  }
`;

const Container = styled.div`
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
`;

const Block = styled.div`
  display: flex;
  height: 320px;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
  width: 33.333%;
  border: 1px solid blue;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  transition: all 0.3s ease;
  top: ${({ top }) => (top || 0) + "px"};
  left: ${({ left }) => left || 0};
  transform: rotate(${({ angle }) => (angle || 0) + "deg"});
  color: white;
  cursor: pointer;

  &:hover {
    background-color: black;
    z-index: 100;
    transform: rotate(0);
  }

  @media (max-width: 769px) {
    h1 {
      font-size: 1.25rem;
    }
    p {
      font-size: 0.75rem;
      overflow: hidden;
    }
    a {
      font-size: 0.75rem;
    }
  }
`;

const Projects = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Div id="projects">
      <Layer />
      <Container>
        {projectsJson.map((el, i) => (
          <Block
            onClick={() => setExpanded(!expanded)}
            top={expanded ? (320 / 3) * (i - (i % 3)) : 20 * i}
            left={expanded ? (i % 3) * 33.333 + "%" : 20 * i + "px"}
            angle={expanded ? Math.random() * 45 - 22.5 : 0}
          >
            <h1>{el.title}</h1>
            <p>{el.description}</p>
            <a
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noreferrer"
              href={el.link}
            >
              more info
            </a>
          </Block>
        ))}
      </Container>
    </Div>
  );
};

export default Projects;
