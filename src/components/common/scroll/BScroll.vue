<template>
  <div class="wrapper" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    probeType: Number,
    // pullUpload为true时，上拉加载更多才会监听
    pullUpload: Boolean
  },
  data() {
    return {
      scroll: {}
    }
  },
  mounted() {
    // 实例化better-scroll
    this.scroll = new BScroll(this.$refs.scroll, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpload
    })

      // 监听滚动的位置,配合probeType属性。 probeType为0时不监听。
    this.scroll.on('scroll',(position) => {
      // 向父及分发事件，将滚动的位置传过去。
      this.$emit('scrollContent',position)
    })

    // 上拉加载更多
    this.scroll.on('pullingUp',()=>{
      this.$emit('pullUp')
    })

  },

  methods: {
    // better-scroll的scrollTo方法，
    backTop(x, y, time=500) {
      this.scroll.scrollTo(x, y, time)
    },
    //上拉加载更多默认只触发一次，如要触发多次，需要再每次触发后调用scroll的finishPullUp函数
    finishPullUp() {
      this.scroll.finishPullUp()
    },

    // 刷新，重新计算better-scroll的高度
    refresh() {
      this.scroll.refresh()
      console.log('aaaaaaaaaaaaaass')
    }
    
  },
  components: {

  }
}
</script>
<style scoped>

</style>
