// setup global chai methods
import { expect } from 'chai'

import Vue from 'vue/dist/vue.common'
import VueTouch from '../helpers/vue-touch'

Vue.use(VueTouch)

import {
  createFromTemplate,
  hasRecognizer, hasHandler
} from '../helpers'

describe('VueTouch.builtinEvents', () => {
  it('Add tap recognizer for tap event', () => {
    const vt = createFromTemplate(`
    <v-touch @tap="cb"></v-touch>
    `)

    expect(hasRecognizer(vt, 'tap')).to.be.true
  })

  it('Add pan recognizer with pantstart handler for panstart event', () => {
    const vt = createFromTemplate(`
    <v-touch @panstart="cb"></v-touch>
    `)

    expect(hasRecognizer(vt, 'pan')).to.be.true
    expect(hasHandler(vt, 'panstart')).to.be.true
  })
})
