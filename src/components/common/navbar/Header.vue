<template>
  <div class="header">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  
}
</script>

<style>
  .header {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    max-width: 540px;
    margin: 0 auto;
  }
  .left {
    width: 60px;
  }
  .center {
    flex: 1;
    font-size: 20px;
  }
  .right {
    width: 60px;
  }
</style>
