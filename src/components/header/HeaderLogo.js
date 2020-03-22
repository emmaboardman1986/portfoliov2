import styled from "styled-components"
import React from "react"
import Heading from "../ui/Heading"
import { setSharedPadding } from "../../utils/spacingHelpers"

const HeaderLogo = () => {
  return (
    <HeaderLogoWrapper>
      <Heading text="Emma Boardman"></Heading>
      <Heading variant="h2" text="UX & front-end development"></Heading>
    </HeaderLogoWrapper>
  )
}

const HeaderLogoWrapper = styled.div`
  padding: 1.5rem;
  color: #000d35;
  h1 {
    padding-bottom: 1rem;
  }
`

export default HeaderLogo
