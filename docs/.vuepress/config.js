const themeConfig = require('./config/theme/')

module.exports = {
  title: 'Vita2333\'s Blog',
  description: 'Enjoy when you can, and endure when you must.',
  base: '/blog/',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      }],
  ],
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true,
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart'],
}
