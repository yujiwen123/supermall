<template>
  <div class="DetailGoodsList">
    <div class="text">商品推荐</div>
    <!-- 组件复用 -->
    <goods-list :goods="recommendInfo" ref="recommend"></goods-list>
  </div>
</template>

<script>
import GoodsList from "components/content/goods/GoodsList";

export default {
  name: "DetailGoodsList",
  props: {

  },
  data() {
    return {
      recommendInfo: [],
    };
  },
  components: {
    GoodsList
  },
  methods: {

  }
};
</script>

<style scoped>
</style>
