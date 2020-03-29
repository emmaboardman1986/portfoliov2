import styled from "styled-components"
import React from "react"
import * as colors from "../../utils/colors"
import { setFlex } from "../../utils/alignmentHelpers"
import { breakpoint } from "../../utils/breakpoints"
import { Link } from "gatsby"
import Heading from "../ui/Heading"

const ProjectTitle = () => {
  return (
    <ProjectTitleWrapper>
      <Link>Projects</Link> >  <Heading variant="h3" text="Project Name"></Heading>
    </ProjectTitleWrapper>
  )
}

const ProjectTitleWrapper = styled.div`
  background-color: ${colors.brandWhite};
  border-top: 3px solid ${colors.brandSecondary};
  display: flex;
  padding: 1rem;
  box-sizing: border-box;
  height: 8vh;
  ${setFlex()};
  h3 {
    font-size: 1.25rem;
    margin: 0.5rem;
    color: ${colors.brandSecondaryDark};
  }
  a {
    margin: 0.5rem;
  }


`

export default ProjectTitle
