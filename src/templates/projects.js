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
import A11yChecklist from "../components/ui/A11yChecklist"

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
          <A11yChecklist />
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
  .muted {
    font-size: 0.8rem;
    color: black;
    margin-top: 0.25rem;
  }
  .case-study-content {
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
  }
  .case-study-info {
    margin-bottom: 2%;
    order: 2;
    img {
      width: 70%;
      margin-top: 1rem;
    }
    li {
      color: #001759;
    }
    u {
      margin-bottom: 1rem;
    }
  }
  .case-study-desktop-image {
    display: flex;
    flex-direction: column;

    order: 1;
    margin: -15px 0;
    img {
      border-radius: 12px;
      align-self: center;
      ${breakpoint.sm`
      align-self: flex-start;`}
      margin-bottom: 0.5rem;
    }
  }

  .case-study-info-results {
    order: 1;
  }

  .case-study-desktop-image-results {
    order: 2;
  }
  ${breakpoint.md`
  .case-study-content {

display: flex;
flex-direction: row;

}


.case-study-info {

width: 50%;
margin: 0 2%;
order: 1;


}

.case-study-desktop-image {

width: 50%;
order: 2;

}`}
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
width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  margin-bottom: 0.5rem;
  a {
    &:hover,
    &:focus {
      background-color: ${colors.brandSecondary};
      color: ${colors.brandWhite};
    }
  }
  h2 {
    padding-bottom: 0.25rem;
    font-size: 1.5rem;
  }
  p {
    margin-top: 1.15rem;
  }
  ul {
    padding: 0.75rem 2rem;
    li {
      font-family: "Roboto-Mono-Regular", monospace;
      list-style: disc;
      &:not(:last-of-type) {
        padding-bottom: 0.75rem;
      }
      li {
        list-style: circle;
      }
    }
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
  background-color: ${colors.brandPrimary};
  color: ${colors.brandBlack};
  padding: 1rem;
  margin: 0.5rem;
  margin-top: 1.25rem;
  border-radius: 6px;
  border: dashed 2px ${colors.brandSecondaryDark};
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
