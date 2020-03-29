import React from "react"
import styled from "styled-components"
import { breakpoint } from "../../../utils/breakpoints"

const Hero = ({ children }) => {
  return <HeroWrapper>{children}</HeroWrapper>
}

const HeroWrapper = styled.div`
  display: none;
  ${breakpoint.md`
    display: flex;
    padding: 3rem 2rem;
    padding-top: 10rem;
    margin-left: 4rem;
    position: relative;
    .skills-stack:nth-of-type(1) {
      z-index: 3;
      p {
        font-size: 1.5rem;
      }
    }
    .skills-stack:nth-of-type(2) {
      z-index: 2;
      margin-left: -2rem;
      margin-top: -3rem;
      p {
        font-size: 1.25rem;
        width: 95%;
      }
      svg {
        width: 95%;
      }
      span {
        font-size: 1.20rem;
      }
      .rectangle-face {
        width: 85%;
      }
    }
    .skills-stack:nth-of-type(3) {
      z-index: 1;
      margin-left: -3rem;
      margin-top: -6rem;
      p {
        font-size: 1rem;
        width: 85%;
      }
      svg {
        width: 85%;
      }
      span {
        font-size: 1.10rem;
      }
      .rectangle-face {
        width: 75%;
      }
    }
    `}
`

export default Hero
