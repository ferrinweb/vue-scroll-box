import ScrollBox from './scroll-box.vue'

const scrollBox = {
  install: function (Vue) {
    Vue.component(ScrollBox.name, ScrollBox)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(scrollBox)
}

export default scrollBox
