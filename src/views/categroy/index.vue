<template>
  <div class="categroy">
    <Header :leftArrow="false" :title="$t('classification')" />
    <div class="categroy_cnt">
      <ul>
        <li
          :class="[gc_id === '' ? 'active':'']"
          @click="Switch('')"
        >
          <span>品牌推荐</span>
        </li>
        <li
          v-for="item in class_list"
          :key="item.gc_id"
          :class="[item.gc_id == gc_id ? 'active':'']"
          @click="Switch(item.gc_id)"
        >
          <span>{{item.gc_name}}</span>
        </li>
      </ul>
    </div>
    <div class="categroy_rgt">
      <van-row
        class="categroy_rgt_box"
        :gutter="27"
      >
        <van-col
          class="categroy_item"
          v-for="item in brand_list"
          :key="item.brand_id"
          span="8"
        >
          <div class="categroy_icon">
            <p :style="{backgroundImage:`url(${item.brand_pic})`}"></p>
          </div>
          <div class="categroy_text">
            <span>{{item.brand_name}}</span>
          </div>
        </van-col>
      </van-row>
    </div>
    <Footer :active="1" />
  </div>
</template>
<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import { Row, Col } from "vant";
export default {
  name: "categroy",
  components: {
    Header,
    Footer,
    [Row.name]: Row,
    [Col.name]: Col
  },
  data() {
    return {
      class_list: [],
      gc_id: "",
      brand_list: [],
      loading: "loading"
    };
  },
  created() {
    const that = this;
    that.goodsclass();
  },
  methods: {
    async goodsclass() {
      const that = this;
      const res = await that.$http.get("/index.php/mobile/goodsclass/index");
      that.class_list = res.result.class_list;
      that.recommend_list();
    },
    async recommend_list() {
      const that = this;
      const res = await that.$http.get(
        "/index.php/mobile/brand/recommend_list"
      );
      that.brand_list = res.result.brand_list;
    },
    async get_child_all() {
      const that = this;
      const res = await that.$http.get(
        "/index.php/mobile/goodsclass/get_child_all",
        { params: { gc_id: that.gc_id } }
      );
      that.brand_list = res.result.class_list;
    },
    Switch(gc_id) {
      this.gc_id = gc_id;
      this.get_child_all();
    }
  }
};
</script>
<style lang="less" scoped>
@import url(../../styles/common.less);
.categroy {
  font-size: 12px;
  position: relative;
  height: 100vh;
  .categroy_cnt {
    top: 46px;
    bottom: 50px;
    width: 100px;
    .mix-1px(0, 1, 0, 0, #e5e5e5);
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    position: absolute;
    li {
      padding: 20px 10px;
      width: 100%;
      position: relative;
      box-sizing: border-box;
      color: rgba(102, 102, 102, 1);
      text-align: center;
      &.active {
        color: rgba(254, 135, 43, 1);
        &::after {
          content: "";
          width: 4px;
          height: 12px;
          border-left: 4px solid rgba(254, 135, 43, 1);
          left: 0;
          .mix-y-center();
        }
      }
    }
    span {
      font-size: 15px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      display: block;
      .mix-text-overflow();
    }
  }
  .categroy_rgt {
    position: absolute;
    top: 46px;
    bottom: 50px;
    left: 100px;
    right: 0;
    box-sizing: border-box;
    padding: 23px;
    padding-bottom: 0;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    .categroy_rgt_box {
      .categroy_item {
        margin-bottom: 23px;
      }
      .categroy_icon {
        width: 58px;
        height: 58px;
        border-radius: 50%;
        overflow: hidden;
        border: 1px solid #e5e5e5;
        p {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          display: block;
        }
      }
      .categroy_text {
        padding-top: 7px;
        height: 17px;
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 17px;
        text-align: center;
      }
    }
  }
}
</style>
