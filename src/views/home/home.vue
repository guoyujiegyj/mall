<template>
  <div class="home">
    <!--header-->
    <nav-bar class="home_nav">
      <div slot="center">蘑菇秀</div>
    </nav-bar>
    <!--nav-control:解决吸付问题-->
    <nav-control class="navTab2" 
                 :titles="['流行','大卖', '新款']" 
                 @tabClick = tabClick 
                 v-show="isTabFixed"
                 ref="navControl2"
                 >
    </nav-control>
    <scroll class="content" ref="scroll" 
            :pullUpload='true' 
            :probe-type='3' 
            @scrollContent=scrollContent
            @pullUp=loadMore
            >
      <!--轮播-->
      <swiper :banner="banner" @bannerLoad=bannerLoad></swiper>
      <!---->
      <recommend :recommend="recommend"></recommend>
      <nav-control :titles="['流行','大卖', '新款']" @tabClick = tabClick ref="navControl1"></nav-control>
      <goods-list :goods="activeTab"></goods-list>
    </scroll>
    <back-top @click.native = backTop v-show="scrollPosition"></back-top>
  </div>  
</template>

<script>
import NavBar from 'components/common/navbar/Header'
import Swiper from 'views/home/childHome/Swiper'
import Recommend from 'views/home/childHome/Recommend'
import Feature from 'views/home/childHome/Feature'
import NavControl from 'components/content/navControl/NavControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/BScroll'
// import BackTop from 'components/content/backTop/BackTop'
import {debounce} from 'common/utils'

import {getHomeBanner, getHomeGoods} from 'network/home'
import { backTop } from 'common/mixin.js'

export default {
  mixins: [backTop],
  data() {
    return {
      banner: [],
      recommend: [],
      // 当前tab栏默认为流行
      currentTab: 'pop',
      // //控制返回顶部按钮的显示隐藏
      // scrollPosition: false,
      // banner图片加载
      isBannerImgLoad: false,
      // nav的吸附效果
      navScrollTop: 0,
      isTabFixed: false,
      // 当离开首页时，记录位置
      leaveHeight: 0,
      goods: {
        'pop': {page: 0, list: []},
        'sell': {page: 0, list: []},
        'new': {page: 0, list: []}
      }
    }
  },
  created() {
    // 调用请求banner数据的方法。
    this.getHomeBanner()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    // 调用防抖函数
    const refresh = debounce(this.$refs.scroll.refresh, 150)
    // 监听goodsItem的图片加载完成
    this.$bus.$on('imgLoad',()=>{
      refresh()
    })
  },
  computed: {
    // 为商品组件传递的数据。
    activeTab() {
      return this.goods[this.currentTab].list
    }
  },
  destroyed() {
    this.$refs.scroll.backTop(0, this.leaveHeight, 0)
  },
  activated() {
    // 保存离开首页时的位置
    this.leaveHeight = this.$refs.scroll.getScrollHeight()
  },
  methods: {
    
    // nav的tab点击时，改变currentTab
    tabClick(id) {
      //this.currentTab = this.goods[id]
      switch(id) {
        case 0:
          this.currentTab = 'pop'
          break
        case 1:
          this.currentTab = 'sell'
          break
        case 2:
          this.currentTab = 'new'
          break
      }
      this.$refs.navControl1.currentIndex=id
      this.$refs.navControl2.currentIndex=id
    },
    // // 点击时返回顶部
    // backTop() {
    //   this.$refs.scroll.backTop(0, 0, 800)
    // },
    // 获取滚动的位置
    scrollContent(position) {
      let positionY = position.y
      // 返回顶部按钮
      this.scrollPosition = -positionY>600

      // navtab的吸附效果。
      if(-positionY >= this.navScrollTop) {
        this.isTabFixed = true
      } else {
        this.isTabFixed = false
      }
    },
    // 上拉加载更多
    loadMore() {
      this.getHomeGoods(this.currentTab)
      this.$refs.scroll.finishPullUp()
      // refresh方法为了重新计算scroll的高度。
      // 因为如果图片加载太慢，则scroll计算的高度不准确，小于实际高度，导致bug,
      this.$refs.scroll.scroll.refresh()
    },
    // 请求banner数据
    getHomeBanner() {
      // 内层的这个方法是从home.js导入的方法。
      getHomeBanner().then(res=>{
        this.banner = res.data.data.banner.list
        this.recommend = res.data.data.recommend.list
      })
    },

    // 请求商品展示的数据
    getHomeGoods(type) {
      // 调用此方法，说明在请求数据，所以定义page变量，
      const page = this.goods[type].page + 1
      // 调用home.js里封装的方法
      getHomeGoods(type, page).then(res=>{
        // 将请求的数据存入对应type的list
        const resList = res.data.data.list
        //this.goods[type].list = this.goods[type].list.concat(resList)
        this.goods[type].list.push(...resList)
        this.goods[type].page++
      })
    },

    //$el: 获取组件里的根元素
    // 当banner的图片加载完成后，计算navTab距顶部的高度。
    bannerLoad() {
      if(!this.isBannerImgLoad) {
        this.navScrollTop = this.$refs.navControl1.$el.offsetTop
        this.isBannerImgLoad = true
      }
    }
  },
  components: {
    NavBar,
    Swiper,
    Recommend,
    Feature,
    NavControl,
    GoodsList,
    Scroll
  }
}
</script>

<style scoped>
  .home {
    position: relative; 
    /* padding-top: 44px; */
    height: 100vh; 
  }
  .home_nav {
    /* 使用better-scroll，没必要让header固定，因为bscroll的滚动不影响header。 */
    /* position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0; */
    background: #FF6B82;
    color: #fff;
    font-size: 18px;
  }
  /* 
  *
  *better-scroll的难点之一就是content的高度如何计算
  content即时外面的包裹层wrapper，他的高度必须设置为屏幕除去header和tabbar的高度
  方法一：定位
  方法二：使用css3的calc()属性。
  */ 
  /**方法1 */
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;  
  } 
  /**方法2 */
  /* .content {
    margin-top: 44px;
    height: calc(100% - 93px);
  } */

  .navTab2 {
    position: relative;
    z-index: 11;
  }
</style>