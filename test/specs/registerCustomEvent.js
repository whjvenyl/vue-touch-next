// setup global chai methods
import { expect } from 'chai'

import Vue from 'vue/dist/vue.common'
import VueTouch, { registerCustomEvent } from '../helpers/vue-touch'
import Hammer from 'hammerjs'

describe('VueTouch.registerCustomEvent', () => {
  const warn = sinon.stub(console, 'warn')

  beforeEach(() => {
    Vue.use(VueTouch, { hammer: Hammer })
  })

  it('registerCustomEvent works before Vue.use(), errors after', () => {
    registerCustomEvent('doubletap', { taps: 2 })
    // console.log(log.getCall(0).args[0])
    const pattern = /\[vue\-touch\]: Custom Event/
    expect(pattern.test(warn.getCall(0).args[0])).to.be.true
  })
})
