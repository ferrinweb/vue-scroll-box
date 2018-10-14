<!-- Author: ferrinweb -->
<!-- Create Time: 2018/10/11 11:42 -->
<!-- Description: vue-scroll-box-demo -->
<template>
  <div id="app">
    <scroll-box class="hw100 scroll-box-test"
        ref="scrollBox"
        :enableDragDown="true"
        @pull-down="reloadList"
        :enableDragUp="true"
        @pull-up="loadMore"
        beforeText="释放刷新"
    >
      <div v-if="reloaded" class="w100 grey">Reloaded!</div>
      <div class="w100 orange">1</div>
      <div class="w100 yellow">2</div>
      <div class="w100 green">3</div>
      <div class="w100 cyan">4</div>
      <div class="w100 blue">5</div>
      <div v-if="loaded" class="w100 grey">Loaded new one!</div>
    </scroll-box>

    <div class="scroll-test-buttons">
      <button @click="testScrollTop(0)">Scroll to Top</button>
      <button @click="testScrollTop(700)">Scroll to 700px</button>
      <button @click="testScrollTop('.cyan')">Scroll to cyan element</button>
      <button @click="disableScroll()">Disable Scroll</button>
      <button @click="enableScroll()">Enable Scroll</button>
    </div>
  </div>
</template>

<script>
import ScrollBox from './lib/scroll-box'

export default {
  name: 'App',
  components: {
    ScrollBox
  },
  data () {
    return {
      reloaded: false,
      loaded: false
    }
  },
  methods: {
    reloadList () {
      setTimeout(() => {
        this.reloaded = true
        this.$refs.scrollBox.scrollUpdate()
      }, 2000)
    },
    loadMore () {
      setTimeout(() => {
        let contentUpdate = !this.loaded
        this.loaded = true
        this.$refs.scrollBox.scrollUpdate(contentUpdate)
      }, 2000)
    },
    testScrollTop (target) {
      this.$refs.scrollBox.scrollTo(target)
    },
    disableScroll () {
      this.$refs.scrollBox.disableScroll()
    },
    enableScroll () {
      this.$refs.scrollBox.enableScroll()
    }
  }
}
</script>

<style>
  html, body, #app {
    margin: 0;
    width: 100%;
    height: 100%;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .scroll-box-test {
    color: white;
    font-size: 42px;
  }

  .hw100 {
    width: 100%;
    height: 100%;
  }

  .w100 {
    font-weight: lighter;
    text-align: center;
    line-height: 2;
    width: 100%;
    height: 500px;
  }

  .grey {
    background-color: #9e9e9e;
  }

  .orange {
    background-color: #ff9800;
  }

  .yellow {
    background-color: #fb0;
  }

  .green {
    background-color: #84af4c;
  }

  .cyan {
    background-color: #00bcd4;
  }

  .blue {
    background-color: #2196f3;
  }

  .scroll-test-buttons {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 200px;
    height: 190px;
    z-index: 3;
  }

  .scroll-test-buttons button {
    background-color: aliceblue;
    border: darkslategrey solid 1px;
    padding: 5px 10px;
    border-radius: 3px;
    margin: 0 0 10px 10px;
  }
</style>
