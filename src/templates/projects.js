import React, { useRef } from "react"
import Layout from "../components/ui/layout"
import ProjectFixedHeader from "../components/projects/ProjectFixedHeader"
import Heading from "../components/ui/Heading"
import styled from "styled-components"
import { graphql } from "gatsby"
import * as colors from "../utils/colors"
import { setFlex } from "../utils/alignmentHelpers"
import { breakpoint } from "../utils/breakpoints"
import { useIsInViewport } from "../utils/customHooks/useIsInViewport"

export default ({ data }) => {
  const project = data.projectsJson
  // isVisible functionality
  const overviewEl = useRef()
  const uxEl = useRef()
  const a11yEl = useRef()
  const resultEl = useRef()
  const isOverviewInViewPort = useIsInViewport({ element: overviewEl })
  const isUXInViewPort = useIsInViewport({ element: uxEl })
  const isA11yInViewPort = useIsInViewport({ element: a11yEl })
  const isResultInViewPort = useIsInViewport({ element: resultEl })

  function createMarkup(content) {
    return { __html: content }
  }

  return (
    <Layout>
      <ProjectFixedHeader
        title={project.title}
        isOverviewInViewPort={isOverviewInViewPort}
        isUXInViewPort={isUXInViewPort}
        isA11yInViewPort={isA11yInViewPort}
        isResultInViewPort={isResultInViewPort}
      />
      <ProjectMain>
        <AnchorSpacingSpan id="overview"></AnchorSpacingSpan>
        <ProjectSection ref={overviewEl}>
          <Heading variant="h2" text="Overview"></Heading>
          <ProjectOverviewTLDR
            dangerouslySetInnerHTML={createMarkup(project.overviewtldr)}
          ></ProjectOverviewTLDR>
          <ProjectOverview
            dangerouslySetInnerHTML={createMarkup(project.overview)}
          ></ProjectOverview>
        </ProjectSection>
        <AnchorSpacingSpan id="ux"></AnchorSpacingSpan>
        <ProjectSection ref={uxEl}>
          <Heading variant="h2" text="UX"></Heading>
          <ProjectUX
            dangerouslySetInnerHTML={createMarkup(project.ux)}
          ></ProjectUX>
        </ProjectSection>
        <AnchorSpacingSpan id="a11y"></AnchorSpacingSpan>
        <ProjectSection ref={a11yEl}>
          <Heading variant="h2" text="Accessibility"></Heading>
          <ProjectA11y
            dangerouslySetInnerHTML={createMarkup(project.a11y)}
          ></ProjectA11y>
        </ProjectSection>
        <AnchorSpacingSpan id="result"></AnchorSpacingSpan>
        <ProjectSection ref={resultEl}>
          <Heading variant="h2" text="Result"></Heading>
          <ProjectResult
            dangerouslySetInnerHTML={createMarkup(project.result)}
          ></ProjectResult>
        </ProjectSection>
      </ProjectMain>
    </Layout>
  )
}

const ProjectMain = styled.main`
  margin-top: calc(14vh + 100px);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  ${setFlex()};
  ${breakpoint.md`
  margin-top: 0;`}
`

const AnchorSpacingSpan = styled.span`
  height: 33vh;
  margin-top: -33vh;
  visibility: hidden;
  ${breakpoint.md`
  &:not(:first-of-type){
    height: 16vh;
    margin-top: -16vh;
  }`}
`

const ProjectSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  margin-bottom: 0.5rem;
  h2 {
    padding-bottom: 0.25rem;
    font-size: 1.5rem;
  }
  p {
    margin-top: 1.15rem;
  }
`

const ProjectContentBlock = styled.div``

const ProjectOverview = styled(ProjectContentBlock)`
  h2 {
    margin-bottom: 1.5rem;
  }
`

const ProjectOverviewTLDR = styled(ProjectContentBlock)`
  p {
    margin-top: 0;
  }
  margin-top: 1.15rem;
  background-color: ${colors.brandPrimary};
  color: ${colors.brandBlack};
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 6px;
  border: dashed 1px ${colors.brandPrimary};
  h3 {
    padding: 1rem 0;
    font-size: 1.15rem;
    color: ${colors.brandBlack};
  }
  ul {
    padding-left: 1rem;
  }
  li {
    list-style: disc;
    line-height: 1.5rem;
  }
  a {
    color: ${colors.brandSecondaryDark};
  }
`

const ProjectUX = styled(ProjectContentBlock)``
const ProjectA11y = styled(ProjectContentBlock)``
const ProjectResult = styled(ProjectContentBlock)``

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      id
      title
      overviewtldr
      overview
      ux
      a11y
      result
    }
  }
`
