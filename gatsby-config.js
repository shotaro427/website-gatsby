/** @type {import('gatsby).GatsbyConfig} */
require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'new',
    siteUrl: 'https://www.yourdomain.tld',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.ACCESS_TOKEN,
        spaceId: process.env.SPACE_ID,
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: 'http://localhost:8000/___graphql'
      }
    }
  ],
};
