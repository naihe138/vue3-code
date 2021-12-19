import vuePlugin from 'rollup-plugin-vue'
import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import PostCSS from 'rollup-plugin-postcss'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'
const extensions = ['.js', '.ts', '.vue']

const plugins = [
  alias({
    entries: {
      'vue': 'vue/dist/vue.runtime.esm-browser.js',
    }
  }),
  resolve({ extensions, browser: true }),
  vuePlugin({
    template: {
      compiler: require('@vue/compiler-sfc')
    },
    cssModulesOptions: {
      generateScopedName: '[local]___[hash:base64:5]',
    },
  }),
  PostCSS(),
]

if (process.env.NODE_ENV === 'development') {
  plugins.push(livereload())
  plugins.push(serve({
    port: 10001,
    historyApiFallback: true,
    contentBase: ['./', 'dist', 'node_modules']
  }))
}

export default {
  input: './src/index.js',
  sourcemap: true,
  external: [],
  plugins,
  output: [
    {
      file: 'dist/bundle.js',
      format: 'esm',
    },
  ],
}
