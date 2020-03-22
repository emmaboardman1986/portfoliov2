import styled from "styled-components"
import React from "react"
import Nav from "./Nav"
import HeaderLogo from "./HeaderLogo"
import * as colors from "../../utils/colors"
import { setFlex } from "../../utils/alignmentHelpers"
import { setSharedPadding } from "../../utils/spacingHelpers"

const Header = ({isMenuExpanded, setIsMenuExpanded}) => {
  return (
    <HeaderWrapper>
      <HeaderLogo />
      <Nav isMenuExpanded={isMenuExpanded} setIsMenuExpanded={setIsMenuExpanded}/>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  background-color: ${colors.brandPrimary};
  border-bottom: 3px solid ${colors.brandSecondary};
  ${setFlex({x: "space-between", y: "center"})};
`

export default Header
