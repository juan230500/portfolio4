import React, { useEffect, useState } from "react";
import { FaAngleUp, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { Layer } from "../UI/Layer";
import SkillItem from "./SkillItem";

const Div = styled.div`
  flex: 50%;
  height: 360px;
  color: white;
  position: relative;

  background-image: url(${(p) => p.img});
  background-size: cover;
  overflow: hidden;

  @media (max-width: 769px) {
    flex: 100%;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Detail = styled.div`
  position: absolute;
  top: ${(p) => (p.active ? 0 : "100%")};
  width: 100%;
  height: 100%;
  background-color: #1c448e;
  padding: 8px;
  transition: all 0.5s ease;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px 0;
  flex-wrap: wrap;
`;

const DetailOpen = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 240px 240px 0 0;
  top: -32px;
  width: 64px;
  height: 32px;
  background-color: #1c448e;
  cursor: pointer;
  font-size: 2rem;
  text-align: center;
`;

const DetailClose = styled(DetailOpen)`
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  transform: rotate(180deg);
  color: white;
  margin: 0;
`;

const Skill = (props) => {
  const [active, setActive] = useState(false);
  const [img, setImg] = useState(null);

  useEffect(() => {
    import(`../../assets/${props.img}`).then((img) => setImg(img.default));
  }, [props.img]);

  return (
    <Div img={img}>
      <Layer />
      <Container>
        <h1>{"<" + props.title + "/>"}</h1>
      </Container>
      <Detail active={active}>
        <DetailOpen onClick={() => setActive(true)}>
          <FaAngleUp />
        </DetailOpen>
        <DetailClose onClick={() => setActive(false)}>
          <FaTimes />
        </DetailClose>
        {props.skills
          ?.sort((a, b) => -a.level + b.level)
          .map((el) => (
            <SkillItem {...el}></SkillItem>
          ))}
      </Detail>
    </Div>
  );
};

export default Skill;
