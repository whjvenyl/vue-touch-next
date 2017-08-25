/* eslint-disable import/no-mutable-exports */
import component from './component'
import { assign, config, customEvents } from './utils'

const vueTouch = { config, customEvents }

let installed = false

// Plugin API
// *********

vueTouch.install = function install (Vue, opts = {}) {
  console.log('VueTouch: trying to install')
  if (installed) {
    console.log('-- already installed')
    return
  }
  installed = true

  const name = opts.name || 'v-touch'
  Vue.component(name, assign(component, { name }))
}

vueTouch.registerCustomEvent = function registerCustomEvent (event, options = {}) {
  if (installed) {
    console.warn(`
      [vue-touch]: Custom Event '${event}' couldn't be added to vue-touch.
      Custom Events have to be registered before installing the plugin.
      `)
    return
  }
  options.event = event
  customEvents[event] = options
  component.props[`${event}Options`] = {
    type: Object,
    default () { return {} }
  }
}

vueTouch.component = component

export let Vue

export default vueTouch
