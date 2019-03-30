module.exports = {
  siteMetadata: {
    title: 'Toby Jaguar',
    copyright: '2019',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 720,
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
    resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'TobyJaguar',
        short_name: 'TobyJaguar',
        start_url: '/',
        background_color: '#f1f1ff',
        theme_color: '#373740',
        display: 'standalone',
        icon: 'src/assets/gravatar.jpg',
        include_favicon: true,
      },
    },
  ],
}
