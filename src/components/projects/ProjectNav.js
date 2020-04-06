import styled from "styled-components"
import React from "react"
import * as colors from "../../utils/colors"
import { setFlex } from "../../utils/alignmentHelpers"

const ProjectNav = ({
  isOverviewInViewPort,
  isUXInViewPort,
  isA11yInViewPort,
  isResultInViewPort,
}) => {
  return (
    <ProjectNavWrapper>
      <ProjectNavList>
        <ProjectNavListItem className={isOverviewInViewPort ? "visible" : ""}>
          <a href="#overview">Overview</a>
        </ProjectNavListItem>
        <ProjectNavListItem className={isUXInViewPort ? "visible" : ""}>
          <a href="#ux">UX</a>
        </ProjectNavListItem>
        <ProjectNavListItem className={isA11yInViewPort ? "visible" : ""}>
          <a href="#a11y">A11y</a>
        </ProjectNavListItem>
        <ProjectNavListItem className={isResultInViewPort ? "visible" : ""}>
          <a href="#result">Result</a>
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
  .visible {
    transition: background-color 0.35s;
    background-color: ${colors.brandSecondaryDark};
    a {
      color: ${colors.brandPrimary};
    }
  }
`

const ProjectNavListItem = styled.li`
transition: background-color 0.35s;
background-color: ${colors.brandPrimary};
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
