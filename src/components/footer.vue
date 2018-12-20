<template>
  <footer class="footer">
    <van-tabbar>
      <van-tabbar-item
        url="/"
        icon="shop"
      >
        <span :class="{active:$route.name=='home'}">首页</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="$route.name=='home' ? require('@/assets/images/home_icon_s.png') : require('@/assets/images/home_icon.png')"
        >
      </van-tabbar-item>
      <van-tabbar-item
        url="/categroy"
        icon="chat"
      >
        <span :class="{active:$route.name=='categroy'}">分类</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="$route.name=='categroy' ? require('@/assets/images/categroy_icon_s.png') : require('@/assets/images/categroy_icon.png')"
        ></van-tabbar-item>
      <van-tabbar-item
        url="/cart"
        icon="records"
      >
        <span :class="{active:$route.name=='cart'}">购物车</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="$route.name=='cart' ? require('@/assets/images/cart_icon_s.png') : require('@/assets/images/cart_icon.png')"
        ></van-tabbar-item>
      <van-tabbar-item
        url="/my"
        icon="records"
      >
        <span :class="{active:$route.name=='my'}">我的</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="$route.name=='my'? require('@/assets/images/my_icon_s.png') : require('@/assets/images/my_icon.png')"
        >
        </van-tabbar-item>
    </van-tabbar>
  </footer>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  props: {
    // active: {
    //   type: [Number, String],
    //   default: 0
    // }
  },
   mounted(){
    console.log(this.$route.name);
  },
  components: { [Tabbar.name]: Tabbar, [TabbarItem.name]: TabbarItem }
};
</script>
<style lang="less" scoped>
.footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
  .active{
    color: #fe872b;
  }
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
