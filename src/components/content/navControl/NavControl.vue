<template>
  <div class="nav-control">
    <div class="nav-control-item" 
        :class="{active: currentIndex==id}" 
        v-for="(item, id) in titles" 
        :key="id"
        @click="navClick(id)"
    >
      <span class="text">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: Array
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    navClick(id) {
      console.log('click')
      this.currentIndex = id
      // 向外分发事件
      this.$emit('tabClick', id)
    }
  }
}
</script>
<style>
  .active span{
    border-bottom: 2px solid #FF6B82;
  }
  .nav-control {
    display: flex;
    height: 40px;
    line-height: 40px;
    background: #fff;
    text-align: center;
    /* position: sticky;
    position: -webkit-sticky; 
    top: 44px; */
  }
  .nav-control-item {
    flex: 1;
  }
  .nav-control-item .text {
    padding: 6px;
  }
</style>
