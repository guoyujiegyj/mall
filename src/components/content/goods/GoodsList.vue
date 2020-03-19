<template>
  <div>
    <goods-list-item v-for="(item, id) in goods" :key="id" :goodsItem="item">
      
    </goods-list-item>
  </div>
</template>
<script>
import GoodsListItem from 'components/content/goods/GoodsListItem'
export default {
  props: {
    goods: Array
  },
  data() {
    return {

    }
  },
  components: {
    GoodsListItem
  }
}
</script>

<style>

</style>
