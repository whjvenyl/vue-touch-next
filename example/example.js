import Vue from 'https://unpkg.com/vue@2.4.2/dist/vue.esm.js?module'

import VueTouch, { registerCustomEvent } from './vue-touch-next.esm.js'

// example registering a custom doubletap event.
// the `type` indicates the base recognizer to use from Hammer
// all other options are Hammer recognizer options.
registerCustomEvent('doubletap', {
  type: 'tap',
  taps: 2
})

Vue.use(VueTouch)

const app = new Vue({
  el: '#app',
  data: {
    event: {}
  },
  methods: {
    test: function (e, name = '') {
      delete e.target
      this.event = e
      console.log(e, name)

      e.stopPropagation()
    },
    testdouble: function (e) {
      console.log('doubletap')
      this.test(e)
    }
  }
})
