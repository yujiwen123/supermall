<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <keep-alive exclude="Detail">
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <main-tap-bar></main-tap-bar>
  </div>
</template>

<script>
import MainTapBar from "./components/content/MainTabBar/MainTabBar";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    MainTapBar
  },
  methods: {}
};
</script>

<style scoped>
@import "./assets/css/base.css";
</style>
