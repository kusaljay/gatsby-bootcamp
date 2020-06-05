module.exports = {
  siteMetadata: {
    title: 'Full-stack Bootcamp',
    author: 'Kusal Fernando'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ]
}