export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Movie Catalog",
  description:
    "This boilerplate is a movie catalog application built with Next.js App Router, GraphQL Yoga, and HeroUI. It is designed to help the team practice working with API routes, GraphQL queries/mutations, Server Actions, and UI integration using HeroUI",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "GEG",
      href: "/geg",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
  },
};
