import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/ui/layout"
import Section from "../components/ui/Section"
import * as colors from "../utils/colors"
import { breakpoint } from "../utils/breakpoints"

const shortcodes = { Link }

export default function PageTemplate({ data: { mdx } }) {
  console.log(mdx)
  return (
    <Layout>
      <Section>
        <h1>{mdx.frontmatter.title}</h1>
        <Post>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>
           {mdx.body}
          </MDXRenderer>
        </MDXProvider>
        </Post>
      </Section>
    </Layout>
  )
}

const TitleWrapper = styled.h1`
  color: pink;
`

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
    padding: 1.25rem 0;
    padding-top: 1.75rem;
    color: ${colors.brandSecondary};
  }
  blockquote {
    margin: 0.5rem;
    background-color: ${colors.brandPrimary};
    color: ${colors.brandSecondaryDark};
    padding: 1rem;
    border-radius: 3px;
    border: dashed 2px ${colors.brandSecondaryDark};
  }
  strong {
    display: block;
    margin: 1rem 0;
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
    border-radius: 3px;
    ${breakpoint.md`
    box-sizing: border-box;
    width: 70%;
    margin-left: auto;
    margin-right: auto;`}
  }
`

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
      }
    }
  }
`
