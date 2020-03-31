<template>
  <div class="cont">
    <header-nav class="header" @tabClick="tabClick" ref="tabNav"></header-nav>
    <scroll class="contents" 
            ref="scroll"
            @scrollContent="scrollContent" 
            :pullUpload='true' 
            :probe-type='3' >
      <Swiper :banner="topImg" class="detailImg"></Swiper>
      <description-detail :goods="goods" ref="desc"></description-detail>
      <shop-infos :shopInfo="shopInfo" ref="shop"></shop-infos>
      <image-detail :imageDetail="imageDetail" @imageLoad = "imageLoad" ref="detail"></image-detail>
    </scroll>
    <btn-bar-detail @addCart="addCart"></btn-bar-detail>
    <back-top @click.native = backTop v-show="scrollPosition"></back-top>
  </div>
</template>
<script>
import HeaderNav from 'views/detail/childDetail/headerDetail'
import Swiper from 'views/home/childHome/Swiper'
import DescriptionDetail from 'views/detail/childDetail/descriptionDetail'
import ShopInfos from 'views/detail/childDetail/shopInfo'
import Scroll from 'components/common/scroll/BScroll'
import ImageDetail from 'views/detail/childDetail/imageDetail'
import BtnBarDetail from 'views/detail/childDetail/btnBarDetail'

import {getDetailData, Goods, ShopInfo} from 'network/detail.js'
import { backTop } from 'common/mixin.js'
export default {
  name: 'Detail',
  mixins: [ backTop ],
  data() {
    return {
      itemId: '',
      detailData: {},
      topImg: [],
      goods: {},
      shopInfo: {},
      imageDetail: [],
      tabTopY: []
    }
  },
  created() {
    this.itemId = this.$route.params.id
    // 调用详情页请求数据的方法
    getDetailData(this.itemId).then(res=>{
      // 轮播图数据
      this.topImg = res.data.result.itemInfo.topImages
      // console.log(res)
      // 商品数据
      this.detailData = res.data
      this.goods = new Goods(res.data.result.itemInfo, res.data.result.columns, res.data.result.shopInfo.services)
      // 商铺数据
      this.shopInfo = new ShopInfo(res.data.result.shopInfo)
      this.imageDetail = res.data.result.detailInfo.detailImage[0].list
      // console.log(this.imageDetail)
      console.log(this.tabTopY)
    })
  },
  methods: {
    imageLoad() {
      // console.log(this.$refs.scroll)
      this.$refs.scroll.refresh()
      this.tabTopY = []
      // 图片加载完成后，重新计算tab的每个区域offsetTop
      this.tabTopY.push(0)
      this.tabTopY.push(this.$refs.desc.$el.offsetTop)
      this.tabTopY.push(this.$refs.shop.$el.offsetTop)
      this.tabTopY.push(this.$refs.detail.$el.offsetTop)
    },
    tabClick(id) {
      console.log(this.tabTopY)
      // 调用scroll的滚动到某一位置的函数。
      this.$refs.scroll.backTop(0, -this.tabTopY[id])
    },
    scrollContent(positionY) {
      // 返回顶部按钮
      let position = positionY.y
      this.scrollPosition = -position>600

     //console.log(this.tabTopY)
      let topY = -positionY.y
      if(topY >= this.tabTopY[0] && topY <= this.tabTopY[1]) {
        this.$refs.tabNav.currentIndex = 0
      }
      if(topY > this.tabTopY[1] && topY <= this.tabTopY[2]) {
        this.$refs.tabNav.currentIndex = 2
      }
      if(topY > this.tabTopY[2] && topY <= this.tabTopY[3]) {
        this.$refs.tabNav.currentIndex = 3
      }
      if(topY > this.tabTopY[3]) {
        this.$refs.tabNav.currentIndex = 3
      }
    },
   addCart() {
     let cartInfo = {}
     cartInfo.image = this.imageDetail[0]
     cartInfo.title = this.goods.title
     cartInfo.price = this.goods.realPrice
     cartInfo.id = this.itemId
     cartInfo.count = 1
     this.$store.commit('addCart', cartInfo)
   }
  },
  components: {
    HeaderNav,
    Swiper,
    DescriptionDetail,
    ShopInfos,
    Scroll,
    ImageDetail,
    BtnBarDetail
  },
}
</script>

<style scoped>
  .header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }
  .cont {
    position: relative;
    background: #fff;
    max-width: 540px;
    height: 100vh;
    /* z-index: 1000;  */
  }
  .detailImg {
    height: 300px;
  }
  .contents {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
</style>
