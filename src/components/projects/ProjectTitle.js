import styled from "styled-components"
import React from "react"
import * as colors from "../../utils/colors"
import { setFlex } from "../../utils/alignmentHelpers"
import { breakpoint } from "../../utils/breakpoints"
import { Link } from "gatsby"
import Heading from "../ui/Heading"

const ProjectTitle = ({title}) => {
  return (
    <ProjectTitleWrapper>
      <Link>Projects</Link> >  <Heading variant="h1" text={title}></Heading>
    </ProjectTitleWrapper>
  )
}

const ProjectTitleWrapper = styled.div`
  background-color: ${colors.brandWhite};
  border-top: 3px solid ${colors.brandSecondary};
  display: flex;
  padding: 0.5rem;
  box-sizing: border-box;
  height: 8vh;
  ${setFlex()};
  h1 {
    font-size: 0.95rem;
    margin: 0.5rem;
    color: ${colors.brandSecondaryDark};
  }
  a {
    margin: 0.5rem;
    font-size: 0.75rem;
  }
  ${breakpoint.md`
  padding: 1rem;
  h3 {
    font-size: 1.25rem;
  }
  a {
    font-size: 1rem;
  }`}


`

export default ProjectTitle
