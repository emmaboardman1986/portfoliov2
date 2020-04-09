import styled from "styled-components"
import React from "react"
import * as colors from "../../utils/colors"
import { breakpoint } from "../../utils/breakpoints"
import { setFlex } from "../../utils/alignmentHelpers"

const NavLinkListItem = ({ children, isMenuExpanded }) => {
  return (
    <NavLinkListItemWrapper isMenuExpanded={isMenuExpanded}>
      {children}
    </NavLinkListItemWrapper>
  )
}

const NavLinkListItemWrapper = styled.li`
  height: 100%;
  border-bottom: 3px solid ${colors.brandSecondary};
  width: 100%;
  position: relative;
  display: ${props => props.isMenuExpanded ? "block" : "none"};
  ${breakpoint.md`
border-left: 3px solid ${colors.brandSecondary};
border-bottom: 0;
display: block;
`} /* padding: 3.25rem 4rem; */ a {
    color: ${colors.brandSecondary};
    font-family: "Roboto-Mono-Regular";
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    ${setFlex()};
    &.active {
      background-color: ${colors.brandSecondaryDark};
      color: ${colors.brandWhite};
    }
  }
  &:hover {
    background-color: ${colors.brandSecondary};
    a {
      color: ${colors.brandPrimary};
    }
  }
`

export default NavLinkListItem
