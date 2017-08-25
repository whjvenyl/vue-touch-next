// setup global chai methods
import { expect } from 'chai'

import Vue from 'vue/dist/vue.common'
import VueTouch from '../helpers/vue-touch'

VueTouch.registerCustomEvent('doubletap', {
  type: 'tap',
  taps: 2
})
Vue.use(VueTouch)

import {
  createFromTemplate,
  hasRecognizer
} from '../helpers'

describe('VueTouch.customEvents', () => {
  beforeEach(function () {})

  it('custom Event `doubletap` gets triggered', () => {
    const vt = createFromTemplate(`
    <v-touch
      v-on:doubletap="cb"
    />
    `)

    expect(vt.recognizers.doubletap !== undefined).to.be.true
  })

  it('Custom Event local options work', () => {
    const vt = createFromTemplate(`
    <v-touch
      v-on:doubletap="cb"
      v-bind:doubletap-options="{taps: 3}"
    />
    `)

    const taps = vt.recognizers.doubletap.options.taps
    expect(taps).to.equal(3)
  })
})
