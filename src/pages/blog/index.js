import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/ui/layout"
import Section from "../../components/ui/Section"
import PagesIndex from "../../components/ui/PagesIndex"

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <Layout>
      <Section>
        <h1>Blog</h1>
        <PagesIndex>
          {posts.map(({ node: post }) => (
            <li key={post.id}>
              <h2>
                <a href={`${post.fields.slug}`}>
                  {post.frontmatter.title}
                </a>{" "}
                <span>{post.frontmatter.date}</span>
              </h2>
            </li>
          ))}
        </PagesIndex>
      </Section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogIndex
