<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style>
  .tabbar {
    display: flex;
    position: fixed;
    width: 100%;
    height: 49px;
    background-color: #f6f6f6;
    font-size: 14px;
    box-shadow: 0 -2px 2px rgba(0, 0, 0, .1);
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    max-width: 540px;
  }


</style>
