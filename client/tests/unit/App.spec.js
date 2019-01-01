import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import App from '@/App'

describe('App.vue', () => {
  it('has a name', () => {
    expect(App.name).toMatch('app')
  })
})