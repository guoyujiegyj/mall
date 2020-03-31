<template>
  <div class="detailImage">
      <img class="imageList" 
           v-for="(item,id) in imageDetail" 
           :key="id" :src="item" 
           alt="w" 
           @load="imageLoad">
  </div>
</template>
<script>
export default {
  props: {
    imageDetail: Array
  },
  data() {
    return {
      number: 0
    }
  },
  methods: {
    // 解决图片加载慢影响scroll滚动卡死问题。
    imageLoad() {
      
      // 当加载到最后一张图片后向外触发方法。
      if(++this.number === this.imageDetail.length) {
        console.log(this.number)
        this.$emit("imageLoad")
        console.log("ok")
      }
    }
  }
}
</script>
<style scoped>
  /* .detailImage {
    height: 7000px;
  } */
  .detailImage img {
    width: 100%;
  }
</style>
