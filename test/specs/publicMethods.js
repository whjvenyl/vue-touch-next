// setup global chai methods
import { expect } from 'chai'

import Vue from 'vue/dist/vue.common'
import VueTouch from '../helpers/vue-touch'

import {
  createFromTemplate,
  isEnabled, isDisabled,
  allEnabled, allDisabled
} from '../helpers'

describe('VueTouch.publicMethods', () => {
  let vt

  beforeEach(function () {
    Vue.use(VueTouch)

    vt = createFromTemplate(`
    <v-touch
    @tap="cb"
    @swipe="cb"
    />
  `)
  })

  it('enable/disable', () => {
    expect(isEnabled(vt, 'tap')).to.be.true
    expect(isEnabled(vt, 'swipe')).to.be.true

    vt.disable('swipe')
    expect(isDisabled(vt, 'swipe')).to.be.true
    expect(isEnabled(vt, 'tap')).to.be.true
  })

  it('toggle', () => {
    vt.toggle('tap')
    const disabled = isDisabled(vt, 'tap')

    expect(disabled).to.be.true

    vt.toggle('tap')
    const enabled = isEnabled(vt, 'tap')

    expect(enabled).to.be.true
  })

  it('enableAll / disableAll', () => {
    expect(allEnabled(vt)).to.be.true

    vt.disableAll()

    expect(allDisabled(vt)).to.be.true

    vt.enableAll()

    expect(allEnabled(vt)).to.be.true
  })

  it('isEnabled', () => {
    expect(vt.isEnabled('tap')).to.be.true

    vt.disable('tap')

    expect(vt.isEnabled('tap')).to.be.false
  })
})
