<template>
  <div class="tabbar_item" @click='itemClick'>
    <slot v-if="isActive" name="tab_img_active"></slot>
    <slot v-else name="tab_img"></slot>
    <div :class="{active: isActive}">
      <slot name="tab_text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String
  },  
  data() {
    return {
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  },
  computed: {
    isActive() {
       return this.$route.path.indexOf(this.path)!==-1
    }
  }
}
</script>

<style>
.tabbar_item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.active {
  color: #ff667e;
}
</style>
