import styled from "styled-components"
import React from "react"
import Heading from "../ui/Heading"
import { setSharedPadding } from "../../utils/spacingHelpers"
import { setFlex } from "../../utils/alignmentHelpers"
import { breakpoint } from "../../utils/breakpoints"
import * as colors from "../../utils/colors"

const HeaderLogo = () => {
  return (
    <HeaderLogoWrapper>
      <Heading text="Emma Boardman"></Heading>
      <Heading variant="h2" text="UX & front-end development"></Heading>
    </HeaderLogoWrapper>
  )
}

const HeaderLogoWrapper = styled.div`
  height: 100%;
  padding-left: 1.5rem;
  color: ${colors.brandSecondary};
  display: flex;
  justify-content: center;
  flex-direction: column;
  h1 {
    padding-bottom: 0.75rem;
  }
  ${breakpoint.md`
    padding-left: 2.2rem;
    h1 {
    padding-bottom: 1rem;
  }
  `}
`

export default HeaderLogo
