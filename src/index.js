/* global define */

import vueTouch from './install.js'

const version = '__VERSION__'
vueTouch.version = version

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueTouch)
} else if (typeof exorts === 'object') {
  module.exports = vueTouch
} else if (typeof define === 'function' && define.amd) {
  define([], function () { return vueTouch })
}
