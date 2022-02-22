import React, { useState } from "react";
import styled from "styled-components";
import projects from "../../assets/projects2.json";
import BgImage from "../UI/BgImage";
import bgImg from "../../assets/table.jpg";

const Div = styled.div`
  position: relative;
  padding: 16px;
  min-height: 800px;

  color: white;
`;

const Block = styled.div``;

const ProjectBlock = styled.div`
  width: 420px;
  padding: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  cursor: pointer;

  img {
    height: 240px;
    width: 100%;
    object-fit: contain;
    border: 1px solid white;
    padding: 8px;
  }

  h2 {
    font-size: 14px;
  }

  p {
    font-size: 10px;
  }
`;

const TagSelect = styled.div`
  border: 1px solid white;
  border-radius: 8px;

  display: inline-flex;
  margin: 8px 2px;
  padding: 4px;
  cursor: pointer;

  &.active {
    background-color: #1c448e;
    color: white;
  }
`;

const Projects2 = () => {
  const [selected, setSelected] = useState([]);

  const onSelect = (tag) => {
    let newSelected = [...selected];
    if (newSelected.includes(tag))
      newSelected.splice(newSelected.indexOf(tag), 1);
    else newSelected.push(tag);
    setSelected(newSelected);
  };

  const getAllTags = () => {
    const result = [];
    for (let el of projects) {
      for (let tag of el.tags) {
        const prev = result.find((el) => el.tag === tag);
        if (prev) prev.count += 1;
        else result.push({ tag, count: 1 });
      }
    }
    result.sort((a, b) => -a.count + b.count);
    return result;
  };

  const truncate = (s, l = 420) => {
    return s.length > l ? s.substring(0, l - 3) + "..." : s;
  };

  let tags = getAllTags();

  const filteredProjects = projects.filter(
    (el) => selected.length === 0 || el.tags.some((t) => selected.includes(t))
  );

  console.log(
    require("../../assets/project_images/" + projects[0].image).default
  );
  console.log(bgImg);

  return (
    <Div id="projects">
      <BgImage src={bgImg}></BgImage>
      <Block>
        <h1>Projects</h1>
        <div>
          {tags.map((el) => (
            <TagSelect
              className={selected.includes(el.tag) && "active"}
              onClick={() => onSelect(el.tag)}
            >
              {el.tag}({el.count})
            </TagSelect>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          {filteredProjects.map((el) => (
            <ProjectBlock onClick={() => window.open(el.link, "_blank")}>
              {el.image && (
                <img
                  alt={el.title}
                  src={
                    require("../../assets/project_images/" + el.image).default
                  }
                ></img>
              )}
              <h2>{el.title}</h2>
              <p>{truncate(el.description)}</p>
              {el.link && (
                <a rel="noreferrer" target="_blank" href={el.link}>
                  See more...
                </a>
              )}
            </ProjectBlock>
          ))}
        </div>
      </Block>
    </Div>
  );
};

export default Projects2;
