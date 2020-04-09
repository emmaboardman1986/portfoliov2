const path = require(`path`)
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: "slug",
      node,
      value: `blog${value}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const blogResult = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (blogResult.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const posts = blogResult.data.allMdx.edges

  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog.js`),
      context: { id: node.id },
    })
  })


  const projectResult = await graphql(`
    query {
      allProjectsJson {
        edges {
          node {
            slug
            title
            overviewtldr
            overview
            ux
            a11y
            result
          }
        }
      }
    }
  `)
  projectResult.data.allProjectsJson.edges.forEach(({ node }) => {
    createPage({
      path: "/projects/" + node.slug,
      component: path.resolve(`./src/templates/projects.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
        title: node.title,
        challenge: node.challenge,
        slug: node.slug,
        title: node.title,
        overviewtldr: node.overviewtldr,
        overview: node.overview,
        ux: node.ux,
        a11y: node.a11y,
        result: node.result,
      },
    })
  })
}
