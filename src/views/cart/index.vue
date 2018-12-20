<template>
  <div class="cart">
    <Header
      :rightText="$t('submit')"
      :title="$t('submit')"
      :leftArrow="false"
    />
    <div class="cart_list">
      <div class="cart-store"></div>
      <div class="cart-item"></div>
    </div>
    <Footer :active="2" />
  </div>
</template>
<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
export default {
  name: "cart",
  components: {
    Header,
    Footer
  },
  created() {
    console.log(this);
  }
};
</script>
<style lang="less" scoped>
.cart {
  font-size: 12px;
  .cart_list {
    background-color: #f5f5f5;
  }
}
</style>
