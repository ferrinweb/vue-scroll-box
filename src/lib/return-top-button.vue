<!-- Author: ferrinweb -->
<!-- Create Time: 2018/10/8 13:53 -->
<!-- Description: return-top-button -->
<!-- How to use?
import as component, and then:
<return-top-button
    target=".scroll-box"  -> optional, default: button's parentNode, means that which node's scroll event should be listen
    :scrollTop="200"      -> optional, default: 300, means that how far the node scroll and then this button will show
    :scrollTo="50"        -> optional, default: 0, means that where the node should scroll to when click this button
></return-top-button>
-->
<template>
  <a href="javascript:" class="return-top"
      ref="returnTopButton"
      :class="{'active': showReturnTopBtn}"
      @click="returnTop"
  ></a>
</template>

<script>
export default {
  name: 'return-top-button',
  props: {
    target: String,
    scrollTop: {
      type: Number,
      default: 300
    },
    scrollTo: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      showReturnTopBtn: false,
      scrollBox: null
    }
  },
  methods: {
    toggleReturnTopBtn () {
      this.showReturnTopBtn = this.scrollBox.scrollTop > this.scrollTop
    },
    returnTop () {
      this.scrollBox.scroll({ top: this.scrollTo, behavior: 'smooth' })
    }
  },
  mounted () {
    this.scrollBox = this.target ? document.querySelector(this.target) : this.$refs.returnTopButton.parentNode
    this.scrollBox.addEventListener('scroll', this.toggleReturnTopBtn)
  }
}
</script>

<style scoped>
  .return-top {
    position: fixed;
    display: block;
    bottom: 20px;
    right: 20px;
    opacity: 0;
    border-radius: 50%;
    width: 42px;
    height: 42px;
    pointer-events: none;
    transform: scale(0);
    transition: .2s;
    background: #272727 url(data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjUgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjU2LjI1IiBoZWlnaHQ9IjI1NiI+PHBhdGggZD0iTTU1My41NjQgOTc2LjAyN1YxNDguMzQzbDM5OS40NiAzOTkuNDM2YzE2LjI0MiAxNi4yNDEgNDIuNTUzIDE2LjI0MSA1OC43OTQgMCAxNi4yNDItMTYuMjQyIDE2LjI0Mi00Mi41NTMgMC01OC43OTRMNTQxLjQwNyAxOC42Yy0zLjg2MS0zLjg2Ni04LjQ5My02Ljk0My0xMy42MjQtOS4wNTYtLjIwNi0uMDg1LS40Mi0uMTEzLS42MjYtLjE5NS00LjcxLTEuODUzLTkuODAyLTIuOTU0LTE1LjE3MS0yLjk1NHMtMTAuNDU5IDEuMTAxLTE1LjE3MSAyLjk1NGMtLjIwOC4wODEtLjQyLjExLS42MjYuMTk1LTUuMTMxIDIuMTEzLTkuNzYzIDUuMTkxLTEzLjYyNCA5LjA1NkwxMi4xODEgNDg4Ljk4NUM0LjA2IDQ5Ny4xMDYgMCA1MDcuNzQ0IDAgNTE4LjM4MnM0LjA2IDIxLjI3NiAxMi4xODEgMjkuMzk3YzE2LjI0MiAxNi4yNDEgNDIuNTUzIDE2LjI0MSA1OC43OTQgMGwzOTkuNDMzLTM5OS40MzN2ODI3LjY4MWMwIDIyLjk2OCAxOC42MjQgNDEuNTc4IDQxLjU3OCA0MS41NzhzNDEuNTc4LTE4LjYxIDQxLjU3OC00MS41Nzh6IiBmaWxsPSIjZmZmIi8+PC9zdmc+) no-repeat center;
    background-size: 50%;
    z-index: 10;
  }
  .return-top.active{
    opacity: 1;
    transform: scale(1);
    pointer-events: auto;
  }
</style>
