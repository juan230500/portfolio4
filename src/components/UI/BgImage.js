import React from "react";
import styled from "styled-components";

const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
  left: 0;
  top: 0;
`;

const Layer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.7);
`;

const BgImage = (props) => {
  return [<Img src={props.src}></Img>, <Layer></Layer>];
};

export default BgImage;
