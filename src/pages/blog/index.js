import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/ui/layout"
import Main from "../../components/ui/Main"
import Section from "../../components/ui/Section"
import PagesIndex from "../../components/ui/PagesIndex"

export default ({ data }) => {
  return (
    <Layout>
      <Main>
        <Section>
        <h1>Blog</h1>
        <PagesIndex>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li key={node.id}>
            <h2>
               <a href={`/blog/${node.fields.slug}`}>{node.frontmatter.title}</a> <span>{node.frontmatter.date}</span>
            </h2>
            
          </li>
        ))}
        </PagesIndex>
        </Section>
      </Main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          html
          fields {
            slug
          }
          frontmatter {
            date
            title
          }
        }
      }
    }
  }
`
