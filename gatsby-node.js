const path = require(`path`)

// BLOG PAGES FROM MARKDOWN

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)
    const slug = fileNode.name
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const blogResult = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  blogResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: "/blog/" + node.fields.slug,
      component: path.resolve(`./src/templates/blog.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
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