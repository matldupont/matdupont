const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql }) => {
  // const { createPage } = actions;
  // return new Promise((resolve, reject) => {
  //   resolve(
  //     graphql(
  //       `
  //         {
  //           allMdx {
  //             edges {
  //               node {
  //                 id
  //                 parent {
  //                   ... on File {
  //                     name
  //                     sourceInstanceName
  //                   }
  //                 }
  //                 code {
  //                   scope
  //                 }
  //                 frontmatter {
  //                   tags
  //                   templateKey
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       `
  //     ).then(result => {
  //       if (result.errors) {
  //         console.log(result.errors);
  //         reject(result.errors);
  //       }

  //       console.log(result.data.allMdx.edges);

  //       const posts = result.data.allMdx.edges

  //       // posts.forEach(edge => {
  //       //   const id = edge.node.id
  //       //   createPage({
  //       //     path: `/${node.parent.sourceInstanceName}/${node.parent.name}`,
  //       //     component: componentWithMDXScope(
  //       //       path.resolve(`src/templates/${String(edge.node.frontmatter.templateKey)}.js`),
  //       //       node.code.scope
  //       //     ),
  //       //     context: { id: node.id }
  //       //   });
  //       // })
  //     })
  //   );
  // });
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // console.log('creating Node', node.internal.type)

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
