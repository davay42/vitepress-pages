import { createContentLoader } from 'vitepress'

import transformPages from './src/server'

export default createContentLoader('./**/*/*.md', {
  transform: transformPages({
    mediaTypes: {
      cover: { size: 1200, height: 1000, fit: "inside" },
    }
  })
})