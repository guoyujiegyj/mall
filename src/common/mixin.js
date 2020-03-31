import BackTop from 'components/content/backTop/BackTop'

export const backTop = {
  data() {
    return {
      //控制返回顶部按钮的显示隐藏
      scrollPosition: false,
    }
  },
  methods: {
    backTop() {
      this.$refs.scroll.backTop(0, 0, 800)
    },
  },
  components: {
    BackTop
  }
}