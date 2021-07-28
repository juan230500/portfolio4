import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  h2 {
    font-size: 1rem;
  }
  h3 {
    font-size: 0.75rem;
  }

  * {
    width: 110px;
  }

  @media (max-width: 769px) {
    align-items: unset;
    flex-direction: column;
    gap: 8px;

    h2 {
      font-size: 0.75rem;
    }
    h3 {
      font-size: 0.5rem;
    }
  }
`;

const Bar = styled.div`
  display: flex;
  gap: 8px;
`;

const Block = styled.div`
  height: 12px;
  width: 24px;
  border: 1px solid white;
  background-color: ${(p) => (p.active ? "white" : "unset")};
`;

const SkillItem = (props) => {
  let qual = "Basic";
  switch (props.level) {
    case 1:
      qual = "Basic";
      break;
    case 2:
      qual = "Intermediate";
      break;
    case 3:
      qual = "Advanced";
      break;

    default:
      break;
  }
  return (
    <Div>
      <h2 onClick={(e) => e.stopPropagation()}>{props.title}</h2>
      <div>
        <Bar>
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <Block active={props.level > i}></Block>
            ))}
        </Bar>
        <h3>{qual}</h3>
      </div>
    </Div>
  );
};

export default SkillItem;
