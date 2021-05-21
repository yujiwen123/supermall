<template>
  <div class='recommend'>
    <div v-for="(item,key) in recommends" :key="key" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  data(){
    return {}
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {},
  methods: {}
}
</script>

<style scoped>
.recommend{
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;

  padding: 15px 0 30px;
  border-bottom: 10px solid #eee;
}
.recommend-item{
  flex: 1;
}
.recommend-item img{
  width: 22vw;
  margin-bottom: 1vh;
}
</style>
