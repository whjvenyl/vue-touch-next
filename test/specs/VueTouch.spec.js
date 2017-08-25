
// setup global chai methods
import { expect, assert } from 'chai'

import Vue from 'vue/dist/vue.common'
import VueTouch from '../helpers/vue-touch'

Vue.use(VueTouch, { name: 'v-toucher' })

describe('VueTouch.tests', () => {
  it('Rendering without props renders as div', () => {
    const vm = new Vue({
      template: '<div><v-toucher tag="span"></v-toucher></div>'
    }).$mount()
    expect(vm.$el.innerHTML).to.equal('<span style="touch-action: auto; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></span>')
  })
})
