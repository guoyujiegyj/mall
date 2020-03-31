<template>
  <div class="btnBar">
    <div class="cart" @click="addCart">加入购物车</div>
    <div class="buy">购买</div>
  </div>
</template>
<script>
export default {
  props: {
      
  },
  data() {
    return {

    }
  },
  methods: {
    addCart() {
      this.$emit('addCart')
    }
  }  
}
</script>
<style scoped>
  .btnBar {
    position: fixed;
    display: flex;
    height: 49px;
    line-height: 49px;
    bottom: 0;
    left: 50%;
    right: 0;
    z-index: 100;
    max-width: 540px;
    transform: translateX(-50%);

  }
  .btnBar>div {
    flex: 1;
    text-align: center;
    color: #fff;
  }
  .btnBar>.cart {
    background: yellow;
  }
  .btnBar>.buy {
    background: #FF6B82;
  }
</style>
