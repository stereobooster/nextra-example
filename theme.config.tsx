import type { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Nextra example</span>,
  project: {
    link: "https://github.com/stereobooster/braindb",
  },
  docsRepositoryBase:
    "https://github.com/stereobooster/braindb/tree/main/packages/nextra/",
  feedback: {
    content: null,
  },
  navigation: false,
};

export default config;
