<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(item,id) in banner" :key="id">
      <a :href="item.link">
        <img :src="item.image" alt="s" @load="bannerLoad">
      </a>
    </swiper-slide>
    <!--点点-->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: {
    banner: Array
  },
  data() {
    return {
      swiperOption: {
        //开启循环模式
        loop: true,
        // 自动播放，间隔为3000
        autoplay: 3000,
        speed: 600,
        //阻止click冒泡。拖动Swiper时阻止click事件。
        preventClicksPropagation: true,

        //鼠标模拟手机触摸。默认为true，Swiper接受鼠标点击、拖动。
         simulateTouch: true,

        // 圆点
        pagination:'.swiper-pagination',
        // 圆点是否可以点击
        paginationClickable: true,
      },
    }
  },
  methods: {
    bannerLoad() {
      this.$emit('bannerLoad')
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style scoped>
  .swiper-container img {
    width: 100%;
  }
</style>
