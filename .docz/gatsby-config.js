const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Defi Regime',
    description:
      'monorepo of various proposal templates, governance processes, and other deliberative sensemaking procedures for decentralized projects and protocols',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/sbacha/proposals/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Defi Regime',
        description:
          'monorepo of various proposal templates, governance processes, and other deliberative sensemaking procedures for decentralized projects and protocols',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/sbacha/proposals',
          templates:
            '/Users/sbacha/.nvm/versions/node/v10.21.0/lib/node_modules/docz/node_modules/docz-core/dist/templates',
          docz: '/Users/sbacha/proposals/.docz',
          cache: '/Users/sbacha/proposals/.docz/.cache',
          app: '/Users/sbacha/proposals/.docz/app',
          appPackageJson: '/Users/sbacha/proposals/package.json',
          appTsConfig: '/Users/sbacha/proposals/tsconfig.json',
          gatsbyConfig: '/Users/sbacha/proposals/gatsby-config.js',
          gatsbyBrowser: '/Users/sbacha/proposals/gatsby-browser.js',
          gatsbyNode: '/Users/sbacha/proposals/gatsby-node.js',
          gatsbySSR: '/Users/sbacha/proposals/gatsby-ssr.js',
          importsJs: '/Users/sbacha/proposals/.docz/app/imports.js',
          rootJs: '/Users/sbacha/proposals/.docz/app/root.jsx',
          indexJs: '/Users/sbacha/proposals/.docz/app/index.jsx',
          indexHtml: '/Users/sbacha/proposals/.docz/app/index.html',
          db: '/Users/sbacha/proposals/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
