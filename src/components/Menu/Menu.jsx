import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <SMenu>
      <MenuButton>Records</MenuButton>
      <SubRoutesContainer>
      <SubRoute to= "/events/Aarambh" 
          key="Arambh">
            NeW records
          </SubRoute>
          <SubRoute to= "/events/plexus" 
          key="plexus">
            Simplified records
          </SubRoute>
      </SubRoutesContainer>
    </SMenu>
  );
};

export default Menu;
const SubRoutesContainer = styled.div`
  background-color:black;
  position: absolute;
  min-width: 10rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  left: -1rem;
  visibility: hidden;
  opacity: 0;
  z-index: 1000;
  border-radius: 1rem;
  transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;
const SMenu = styled.div`
  position: relative;
  display: inline-block;
  z-index: 80;
  &:hover ${SubRoutesContainer} {
    visibility: visible;
    opacity: 1;
    cursor: pointer;
  }
`;

const MenuButton = styled.div`
  padding: 0.5rem;
  &:hover {
    transition: 0.3s ease-in;
    color: black;
    background-color: #68fe04;
  }
`;

const SubRoute = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: 0.3s ease-in;
  
  &:hover {
    transition: 0.3s ease-in;
    color: black;
    background-color: #68fe04;
  }
`;