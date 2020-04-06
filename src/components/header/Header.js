import styled from "styled-components"
import React from "react"
import Nav from "./Nav"
import HeaderLogo from "./HeaderLogo"
import * as colors from "../../utils/colors"
import { setFlex } from "../../utils/alignmentHelpers"
import { breakpoint } from "../../utils/breakpoints"

const Header = ({isMenuExpanded, setIsMenuExpanded}) => {
  return (
    <HeaderWrapper>
      <HeaderLogo />
      <Nav isMenuExpanded={isMenuExpanded} setIsMenuExpanded={setIsMenuExpanded}/>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 15vh;
  z-index: 999;
  background-color: ${colors.brandPrimary};
  border-bottom: 3px solid ${colors.brandSecondary};
  ${setFlex({x: "space-between", y: "center"})};
  ${breakpoint.md`
    position: relative;
  `}
`

export default Header
