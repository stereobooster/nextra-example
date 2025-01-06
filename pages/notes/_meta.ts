import { createCatchAllMeta } from "nextra/catch-all";

// Note: for remote MDX `_meta.js` should return a function instead of an object
export default () => createCatchAllMeta(["index.mdx", "contact.mdx", "about.mdx"]);

// export default () => ({
//   index: 'My Homepage',
//   contact: 'Contact Us',
//   about: 'About Us'
// });
