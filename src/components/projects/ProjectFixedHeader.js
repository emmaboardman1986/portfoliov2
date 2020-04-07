import styled from "styled-components"
import React, { useRef } from "react"
import { breakpoint } from "../../utils/breakpoints"
import ProjectNav from "../../components/projects/ProjectNav"
import ProjectTitle from "../../components/projects/ProjectTitle"

const ProjectFixedHeader = ({
  title,
  isOverviewInViewPort,
  isUXInViewPort,
  isA11yInViewPort,
  isResultInViewPort,
}) => {
  const projectFixedHeaderEl = useRef()
  // temp workaround for lack of babel-flow parsing to support forwardRefs
  if (typeof window !== "undefined" && projectFixedHeaderEl.current !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.matchMedia("screen and (min-width: 992px)")) {
        const siteHeaderRect = document
          .querySelector("header")
          .getBoundingClientRect()

        if (siteHeaderRect.bottom <= 0) {
          console.log(projectFixedHeaderEl.current)
          projectFixedHeaderEl.current.classList.add("is-sticky")
          // projectFixedHeaderEl.current.style.position = "fixed"
        } else {
          projectFixedHeaderEl.current.classList.remove("is-sticky")
        }
      }
    })
  }

  return (
    <ProjectFixedHeaderWrapper ref={projectFixedHeaderEl}>
      <ProjectTitle title={title} />
      <ProjectNav
        isOverviewInViewPort={isOverviewInViewPort}
        isUXInViewPort={isUXInViewPort}
        isA11yInViewPort={isA11yInViewPort}
        isResultInViewPort={isResultInViewPort}
      />
    </ProjectFixedHeaderWrapper>
  )
}

const ProjectFixedHeaderWrapper = styled.div`
  position: fixed;
  top: 100px;
  left: 0;
  width: 100%;
  ${breakpoint.md`
  position: relative;
  top:initial;
  `}
  &.is-sticky {
  position: fixed;
  top: 0px;
  }
`

export default ProjectFixedHeader
