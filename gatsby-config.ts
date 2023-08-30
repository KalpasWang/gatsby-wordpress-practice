import 'dotenv/config';
import { cleanEnv, url } from 'envalid';
import type { GatsbyConfig } from 'gatsby';

const env = cleanEnv(process.env, {
  WP_GRAPHQL_URL: url(),
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gatsby-wordpress-practice`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: env.WP_GRAPHQL_URL,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};

export default config;
