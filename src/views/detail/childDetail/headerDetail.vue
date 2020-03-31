<template>
  <nav-header>
    <div slot="left" @click="backHome">
      <img src="~assets/img/fanhui.png" alt="">
    </div>
    <div slot="center" class="center">
      <span :class="{active: currentIndex==id}" 
            v-for="(item, id) in title" 
            :key="id" calss="navTab" 
            @click="tabClick(id)">
        {{item}}
      </span>
    </div>
  </nav-header>
</template>
<script>
import NavHeader from 'components/common/navbar/Header.vue'
export default {
  data() {
    return {
      title: ['商品', '参数', '评价', '参数'],
      currentIndex: 0
    }
  },
  components: {
    NavHeader
  },
  methods: {
    tabClick(id) {
      console.log('clici')
      
      // 向父页面发送事件，传去id.
      this.$emit('tabClick', id)
      this.currentIndex = id
    },
    backHome() {
      this.$router.push('/home')
    }
  }
}
</script>
<style scoped>
  .active {
    color: #FF6B82;
  }
  .left img {
    width:18px;
  }
  .center {
    display: flex;
    font-size: 14px;
  }
  .center span {
    flex: 1;
    text-align: center;
  }
  .navTab {
    flex: 1;
  }
</style>
