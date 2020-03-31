<template>
  <div class="goods-item" @click="toItem(goodsItem.iid)">
    <img :src="goodsItem.show.img" alt="ss" @load="imgLoad">
    <div class="goods-info">
      <p class="">{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goodsItem: Object
  },
  data() {
    return {

    }
  },
  methods: {
    // 每一张图片加载完成，都会触发。
    imgLoad() {
      // 通过bus总线向外分发事件
      this.$bus.$emit('imgLoad')
    },

    toItem(id) {
      this.$router.push('/detail/' + id)
    }
  }
}
</script>
<style scoped>
  .goods-item {
    width: 50%;
    float: left;
    padding: 3px 5px 0 5px;
    font-size: 13px;
  }
  .goods-item img {
    border-radius: 6px;
    width: 100%;
    margin-bottom: 3px;
  }
  .goods-item p {
    padding: 2px 6px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .collect {
    text-align: left;
  }
  .price {
    color: #FF6B82;
    font-weight: 600;
    text-align: right;
  }
  .collect, .price {
    display: block;
    width: 50%;
    float: left;
  }
</style>
