import ScrollBox from './scroll-box.vue'

ScrollBox.install = function (Vue) {
  Vue.component(ScrollBox.name, ScrollBox)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ScrollBox)
}

export default ScrollBox
