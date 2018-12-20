<template>
  <header class="header">
    <van-nav-bar
      :title="title"
      :left-text="leftText"
      :right-text="rightText"
      :left-arrow="leftArrow"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </header>
</template>
<script>
import { NavBar } from "vant";
export default {
  props: {
    leftArrow: {
      type: Boolean,
      default: true
    },
    rightText: {
      type: String,
      default: ""
    },
    leftText: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  },
  components: { [NavBar.name]: NavBar },
  methods: {
    onClickLeft() {
      const that = this;
      //处理无法返回app原生页面问题
      if (that.$route.query.hasOwnProperty("isBack")) {
        try {
          // app.back();
        } catch (error) {
          that.$router.back();
        }
      } else {
        //处理部分手机无法返回的问题
        // if (
        //   history.length == 1 &&
        //   !that.$route.query.hasOwnProperty("isBack")
        // ) {
        //   const backUrl = JSON.parse(getCookie("backUrl"));
        //   if (!backUrl) that.$router.back();
        //   that.$router.replace({
        //     path: backUrl.path,
        //     query: backUrl.query
        //   });
        // } else {
        that.$router.back();
        // }
      }
    },
    onClickRight() {
      this.$emit("onClickRight");
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  background-color: @blue;
}
</style>
