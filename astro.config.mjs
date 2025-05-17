// @ts-check
// import { defineConfig } from 'astro/config';

// https://astro.build/config
// export default defineConfig({

// });

import rehypeWrap from 'rehype-wrap';
import rehype-slug from 'rehypePlugins'

export default {
  markdown: {
    rehypePlugins: 
    [
      [rehypeWrap, 
        {
        selector: 'h1, h2, h3, h4, h5, h6',
        multiple: true,
        wrapper: 'div.heading-wrapper',
        }],
      'rehype-slug',
      'rehype-autolink'  
    ]
  }
}
