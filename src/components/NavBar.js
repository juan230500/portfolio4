import React from "react";
import styled from "styled-components";

const Div = styled.div`
  padding: 0 16px;
  position: fixed;
  z-index: 1000;
  height: 72px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);

  display: flex;
  justify-content: end;
  align-items: center;
  gap: 48px;

  @media (max-width: 769px) {
    justify-content: space-around;
    gap: 0;
  }
`;

const NavLink = styled.a`
  padding: 8px;
  cursor: pointer;
  text-decoration: none;

  border: 1px solid transparent;
  border-radius: 17px;
  background-color: ${({ accent }) => (accent ? "white" : "transparent")};
  color: ${({ accent }) => (accent ? "black" : "white")};

  &:hover {
    border: 1px solid white;
    transform: scale(1.1);
    transition: all 0.2s ease;
  }
`;

const NavBar = () => {
  return (
    <Div>
      <NavLink href="#projects">Projects</NavLink>
      <NavLink href="#skills">Skills</NavLink>
      <NavLink href="#certifications">Certifications</NavLink>
      <NavLink href="#contact" accent>
        Contact
      </NavLink>
    </Div>
  );
};

export default NavBar;
