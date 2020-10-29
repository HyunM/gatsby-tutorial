/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Gatsby Tutorial",
    description: "some random description",
    author: "@johndoe",
    data: ["item 1", "item 2"],
    person: { name: "peter", age: 32 },
  },
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
}
