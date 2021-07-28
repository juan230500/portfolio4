import React from "react";
import styled from "styled-components";
import Skill from "./Skill";

import skillsJson from "../../assets/skills.json";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Skills = () => {
  return (
    <Div id="skills">
      {skillsJson.map((el) => (
        <Skill {...el} />
      ))}
    </Div>
  );
};

export default Skills;
