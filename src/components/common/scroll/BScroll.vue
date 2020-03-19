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
  data() {
    return {
    }
  },
  mounted() {
    let scroll = new BScroll(this.$refs.scroll)
  },
  components: {

  }
}
</script>
<style scoped>

</style>
