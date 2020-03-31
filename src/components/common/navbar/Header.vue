<template>
  <div class="header">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
    <!-- <slot name="left"></slot>
    <slot name="center"></slot>
    <slot name="right"></slot> -->
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped>
  .header {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    max-width: 540px;
    margin: 0 auto;
    box-shadow: 0 2px 2px rgba(0,0,0,.1);
  }
  .left {
    width: 60px;
  }
  .center {
    flex: 1;
  }
  .right {
    width: 60px;
  }
</style>
