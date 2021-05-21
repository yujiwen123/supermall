<template>
  <div class="cartList">
    <scroll class="content" ref="Scroll" :probe-type="3" :pull-up-load="true">
      <cart-list-item
      v-for="(item, index) in $store.state.cartList"
      :key="index"
      :product="item">
      </cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

import CartListItem from "./CartListItem"

export default {
  name: "cartList",
  data() {
    return {};
  },
  components: {
    Scroll,
    CartListItem
  },
  methods: {},
  activated() {
    this.$refs.Scroll.refresh()
  }
};
</script>

<style lang='less' scoped>
.cartList {
  height: calc(100% - 44px - 49px - 40px);
}
.content {
  height: 100%;
  overflow: hidden;
}
</style>
