<template>
  <div class="comment-info-wrap" v-if="Object.keys(commentInfo).length !== 0">
    <div class="comment-title flex">
      <div>用户评价</div>
      <div class="more">更多</div>
    </div>
    <div v-for="item in commentInfo">
      <div class="comment-user-info">
        <span>
          <img :src="item.user.avatar" alt class="avatar" />
        </span>
        <span>{{item.user.uname}}</span>
      </div>
      <div class="comment-text">{{item.content}}</div>
      <div class="comment-goods-info">
        <span class="comment-time">{{ showDate(item.created)}}</span>
        <span>{{item.style}}</span>
      </div>
      <div class="flex">
        <div class="comment-info-images" v-for="item in item.images">
          <img :src="item" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils.js";
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    showDate(value) {
      //将时间戳转换成date对象
      const date = new Date(value * 1000);
      //将date进行格式化
      return formatDate(date, "yyyy-MM-dd");
    }
  },
  filters: {}
};
</script>

<style lang="less" scoped>
.comment-info-wrap {
  padding: 0 8px;
  font-size: 14px;
  border-bottom: 4px solid #ececec;
  .comment-title {
    justify-content: space-between;
    border-bottom: 1px solid #ececec;
    padding: 10px 4px;
    display: flex;
    position: relative;
    div {
      flex: 1;
    }
    .more {
      position: absolute;
      right: 0;
    }
  }
  .comment-user-info {
    padding: 10px 0;
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      margin-right: 10px;
      vertical-align: middle;
    }
  }
  .comment-text {
    line-height: 20px;
  }
  .comment-goods-info {
    color: #999;
    margin: 4px 0;
    .comment-time {
      margin-right: 10px;
    }
  }
  .comment-info-images {
    img {
      width: 60px;
      height: 60px;
      margin-right: 6px;
    }
  }
}
</style>
