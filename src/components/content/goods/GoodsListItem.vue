<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt="ss">
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
  created() {
    console.log(this.goodsItem)
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
