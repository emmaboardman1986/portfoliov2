import React from "react"
import Layout from "../components/ui/layout"
import ProjectFixedHeader from "../components/projects/ProjectFixedHeader"
import Heading from "../components/ui/Heading"
import styled from "styled-components"
import { graphql } from "gatsby"
import * as colors from "../utils/colors"
import { setFlex } from "../utils/alignmentHelpers"

export default ({ data }) => {
  const project = data.projectsJson

  function createMarkup(content) {
    return { __html: content }
  }
  return (
    <Layout>
      <ProjectFixedHeader title={project.title} />
      <ProjectMain>
        <ProjectSection>
          <Heading variant="h2" text="Overview"></Heading>
          <ProjectOverviewTLDR
            dangerouslySetInnerHTML={createMarkup(project.overviewtldr)}
          ></ProjectOverviewTLDR>
          <ProjectOverview
            dangerouslySetInnerHTML={createMarkup(project.overview)}
          ></ProjectOverview>
        </ProjectSection>
        <ProjectSection>
          <Heading variant="h2" text="UX"></Heading>
          <ProjectUX
            dangerouslySetInnerHTML={createMarkup(project.ux)}
          ></ProjectUX>
        </ProjectSection>
        <ProjectSection>
          <Heading variant="h2" text="Accessibility (A11y)"></Heading>
          <ProjectA11y
            dangerouslySetInnerHTML={createMarkup(project.a11y)}
          ></ProjectA11y>
        </ProjectSection>
        <ProjectSection>
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
  margin-top: 31vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  ${setFlex()};
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

const ProjectContentBlock = styled.div`

`

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
  background-color: ${colors.brandSecondary};
  color: ${colors.brandPrimary};
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 3px;
  border: dashed 1px ${colors.brandPrimary};
  h3 {
    padding: 1rem 0;
    font-size: 1.15rem;
    color: ${colors.brandWhite};
  }
  ul {
    padding-left: 1rem;
  }
  li {
    list-style: disc;
    line-height: 1.5rem;
  }
  a {
    color: ${colors.brandPrimary};
  }
`

const ProjectUX = styled(ProjectContentBlock)`
`
const ProjectA11y = styled(ProjectContentBlock)`
`
const ProjectResult = styled(ProjectContentBlock)`
`

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
