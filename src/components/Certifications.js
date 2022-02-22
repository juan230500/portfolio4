import React from "react";
import styled from "styled-components";
import pythonImg from "../assets/certifications/python.png";
import pandasnImg from "../assets/certifications/pandas.png";
import mlImg from "../assets/certifications/intro to Machine Learning.png";
import ml2Img from "../assets/certifications/intermediate Machine Learning.png";

const DATA = [
  {
    title: "Scientific Computing with Python",
    link: "https://www.freecodecamp.org/certification/fcce7e82828-272b-4fbd-ac05-adc68cb2723a/scientific-computing-with-python-v7",
  },
  {
    title: "Data Analysis with Python",
    link: "https://www.freecodecamp.org/certification/fcce7e82828-272b-4fbd-ac05-adc68cb2723a/data-analysis-with-python-v7",
  },
  {
    title: "Python",
    link: pythonImg,
  },
  {
    title: "Pandas",
    link: pandasnImg,
  },
  {
    title: "Intro to Machine Learning",
    link: mlImg,
  },
  {
    title: "Intermediate Machine Learning",
    link: ml2Img,
  },
];

const Div = styled.div`
  background-color: black;
  color: white;
  padding: 24px 8px;
  min-height: 440px;

  li {
    font-size: 20px;
    margin-left: 24px;
  }
`;

const Certifications = () => {
  return (
    <Div id="certifications">
      <h1>Certifications</h1>
      <ul>
        {DATA.map((el) => (
          <li>
            {el.title} (
            <a rel="noreferrer" target="_blank" href={el.link}>
              view
            </a>
            )
          </li>
        ))}
      </ul>
    </Div>
  );
};

export default Certifications;
