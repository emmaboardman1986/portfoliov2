import React from "react"
import styled from "styled-components"
import { breakpoint } from "../../utils/breakpoints"

const Hero = ({ children }) => {
  return <HeroWrapper>{children}</HeroWrapper>
}

const HeroWrapper = styled.div`
  display: none;
  ${breakpoint.md`
    display: flex;
    padding: 3rem 2rem;
    div {
    position: relative;
    :nth-child(1) {
      z-index: 3;
      margin-bottom: -10%;
    }
    :nth-child(2) {
      z-index: 2;
      margin-bottom: -10%;
    }
    :nth-child(3) {
      z-index: 1;
    }
  }
    `}
`

export default Hero
