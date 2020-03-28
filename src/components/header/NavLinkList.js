import styled from "styled-components"
import React from "react"
import * as colors from "../../utils/colors"
import { breakpoint } from "../../utils/breakpoints"

const NavLinkList = ({ isMenuExpanded, children }) => {
  return (
    <NavLinkListWrapper isMenuExpanded={isMenuExpanded}>
      {children}
    </NavLinkListWrapper>
  )
}

const NavLinkListWrapper = styled.ul`
  background-color: ${colors.brandWhite};
  display: flex;
  flex-direction: column;
  height: 91vh;
  position: fixed;
  z-index: 200;
  bottom: 0;
  right: 0;
  overflow: auto;
  transition: 0.5s;
  padding-left: 0;
  margin-bottom: 0;
  width: 85vw;
  align-items: center;
  justify-content: center;
  border: 3px solid ${colors.brandSecondary};
  
  transform: ${props =>
    props.isMenuExpanded ? "translateX(0)" : "translateX(100%)"};

  ${breakpoint.xs`
        width: 60vw;
  `}
  ${breakpoint.md`
    border: 0;
    display: flex;
    transform: translateX(0);
    background-color: ${colors.brandPrimary};
    flex-direction: row;
    position: relative;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    overflow: visible;
    transition: none;
    width: initial;
  `}
`

export default NavLinkList
