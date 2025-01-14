/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-prefix-selector': {
      prefix: '.t',
      transform(prefix, selector, prefixedSelector, filePath, rule) {
        if (filePath.includes('global.css') && selector.startsWith('.')) {
          return `${prefix} ${selector}`
        }
        return selector
      },
    },
  },
}

export default config
