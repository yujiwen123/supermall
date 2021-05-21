<template>
  <div class='toast' v-show="show">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'toast',
  data(){
    return {
      // message: '',
      // show: false
    }
  },
  props: {
    message: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  methods: {
    // show(message, duration) {
    //   this.show = true
    //   this.message = message

    //   setTimeout(() => {
    //     this.show = false
    //     this.message = ''
    //   }, duration)
    // }
  }
}
</script>

<style lang='less' scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 8px 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  transform: translate(-50%, -50%);
}
</style>
