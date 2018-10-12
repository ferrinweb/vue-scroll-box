<!-- Author: ferrinweb -->
<!-- Create Time: 2018/10/9 11:32 -->
<!-- Description: scroll-box -->
<!-- How to use?
import as component and then:
<scroll-box class="hw100"
    ref="scrollBox"
    :enableDragDown="true"
    @pull-down="reloadList"
    :enableDragUp="true"
    @pull-up="loadMore"
>
  <div class="w100 blue"></div>
  <div class="w100 red"></div>
  <div class="w100 green"></div>
  <div class="w100 pink"></div>
  <div class="w100 orange"></div>
</scroll-box>
When the reloadList or loadMore method in the demo above is executed,
you should run 'this.$refs.scrollInstance.scrollUpdate()' to update the scroll-instance's view.
-->
<template>
  <div class="scroll-box" ref="scrollBox"
    :class="{'scroll-lock': scrollLockByUser || scrollLock}"
    @scroll="_boxScrolling"
    @touchmove="_startTouchDrag($event)"
    @touchstart="_markDragStart($event)"
    @touchend="_markDragEnd"
    @mousemove="_startTouchDrag($event)"
    @mousedown="_markDragStart($event)"
    @mouseup="_markDragEnd"
    @mouseleave="_markDragEnd"
  >
    <div class="before"
        v-if="enableDragDown"
        :style="beforeStyle"
        :class="{'release-and-trigger': dragDownDistance > triggerDistance, 'holding before-holding': reloading}"
    ><slot name="dragDownArea"><span class="drag-down-text">Release and reload</span></slot></div>
    <div class="scroll-content-wrapper"
        ref="scrollContent"
        :class="{'holding': reloading || loading, 'draging': draging && (dragDownDistance || dragUpDistance)}"
    >
      <slot></slot>
    </div>
    <div class="after"
        v-if="enableDragUp"
        :style="afterStyle"
        :class="{'release-and-trigger': dragUpDistance > triggerDistance, 'holding after-holding': loading}"
    ><slot name="dragUpArea"><span class="drag-up-text">Release and load more</span></slot></div>
    <return-top-button v-if="enableTopButton"></return-top-button>
  </div>
</template>

<script>
import returnTopButton from './return-top-button'
export default {
  name: 'scroll-box',
  components: {
    returnTopButton
  },
  props: {
    dragDistance: {
      type: Number,
      default: 150
    },
    enableDragDown: {
      type: Boolean,
      default: false
    },
    enableDragUp: {
      type: Boolean,
      default: false
    },
    enableTopButton: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      scrollBox: null,
      scrollBoxHeight: 0,
      scrollContent: null,
      scrollContentHeight: 0,
      y: 0,
      currentY: null,
      draging: false,
      dragUpDistance: 0,
      dragDownDistance: 0,
      dragDownTrigger: false,
      loading: false,
      reloading: false,
      transforming: false,
      scrollLock: false,
      scrollLockByUser: false
    }
  },
  methods: {
    _boxScrolling () {
      if (this.scrollLock) return
      let y = this.scrollBox.scrollTop
      if (this.enableDragDown || this.enableDragUp) this.y = y
      this.$emit('box-scroll', {y})
    },
    _markDragStart (e) {
      if (this.reloading || this.loading) return
      e.type === 'mousedown' && e.preventDefault()
      // 仅当在滚动边界处赋值拖动起始点
      if (!this.enableDragDown && !this.enableDragUp) return
      if (!this.isBottom && !this.isTop) return
      this.draging = true
      this.currentY = e.type === 'touchstart' ? e.touches[0].pageY : e.pageY
      this.scrollContent.style.transition = 'unset'
    },
    _markDragEnd () {
      this.draging = false
      this.scrollLock = false
      if (this.reloading || this.loading) return
      this.currentY = null
      if (!this.dragDownDistance && !this.dragUpDistance) return
      if (this.dragDownDistance >= this.triggerDistance) {
        // 触发下拉刷新
        // console.info('触发下拉刷新')
        setTimeout(() => {
          this.$emit('pull-down')
        }, 200)
        this.reloading = true
      }
      if (this.dragUpDistance >= this.triggerDistance) {
        // 触发上拉加载更多
        // console.info('触发上拉加载更多')
        setTimeout(() => {
          this.$emit('pull-up')
        }, 200)
        this.loading = true
      }
      requestAnimationFrame(() => {
        if (!this.reloading && !this.loading) {
          this.scrollUpdate()
        } else {
          this._reboundDrag()
        }
      })
    },
    _startTouchDrag (e) {
      if (this.reloading || this.loading) return
      // 仅当滚动盒子处于顶部或底部时，可触发拖拽动作
      if (!this.isBottom && !this.isTop) return
      e.type === 'mousemove' && e.preventDefault()
      if (this.currentY !== null) {
        // 判断拖动方向
        let pageY = e.type === 'touchmove' ? e.touches[0].pageY : e.pageY
        let direction = (pageY - this.currentY)
        // 减小拖距，增强体验
        direction *= this.dragDistanceRatio
        // 坐标变化为正值，表示为下拉操作
        direction > 0 && this.enableDragDown && this.isTop && this._dragDown(direction)
        // 坐标变化为负值，表示为上拉操作
        direction < 0 && this.enableDragUp && this.isBottom && this._dragUp(direction)
      }
    },
    _doTransform (y) {
      if (this.transforming) return
      this.transforming = true
      requestAnimationFrame(() => {
        this.scrollContent.style.transform = 'translateY(' + y + 'px)'
        this.transforming = false
      })
    },
    _dragDown (distance) {
      this.scrollLock = true
      this.dragDownDistance = distance > this.dragDistance ? this.dragDistance : distance
      this._doTransform(this.dragDownDistance)
    },
    _dragUp (distance) {
      this.scrollLock = true
      this.dragUpDistance = distance < -this.dragDistance ? this.dragDistance : -distance
      this._doTransform(-this.dragUpDistance)
    },
    // 下拉刷新、上拉加载事件最终被触发后的回弹
    _reboundDrag () {
      this.scrollContent.style.transition = 'transform .2s cubic-bezier(.11,.49,.61,.99)'
      let reboundY = this.halfDistance
      if (this.dragDownDistance) {
        this.dragDownDistance = reboundY
        this.scrollContent.style.transform = 'translateY(' + reboundY + 'px)'
      }
      if (this.dragUpDistance) {
        this.dragUpDistance = reboundY
        this.scrollContent.style.transform = 'translateY(' + -reboundY + 'px)'
      }
    },
    disableScroll () {
      this.scrollLockByUser = true
    },
    enableScroll () {
      this.scrollLockByUser = false
    },
    // 下拉刷新或上拉加载更多后须执行滚动盒子实例的 scrollUpdate 方法更新状态
    // this.$refs.scrollInstance.scrollUpdate()
    scrollUpdate (contentUpdate) {
      if (this.loading) {
        contentUpdate && this.$nextTick(() => {
          this.scrollContent.style.transition = 'unset'
          this.scrollContent.style.transform = ''
          this.scrollBox.scroll({top: this.y + this.halfDistance})
        })
        this.loading = false
      }
      this.$nextTick(() => {
        this.scrollContentHeight = this.scrollContent.clientHeight
      })
      this.reloading = false
      this.dragDownDistance = 0
      this.dragUpDistance = 0
      this.scrollContent.style.transition = ''
      this.scrollContent.style.transform = ''
    },
    scrollTo (top, offset) {
      let type = typeof top
      let y = 0
      switch (type) {
        case 'number':
          y = top
          break
        case 'string':
          const element = this.scrollContent.querySelector(top)
          y = element ? element.offsetTop : this.y
          break
        case 'object':
          y = top instanceof HTMLElement ? top.offsetTop : this.y
          break
        default:
          y = this.y
      }
      this.scrollBox.scroll({top: y - (offset || 0), behavior: 'smooth'})
    }
  },
  computed: {
    dragDistanceRatio () {
      return this.dragDistance / this.scrollBoxHeight * 1.618
    },
    halfDistance () {
      return this.dragDistance / 2
    },
    isTop () {
      return this.y === 0
    },
    isBottom () {
      return this.y + this.scrollBoxHeight === this.scrollContentHeight
    },
    triggerDistance () {
      return this.dragDistance * 0.618
    },
    beforeStyle () {
      const styles = []
      if (this.dragDownDistance) {
        styles.push('transition: unset')
        styles.push('height:' + this.dragDownDistance + 'px')
      }
      return styles.join(';') + ';'
    },
    afterStyle () {
      const styles = []
      if (this.dragUpDistance) {
        styles.push('transition: unset')
        styles.push('height:' + this.dragUpDistance + 'px')
      }
      return styles.join(';') + ';'
    }
  },
  watch: {
  },
  mounted () {
    this.scrollBox = this.$refs.scrollBox
    this.scrollBoxHeight = this.scrollBox.clientHeight
    this.scrollContent = this.$refs.scrollContent
    this.scrollContentHeight = this.scrollContent.clientHeight
    // todo 窗口尺寸变化时，应该重新计算滚动盒子高度
    // todo 但是无法注销事件函数
    window.addEventListener('resize', () => {
      this.$nextTick(() => {
        this.scrollBoxHeight = this.scrollBox.clientHeight
      })
    })
  }
}
</script>

<style scoped>
  .scroll-box{
    overflow: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  .scroll-box.scroll-lock{
    overflow-y: hidden;
  }
  .scroll-content-wrapper{
    width: 100%;
    min-height: 100%;
    height: auto;
    overflow: hidden;
    will-change: transform;
    transform: translateY(0);
    transition: transform .3s cubic-bezier(.11,.49,.61,.99);
    z-index: 2;
  }
  .scroll-content-wrapper.draging > * {
    pointer-events: none;
  }
  .after, .before{
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    will-change: height;
    overflow: hidden;
    transform: translate3d(0,0,0);
    transition: height .3s cubic-bezier(.11,.49,.61,.99);
  }
  .after .drag-up-text,
  .before .drag-down-text{
    transition: opacity .3s;
    opacity: 0;
    font-size: 16px;
  }
  .after.release-and-trigger,
  .before.release-and-trigger{
    color: #4dc247;
  }
  .after.release-and-trigger .drag-up-text,
  .before.release-and-trigger .drag-down-text{
    opacity: 1;
  }
  .after.holding,
  .before.holding{
    background: url(data:image/gif;base64,R0lGODlhZABkAKIEAN7e3rq6uv///5mZmQAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBRjA4RUZDMDI3MjA2ODExODA4M0Y1OTQyMzVDRDM3MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMzE0Rjk3NDdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMzE0Rjk3MzdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDVBMTZDQjczOTIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUYwOEVGQzAyNzIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+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) no-repeat center;
    background-size: auto 30px;
  }
  .after.holding .drag-up-text,
  .before.holding .drag-down-text{
    opacity: 0;
  }
  .after{
    bottom: 0;
  }
  .before{
    top: 0;
  }
</style>
