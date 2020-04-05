import styled from "styled-components"
import React from "react"
import * as colors from "../../utils/colors"
import { setFlex } from "../../utils/alignmentHelpers"
import { breakpoint } from "../../utils/breakpoints"
import { Link } from "gatsby"

const ProjectNav = () => {
  return (
    <ProjectNavWrapper>
      <ProjectNavList>
        <ProjectNavListItem>
          <Link>Overview</Link>
        </ProjectNavListItem>
        <ProjectNavListItem>
          <Link>UX</Link>
        </ProjectNavListItem>
        <ProjectNavListItem>
          <Link>A11y</Link>
        </ProjectNavListItem>
        <ProjectNavListItem>
          <Link>Result</Link>
        </ProjectNavListItem>
      </ProjectNavList>
    </ProjectNavWrapper>
  )
}

const ProjectNavWrapper = styled.div`
  background-color: ${colors.brandPrimary};
  border-bottom: 2px solid ${colors.brandSecondary};
  height: fit-content;
`

const ProjectNavList = styled.ul`
  display: flex;
  border-top: 2px solid ${colors.brandSecondary};
  ${setFlex({ x: "space-between", y: "center" })};
`

const ProjectNavListItem = styled.li`
  &:not(:first-of-type) {
    border-left: 2px solid ${colors.brandSecondary};
  }
  
  width: 100%;
  display: flex;
  ${setFlex()};
  padding: 1rem;
  box-sizing: border-box;

  a {
    font-family: "Roboto-Mono-Regular", Arial;
  }
`

export default ProjectNav
