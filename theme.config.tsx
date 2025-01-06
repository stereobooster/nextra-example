import type { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Nextra example</span>,
  project: {
    link: "https://github.com/stereobooster/nextra-example",
  },
  docsRepositoryBase:
    "https://github.com/stereobooster/nextra-example/tree/main/",
  feedback: {
    content: null,
  },
  navigation: false,
};

export default config;
