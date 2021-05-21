<template>
  <div class="Detail">
    <detail-nav-bar class="DttailNavBar"></detail-nav-bar>
    <scroll
      class="content"
      :pullUpLoad="true"
      ref="detailscroll"
      :probe-type="3"
      @scroll="contentScroll"
    >

      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo" ref="param"></detail-param-info>
      <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>

      <div class="detail-goods-list">
        <div class="text">商品推荐</div>
        <!-- 组件复用 -->
        <goods-list :goods="recommendInfo" ref="recommend"></goods-list>
      </div>
    </scroll>
    <detail-bot-bar @addCart="addToCart"></detail-bot-bar>
    <back-top @click="backClick" v-show="isShowBackTop"></back-top>
    <toast :message="message" :show="show"></toast>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import DetailBotBar from "./childComps/DetailBotBar.vue";

import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";
import GoodsList from "components/content/goods/GoodsList";
import Toast from "components/common/toast/Toast"

import { getDetail, Goods, Shop, Param, getRecommend } from "network/detail.js";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: [],
      recommendInfo: [],
      isShowBackTop: false,
      themeTopY: [],
      currentIndex: 0,
      itemImgLister: null,
      message: '',
      show: false
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBotBar,
    Scroll,
    BackTop,
    GoodsList,
    Toast
  },
  methods: {
    backClick() {
      this.$refs.detailscroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      // 1.判断BackTop是否显示
      this.isShowBackTop = -position.y > 1000;
    },
    addToCart() {
      // 1.获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      // 2.将商品添加到购物车
      // this.$store.cartList.push(product) // 不能直接这样操作
      // this.$store.commit('addCart', product)  // 调用mutations

      this.$store.dispatch('addCart', product).then(res => {
        this.show = true
        this.message = res

        setTimeout(() => {
          this.show = false
          this.message = ''
        }, 1500)

        // this.$toast.show(res, 1500)
      })

    }
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid;

    // console.log(this.$route.params.iid)

    // 2.根据iid请求详细数据
    getDetail(this.iid).then(res => {
      // console.log(res);
      const data = res.result;
      // 1.获取顶部的图片轮播数据
      this.topImages = data.itemInfo.topImages;

      // 2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // console.log(this.goods)

      // 3.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo);
      // console.log(this.shop);

      //4.获取商家详情图片
      this.detailInfo = data.detailInfo;

      //5.获取参数信息
      this.paramInfo = new Param(data.itemParams.info, data.itemParams.rule);

      //6.获取评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list;
      }
    });

    // 3.请求推荐数据
    getRecommend().then(res => {
      // console.log(res);
      this.recommendInfo = res.data.list;
    });
  }
};
</script>

<style lang="less" scoped>
.Detail {
  height: 100vh;
  position: relative;
  background-color: #fff;
  z-index: 15;
  .detail-goods-list {
    font-size: 14px;
    border-bottom: 4px solid #ececec;
    .text {
      text-align: center;
      justify-content: space-between;
      border-bottom: 1px solid #ececec;
      padding: 10px 4px;
    }
  }
}
.DttailNavBar {
  background-color: #fff;
  position: relative;
  z-index: 15;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
