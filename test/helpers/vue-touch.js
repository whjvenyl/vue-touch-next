let vueTouch

if (process.env.NODE_ENV === 'development') {
  vueTouch = require('../../src/index.js')
} else {
  vueTouch = require('../../dist/vue-touch-next.js')
}

export default vueTouch
