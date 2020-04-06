import React from "react"
import Layout from "../components/ui/layout"
import { graphql } from "gatsby"
import styled from "styled-components"
import Section from "../components/ui/section"
import * as colors from "../utils/colors"

export default ({data}) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Section>
      <h1>{post.frontmatter.title}</h1>
      <Post dangerouslySetInnerHTML={{ __html: post.html }}>
      </Post>
      </Section>
    </Layout>
  )
}

const Post = styled.div`
ul {
  padding: 1.5rem 2rem;

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
h2 {
  padding: 1rem 0;
  color: ${colors.brandSecondary};
}
blockquote {
  margin: 0.5rem;
  background-color: ${colors.brandPrimary};
  padding: 1rem;
  border-radius: 3px;
  border: dashed 1px ${colors.brandPrimary};
}
blockquote + p {
  margin-top: 1rem;
}
pre {
  padding: 1rem;
  max-width: 100%;
  background-color: ${colors.brandSecondaryDark};
  color: ${colors.brandPrimary};
  overflow: scroll;
}
`

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`