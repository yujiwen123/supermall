<template>
  <div class='CartBottomBar'>
    <div class="check-content">
      <check-button
      @click.native="checkClick"
      :is-checked="isSelectAll"
      class="check-button"/>
      <span>全选</span>
    </div>

    <div class="price">
      合计: {{totalPrice}}元
    </div>

    <div class="calculate">
      去计算({{checkLength}})
      </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton"

export default {
  name: 'CartBottomBar',
  data(){
    return {}
  },
  components: {
    CheckButton
  },
  computed: {
    totalPrice() {
      return this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        // console.log(item)
        return preValue + item.price * item.count
      }, 0)
    },
    checkLength() {
      return this.$store.state.cartList.filter(item => item.checked).length
    },
    isSelectAll() {
      // return !(this.$store.state.cartList.filter(item => !item.checked).length)
      if(this.$store.state.cartList.length === 0) return false
      return !this.$store.state.cartList.find(item => !item.checked)
    }
  },
  methods: {
    checkClick() {
      if(this.isSelectAll) {
        // 如果全部选中，改为全部不选中
        this.$store.state.cartList.forEach(item => item.checked = false)
      }else {
        // 部分选中或全不选中，改为全部选中
        this.$store.state.cartList.forEach(item => item.checked = true)
      }
    }
  }
}
</script>

<style lang='less' scoped>
.CartBottomBar {
  height: 40px;
  background-color: #f6f6f6;
  line-height: 40px;
  display: flex;
}
.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 60px;
}
.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}
.price {
  margin-left: 20px;
  flex: 1;
}
.calculate {
  width: 90px;
  background-color: #f00;
  color: #fff;
  text-align: center;
}
</style>
