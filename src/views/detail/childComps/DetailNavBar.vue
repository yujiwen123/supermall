<template>
  <div>
    <nav-bar>
      <template v-slot:left>
        <div class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt />
        </div>
      </template>
      <template v-slot:center>
        <div slot="center" class="title">
          <div
            class="title-item"
            v-for="(item, index) in titles"
            :key="index"
            :class="{active: currenrIndex==index}"
            @click="titleClick(index)"
          >{{item}}</div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currenrIndex: 0
    };
  },
  components: {
    NavBar
  },
  methods: {
    titleClick(index) {
      this.currenrIndex = index;
    },
    backClick() {
      this.$router.go(-1)
    }
  }
};
</script>

<style scoped>

.title {
  display: flex;
  text-align: center;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}

.back img{
  margin-top: 11px;
}
</style>
