/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "GraphQL Jobs List",
  titleTemplate: "%s | GraphQL Jobs List",
  defaultTitle: "GraphQL Jobs List",
  description: "GraphQL Jobs List",
  canonical: "https://graphql-jobs-list.vercel.app",
  openGraph: {
    url: "https://graphql-jobs-list.vercel.app",
    title: "GraphQL Jobs List",
    description: "GraphQL Jobs List",
    images: [
      {
        url: "https://og-image.sznm.dev/**nextarter-chakra**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "graphql jobs list og-image",
      },
    ],
    site_name: "graphql-jobs-list",
  },
  twitter: {
    handle: "@indluk",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
