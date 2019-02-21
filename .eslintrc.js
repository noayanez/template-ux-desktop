module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    "vue/no-v-html": 0,
    "no-var": 0,
    "no-console": 0,
    "vue/attribute-hyphenation": ["always", {
      "ignore": []
    }]
  }
}
