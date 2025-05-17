// @ts-check
// import { defineConfig } from 'astro/config';

// https://astro.build/config
// export default defineConfig({

// });

import rehypeWrap from 'rehype-wrap';
import customRehypePlugin from './src/plugings/markdown'

export default {
  markdown: {
    rehypePlugins: 
    [ customRehypePlugin ]
  }
}
