<template>
  <div class="shop-info">
    <div class="shopLogo">
      <img :src="shopInfo.logo" alt="">
    </div>
    <div class="shopDesc">
      <div class="left">
        <div class="th">
          <p class="fans">
          {{shopInfo.fans}}万
          </p>
          <span>总销量</span>
        </div>
        <div class="td">
          <p class="fans">
          {{shopInfo.goodsCount}}万
          </p>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="right">
        <p class="desc" v-for="(item, id) in shopInfo.score" :key="id">
          <span>{{item.name}}</span>
          <span>{{item.score}}</span>
          <span class="score" :class="{'isBetter': item.isBetter}">{{item.isBetter ? '高' : '低'}}</span>
        </p>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  props: {
    shopInfo: Object
  },
  data() {
    return {

    }
  }
}
</script>
<style>
  .shopDesc  {
    display: flex;
  }
  .shopDesc>div {
    flex: 1;
  }
  .shopDesc>.left {
    display: flex;
    border-right: 1px solid #ccc;
  }
  .shopDesc>.left>div {
    flex: 1;
    text-align: center;
  }
  .shopLogo img {
    width: 50px;
  }
  .isBetter {
    background: green!important;
  }
  .shopDesc>.right {
    text-align: left;
    margin-left: 20px;
  }
  .shopDesc>.right span {
    margin: 0 5px;
  }
  .shopDesc>.right .score {
    border-radius: 2px;
    background: red;
    color:#fff;
  }
</style>
