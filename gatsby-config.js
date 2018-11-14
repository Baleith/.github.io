module.exports = {
  siteMetadata: {
    title: 'Jonathan Nilsson',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Jonathan Nilsson',
        short_name: 'Portfolio',
        start_url: '/',
        background_color: '#4ECDC4',
        theme_color: '#4ECDC4',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
