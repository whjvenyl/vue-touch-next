
// setup global chai methods
import { expect } from 'chai'

import Vue from 'vue/dist/vue.common'
import VueTouch from '../helpers/vue-touch'

import { createFromTemplate, createInstanceFromTemplate } from '../helpers/index.js'

describe('VueTouch.index', () => {
  beforeEach(() => {
    Vue.use(VueTouch)
  })

  it('Rendering without props renders as div', () => {
    const i = createInstanceFromTemplate(`
      <v-touch></v-touch>
      `)
    const vt = i.$children[0]

    expect(vt.$el.tagName).to.equal('DIV')
  })

  it('Tag prop renders as span element', () => {
    const vt = createFromTemplate(`
      <v-touch tag="span" />
    `)

    expect(vt.$el.tagName).to.equal('SPAN')
  })
})
