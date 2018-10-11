# vue-scroll-box

> A ScrollBox vue component, support pull-down and pull-up event.

> 简单的滚动盒子组件，支持鼠标和触摸操作，支持反馈pull-down、pull-up事件以支持下拉刷新和上拉加载。自带返回顶部按钮。
> 基于浏览器默认滚动盒子，功能简单，无复杂的设置项。

## How to use / 如何使用

### Install / 安装

```javascript
npm install vue-scroll-box
// or install from github reponsitory
npm install https://github.com/ferrinweb/vue-scroll-box.git

// or use yarn / 推荐使用 yarn
yarn add vue-scroll-box
// or install from github reponsitory
yarn add https://github.com/ferrinweb/vue-scroll-box.git
```

### Import / 引入

```javascript
// global import / 全局引入
import ScrollBox from 'vue-scroll-box'
Vue.use(ScrollBox)

// import on demand in your vue component file. / 按需引入
import ScrollBox from 'vue-scroll-box'
export default {
  components: {
    ScrollBox
  },
  ...
}
```

### Use and demo / 使用及示例
> You can ckeckout this repository and try this demo.

> 你可以直接检出 vue-scroll-box 源码到本地，查看示例。

```javascript
<template>
  <div id="app">
    <!-- You need to specify the size for scroll-box -->
    <!-- 你须要给滚动盒子设置有效的尺寸 -->
    <scroll-box class="hw100 scroll-box-test"
        ref="scrollBox"
        :enableDragDown="true"
        @pull-down="reloadList"
        :enableDragUp="true"
        @pull-up="loadMore"
    >
      <div v-if="reloaded" class="w100 grey">Reloaded!</div>
      <div class="w100 orange">1</div>
      <div class="w100 yellow">2</div>
      <div class="w100 green">3</div>
      <div class="w100 cyan">4</div>
      <div class="w100 blue">5</div>
      <div v-if="loaded" class="w100 grey">Loaded new one!</div>
    </scroll-box>
    <!-- These are some test buttons  -->
    <div class="scroll-test-buttons">
      <button @click="testScrollTop(0)">Scroll to Top</button>
      <button @click="testScrollTop(700)">Scroll to 700px</button>
      <button @click="testScrollTop('.cyan')">Scroll to cyan element</button>
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
      // Simulate async requests using setTimeout
      // 模仿异步请求
      setTimeout(() => {
        this.reloaded = true
        // when content update after pull-up or pull-down event function executed,
        // you need perform the following method:
        // 当下拉刷新或上拉加载请求完成时，需要调用滚动盒子内部方法 scrollUpdate 来刷新组件状态：
        this.$refs.scrollBox.scrollUpdate()
      }, 2000)
    },
    loadMore () {
      setTimeout(() => {
        let contentUpdate = !this.loaded
        this.loaded = true
        // contentUpdate means that the scroll content is updated or not.
        // contentUpdate only work on pull-up event.
        // 在上拉加载完成后，scrollUpdate 方法接受一个标记参数 contentUpdate，用以告知滚动盒子是否回弹回底部。
        // 当内容有更新时，期望 contentUpdate 为 true，盒子将不会回弹回底部，而是直接在加载提示区显示新内容。
        this.$refs.scrollBox.scrollUpdate(contentUpdate)
      }, 2000)
    },
    testScrollTop (target) {
      // you can use vue-scroll-box's inner method 'scrollTo'
      // to scroll the content view to some px position or element.
      // 通过滚动盒子内部方法 scrollTo，你可以方便的将内容滚动至指定的像素位置、元素。
      this.$refs.scrollBox.scrollTo(target)
    }
  }
}
</script>

<style>
  /* demo page styles, just ignore these */
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
    height: 110px;
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
```

### Slots / 插槽
名称 | 说明 | 默认值
|---|---|---|
default | 滚动盒子内容 | 无
dragDownArea | 下拉刷新提示内容区 | &lt;span class="drag-down-text"&gt;Release and reload&lt;/span&gt;
dragUpArea | 上拉加载提示内容区 | &lt;span class="drag-down-text"&gt;Release and load more&lt;/span&gt;

### Attributes / 属性
名称 | 说明 | 默认值
|---|---|---|
dragDistance | 下拉或上拉最大像素尺度，值越大越不容易触发 pull-down 及 pull-up 事件 | 150
enableDragDown | 是否启用下拉刷新特性 | false
enableDragUp | 是否启用上拉加载特性 | false
enableTopButton | 是否显示返回顶部按钮 | true

### Methods / 方法
名称 | 说明 | 参数
|---|---|---|
scrollUpdate | 更新滚动盒子状态 | contentUpdate: 标记内容是否有更新，仅在上拉加载完成时需要
scrollTo | 滚动内容至指定位置 | target：Nubmer类型为坐标，即滚动至某坐标处；String类型是为选择器，以及Dom对象类型是将滚动至指定元素处。offset: 滚动偏移量

### Events / 事件
名称 | 说明
|---|---|
pull-down | 下拉刷新操作拖动屏幕距离超过阈值，释放拖动，则抛出该事件，仅当 enableDragDown 为 true 时有效
pull-up | 上拉加载操作拖动屏幕距离超过阈值，释放拖动，则抛出该事件，仅当 enableDragUp 为 true 时有效

## Lisence
MIT Lisence.
