<template>
  <div class="goods">
    <goods-list-item v-for="(item, key) in goods" :key="key" :goods-item="item"></goods-list-item>

    </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem"

export default {
  name: "goods",
  data() {
    return {};
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodsListItem
  },
  methods: {}
};
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  overflow: hidden;
}
</style>
