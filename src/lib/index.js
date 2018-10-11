import scrollBox from './scroll-box.vue'

const ScrollBox = {
  install: function (Vue) {
    Vue.component(scrollBox.name, scrollBox)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ScrollBox)
}

export default ScrollBox
