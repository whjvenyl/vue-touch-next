/* global define */

import VueTouch from './install.js'

const version = '__VERSION__'
VueTouch.version = version

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueTouch)
  window.VueTouch = VueTouch
} else if (typeof exorts === 'object') {
  module.exports = VueTouch
} else if (typeof define === 'function' && define.amd) {
  define([], function () { return VueTouch })
}
