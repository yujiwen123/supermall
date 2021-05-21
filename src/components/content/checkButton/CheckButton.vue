<template>
  <div class='check-button' :class="{check: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'check-button',
  data(){
    return {}
  },
  props:{
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  methods: {}
}
</script>

<style lang='less' scoped>
.check-button {
  background-color: #fff;
  border: 2px solid #aaa;
}
.check {
  background-color: #f00;
  border-color: #f00;
}
</style>
