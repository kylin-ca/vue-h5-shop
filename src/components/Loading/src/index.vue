<template>
  <div class="loading_wrapper" v-show="isShowLoading">
    <van-overlay :show="overlayShow" />
    <div class="content">
      <p>{{ title }}</p>
      <br />
      <van-loading type="spinner" color="#1989fa" />
      <!--
        <img :src="require('../../../assets/hicling/tits.gif')" alt="loading">
      -->
    </div>
  </div>
</template>
<script>
export default {
  name: "Loading",
  data() {
    return {
      title: "loading...",
      isShowLoading: false,
      overlayShow: true
    };
  },
  methods: {
    show(title) {
      this.isShowLoading = true;
      if(title){
        this.title = title;
      }
    },
    hide() {
      this.isShowLoading = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.loading_wrapper {
  .content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
      font-size: 21px;
      color: rgb(83, 83, 196);
    
  }
}
</style>
