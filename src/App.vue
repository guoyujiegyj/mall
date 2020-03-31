<template>
  <div>
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="tab_img" src="~assets/img/home.png" alt="s">
        <img slot="tab_img_active" src="~assets/img/home_active.png" alt="s">
        <span slot="tab_text">首页</span>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="tab_img" src="~assets/img/cart.png" alt="s">
        <img slot="tab_img_active" src="~assets/img/cart_active.png" alt="s">
        <span slot="tab_text">购物车</span>
      </tab-bar-item>
      <tab-bar-item path="/classify">
        <img slot="tab_img" src="~assets/img/classify.png" alt="s">
        <img slot="tab_img_active" src="~assets/img/classify_active.png" alt="s">
        <span slot="tab_text">分类</span>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="tab_img" src="~assets/img/mine.png" alt="s">
        <img slot="tab_img_active" src="~assets/img/mine_active.png" alt="s">
        <span slot="tab_text">我的</span>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

export default {
  name: 'App',
  data: {
    isActive: true
  },
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
@import 'assets/css/base.css';
.tabbar_item img{
  display: block;
  margin-top: 4px; 
  width: 24px;
} 
</style>
