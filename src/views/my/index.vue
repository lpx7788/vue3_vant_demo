<template>
  <div class="my">
    <!-- <Header
      :rightText="$t('submit')"
      :title="$t('submit')"
      :leftArrow="false"
    /> -->
    <div class="my_list">
      <div class="my-store"></div>
      <div class="my-item"></div>
    </div>
    <Footer :active="3" />
  </div>
</template>
<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
export default {
  name: "my",
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
.my {
  font-size: 12px;
  .my_list {
    background-color: #f5f5f5;
  }
}
</style>
