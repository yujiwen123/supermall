<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { debounce } from "common/utils";

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad, // 上拉加载更多
      observeDOM: true
    });

    // 2.监听滚动的位置
    this.scroll.on("scroll", position => {
      this.$emit("scroll", position);
    });

    // 监听上拉事件
    // 加入了防抖函数，防止频繁上拉
    this.scroll.on(
      "pullingUp",
      debounce(() => {
        this.$emit("pullingUp");
      }, 1000)
    );

    // this.scroll.scrollto(x, y)
  },
  components: {},
  methods: {
    scrollTo(x, y, time = 1000) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    }
  }
};
</script>

<style scoped>
</style>
