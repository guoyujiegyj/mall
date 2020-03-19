<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item, id) in recommend" :key="id">
      <a :href="item.link">
        <img :src="item.image" alt="s">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>
<script scoped>
export default {
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {

    }
  }
}
</script>
<style>
  .recommend {
    display: flex;
    width: 100%;
    padding-top: 10px;
    padding-bottom:20px;
    border-bottom: 6px solid #eee;
  }
  .recommend-item {
    flex: 1;
    text-align: center;
    font-size: 13px;
  }
   .recommend-item img {
     width: 63px;

   }
</style>
