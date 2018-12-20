<template>
  <footer class="footer">
    <van-tabbar v-model="active">
      <van-tabbar-item
        url="/"
        icon="shop"
      >
        <span>首页</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? require('@/assets/images/home_icon_s.png') : require('@/assets/images/home_icon.png')"
        >
      </van-tabbar-item>
      <van-tabbar-item
        url="/categroy"
        icon="chat"
      >
        <span>分类</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? require('@/assets/images/categroy_icon_s.png') : require('@/assets/images/categroy_icon.png')"
        ></van-tabbar-item>
      <van-tabbar-item
        url="/cart"
        icon="records"
      >
        <span>购物车</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? require('@/assets/images/cart_icon_s.png') : require('@/assets/images/cart_icon.png')"
        ></van-tabbar-item>
      <van-tabbar-item
        url="/my"
        icon="records"
      >
        <span>购物车</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? require('@/assets/images/my_icon_s.png') : require('@/assets/images/my_icon.png')"
        >
        </van-tabbar-item>
    </van-tabbar>
  </footer>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  props: {
    active: {
      type: [Number, String],
      default: 0
    }
  },
  // mounted(){
  //   console.log(this.props);
  // },
  components: { [Tabbar.name]: Tabbar, [TabbarItem.name]: TabbarItem }
};
</script>
<style lang="less" scoped>
.footer {
  /deep/.van-tabbar-item__icon img {
    height: 24px;
  }
  /deep/ .van-tabbar-item__text {
    transform: scale(0.83);
  }
  /deep/ .van-tabbar-item--active {
    color: @active-color;
  }
}
</style>
