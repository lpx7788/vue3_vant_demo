<template>
  <div class="home">
    <header class="header">
      <div class="search_box">
        <i title="搜索icon"></i>
        <span>{{$t("SearchPlaceholder")}}</span>
      </div>
      <div class="news">
        <i title="消息icon"></i>
      </div>
    </header>
    <van-swipe
      class="swipe"
      :autoplay="3000"
    >
      <van-swipe-item
        v-for="(item, index) in adv_list"
        :key="index"
      >
        <img
          v-lazy="item.adv_code"
          :alt="item.adv_title"
        />
      </van-swipe-item>
    </van-swipe>
    <nav class="nav">
      <ul class="nav_box">
        <li
          v-for="item in nav_list"
          :key="item.text"
          class="nuv_item"
        >
          <div class="nav_icon">
            <img
              :src="item.adv_code"
              :alt="item.ap_name"
            >
          </div>
          <div class="nav_text">
            <span>{{item.adv_title}}</span>
          </div>
        </li>
      </ul>
    </nav>
    <div class="shopping">
      <van-row class="shopping_list">
        <van-col
          class="shopping_item"
          span="12"
        >span: 12</van-col>
        <van-col
          class="shopping_item"
          span="12"
        >span: 12</van-col>
        <van-col
          class="shopping_item"
          span="6"
        >span: 6</van-col>
        <van-col
          class="shopping_item"
          span="6"
        >span: 6</van-col>
        <van-col
          class="shopping_item"
          span="6"
        >span: 6</van-col>
        <van-col
          class="shopping_item"
          span="6"
        >span: 6</van-col>
      </van-row>
    </div>
    <Footer :active="0" />
  </div>
</template>
<script>
import { Button, Swipe, SwipeItem, Row, Col } from "vant";
import Footer from "@/components/footer.vue";
export default {
  name: "home",
  components: {
    [Button.name]: Button,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Row.name]: Row,
    [Col.name]: Col,
    Footer
  },
  data() {
    return {
      adv_list: [], //轮播图
      nav_list: [], //导航
      home: []
    };
  },
  created() {
    const that = this;
    that.getData();
  },
  methods: {
    async getData() {
      const that = this;
      const res = await that.$http.get("/index.php/mobile/index");
      that.adv_list = res.result.adv_list;
      that.nav_list = res.result.nav_list;
      that.home = res.result.home1;
    }
  }
};
</script>
<style lang="less" scoped>
.home {
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 8px 15px 8px 20px;
    display: flex;
    z-index: 1;
    .search_box {
      flex: 1;
      height: 28px;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 14px;
      display: flex;
      align-items: center;
      i {
        width: 14px;
        height: 15px;
        background-image: url(../../assets/images/search_icon.png);
        background-size: 14px 15px;
        display: block;
        margin: 0 12px;
      }
      span {
        height: 18px;
        font-size: 13px;
        font-family: PingFangSC-Light;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
        line-height: 18px;
      }
    }
    .news {
      width: 25px;
      padding-left: 11px;
      i {
        height: 24px;
        width: 25px;
        background-image: url(../../assets/images/news_icon.png);
        background-size: 24px 25px;
        display: flex;
      }
    }
  }
  .swipe {
    height: 160px;
    img {
      width: 100%;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .nav {
    height: 100px;
    display: flex;
    border-bottom: 10px solid rgba(245, 245, 245, 1);
    .nav_box {
      flex: 1;
      display: flex;
      align-items: center;
      .nuv_item {
        flex: 1;
        img {
          width: 44px;
          height: 44px;
        }
        .nav_icon {
          padding-bottom: 10px;
        }
        .nav_icon,
        .nav_text {
          display: flex;
          justify-content: center;
        }
      }
      .nav_text {
        height: 17px;
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        line-height: 17px;
      }
    }
  }
  .shopping {
    .shopping_list {
      .shopping_item:nth-child(1),
      .shopping_item:nth-child(2) {
        height: 158px;
      }
    }
  }
}
</style>
