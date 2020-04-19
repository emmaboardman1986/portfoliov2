import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/ui/layout"
import Section from "../../components/ui/Section"
import PagesIndex from "../../components/ui/PagesIndex"

export default ({ data }) => {
  return (
    <Layout>
      <Section>
        <h1>Personal Projects</h1>
        <PagesIndex>
          {data.allProjectsJson.edges.map(({ node }) => (
            <li key={node.id} style={{ marginBottom: "1rem" }}>
              <h2>
                <a href={`/projects/${node.slug}`}>{node.title}</a>
              </h2>

              <p>{node.tags}</p>
            </li>
          ))}
        </PagesIndex>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          slug
          title
          tags
          date
          overviewtldr
          overview
          ux
          a11y
          result
        }
      }
    }
  }
`
