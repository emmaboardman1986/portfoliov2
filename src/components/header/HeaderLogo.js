import styled from "styled-components"
import React from "react"
import Heading from "../ui/Heading"
import { setSharedPadding } from "../../utils/spacingHelpers"
import { setFlex } from "../../utils/alignmentHelpers"
import { breakpoint } from "../../utils/breakpoints"
import * as colors from "../../utils/colors"
import { Link } from "gatsby"

const HeaderLogo = () => {
  return (
    <HeaderLogoWrapper>
      <Link to="/">
        <HeaderLogoMainText>Emma Boardman</HeaderLogoMainText>
        <HeaderLogoSubTitle>UX & front-end development</HeaderLogoSubTitle>
      </Link>
    </HeaderLogoWrapper>
  )
}

const HeaderLogoWrapper = styled.div`
  height: 100%;
  padding-left: 1.5rem;
  a {
    text-decoration: none;
    color: ${colors.brandSecondary};
    &:hover,
    &:focus {
      color: #00103e;
    }
  }
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${breakpoint.md`
    padding-left: 2.2rem;
  `}
`

const HeaderLogoMainText = styled.p`
  font-family: "BC-Falster-Grotesk-Regular", Arial;
  text-rendering: optimizeLegibility;
  font-size: 1.4rem;
  line-height: 1;
  letter-spacing: 0.01em;
  padding-bottom: 0.75rem;
  font-weight: bold;
  ${breakpoint.md`
  font-size: 1.6rem;
  padding-bottom: 1rem;`}
`

const HeaderLogoSubTitle = styled(HeaderLogoMainText)`
 font-size: 1rem;
 font-weight: normal;
 ${breakpoint.md`
  font-size: 1.2rem;`}
  `

export default HeaderLogo
