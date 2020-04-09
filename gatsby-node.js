const path = require(`path`)


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
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