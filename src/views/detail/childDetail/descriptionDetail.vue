<template>
<div class="desc">
  <!--商品信息-->
  <div class="info-title">{{goods.desc}}</div>
  <div class="info-price clearfix">
    <div class="new-price fl">{{goods.newPrice}}</div>
    <div class="old-price fl" v-if="goods.oldPrice">{{goods.oldPrice}}</div>
    <div class="discount fl" v-if="goods.discount">{{goods.discount}}</div>
  </div>
  <div class="info-other">
    <!-- <span v-if="goods.columns">{{goods.columns[0]}}</span>
    <span>{{goods.columns[1]}}</span>
    <span>{{goods.columns[2]}}</span> -->
    <span v-for="(item, id) in goods.columns" :key="id">{{item}}</span>
  </div>
  <!--商铺信息-->
</div>
</template>
<script>
export default {
  props: {
    goods: Object
  },
  data() {
    return {

    }
  }
}
</script>
<style scoped>
  .desc {
    padding: 0 6px;
  }
  .info-title {
    font-size: 15px;
    font-weight: 600;
  }
  .info-price {
    width: 100%;
    margin-top: 8px;
  }
  .new-price {
    font-size: 18px;
    color: #FF6B82;
    font-weight: 600;
  }
  .old-price {
    font-size: 10px;
    margin: 6px 30px 0;
    text-decoration: line-through;
  }
  .discount {
    padding: 2px 7px;
    background: #ff6b82;
    border-radius: 15px;
    color: #fff;
    font-size: 7px;
  }
  .info-other {
    display: flex;
    margin-top: 8px;
    font-size: 8px;
    color: #aaaaa9;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
  }
  .info-other span {
    flex: 1;
    text-align: center;
  }
  .info-other span:first-child {
    text-align: left;
  }
  .info-other span:last-child {
    text-align: right;
  }
</style>
