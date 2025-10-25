
import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Y3 Smiles Dental`,
    siteUrl: `https://y3smilesdental.com.au`
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-image`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 85,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          placeholder: `blurred`,
          quality: 85,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet-async`,
    `gatsby-plugin-typescript`,
    // Sitemap plugin temporarily disabled - using static robots.txt with manual sitemap
    // {
    //   resolve: `gatsby-plugin-sitemap`,
    //   options: {
    //     output: '/',
    //     createLinkInHead: true,
    //     excludes: [],
    //   },
    // },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://y3smilesdental.com.au`,
        stripQueryString: true,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://y3smilesdental.com.au`,
        sitemap: `https://y3smilesdental.com.au/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/public`,
      },
    },
  ],
};

export default config;
