// setup global chai methods
import { expect } from 'chai'

import Vue from 'vue/dist/vue.common'
import VueTouch from '../helpers/vue-touch'

Vue.use(VueTouch)

import {
  createFromTemplate,
  isEnabled,
  isDisabled,
  allEnabled,
  allDisabled
} from '../helpers'

describe('VueTouch.enabledProps', () => {
  beforeEach(function () {})

  it('prop is true by default & events are enabled', () => {
    const vt = createFromTemplate(`
      <v-touch
      @tap="cb"
      @swipe="cb"
      />
    `)
    const propEnabled = vt.enabled
    expect(propEnabled).to.be.true

    const rcEnabled = isEnabled(vt, 'tap')
    expect(rcEnabled).to.be.true
  })

  it('all rcg disabled when enabled="false"', () => {
    const vt = createFromTemplate(`
      <v-touch
      v-bind:enabled="false"
      v-on:tap="cb"
      v-on:swipe="cb"
      />
    `)

    expect(vt.enabled).to.be.false
    const areAllDisabled = allDisabled(vt)
    expect(areAllDisabled).to.be.true
  })

  it('Passing obj to enabled prop correctly toggles recognizers', () => {
    const vt = createFromTemplate(`
      <v-touch
      v-bind:enabled="{ tap: true, swipe: false }"
      v-on:tap="cb"
      v-on:swipe="cb"
      />
    `)

    vt.$nextTick()
    .then(() => {
      const tapEnabled = isEnabled(vt, 'tap')
      const swipeDisabled = isDisabled(vt, 'swipe')
      expect(tapEnabled && swipeDisabled).to.be.true
    })

    .then(() => {
      vt.updateEnabled({ tap: false, swipe: true })

      return vt.$nextTick()
    })

    .then(() => {
      const tapDisabled = isDisabled(vt, 'tap')
      const swipeEnabled = isEnabled(vt, 'swipe')
      expect(tapDisabled && swipeEnabled).to.be.true
    })
  })
})
