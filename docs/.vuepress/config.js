module.exports = {
  title: "Hello VuePress",
  description: "Just playing around",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      {
        text: "Languages",
        ariaLabel: "Language Menu",
      },
    ],
    lastUpdated: "Last Updated", // string | boolean
    smoothScroll: true,
  },
  plugins: [
    "@vuepress/active-header-links",
    {
      sidebarLinkSelector: ".sidebar-link",
      headerAnchorSelector: ".header-anchor",
    },
  ],
};
