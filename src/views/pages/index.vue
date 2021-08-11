<!-- home -->
<template>
  <div class="index-container">
    <div class="imgOuter">
      <img class="tip" src="http://geheatoss.oss-cn-shanghai.aliyuncs.com/peak/aaaaaa1617258656165_53256d15" alt="" />
    </div>
    <div class="title1">今日推荐</div>
    <goods-item
      v-for="item in [1, 2]"
      :key="item"
      imgUrl="http://geheatoss.oss-cn-shanghai.aliyuncs.com/peak/aaaaaa1617258656165_53256d15"
      goodsName="智能手环"
      :exchangedNum="2000"
      :price="1999"
      :cardCurrency="5000"
    />
    <fill/>
    <div class="title2">热门兑换</div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <goods-item
        v-for="item in list"
        :key="item"
        imgUrl="http://geheatoss.oss-cn-shanghai.aliyuncs.com/peak/aaaaaa1617258656165_53256d15"
        goodsName="智能手环"
        :exchangedNum="2000"
        :price="1999"
        :cardCurrency="5000"
      />
    </van-list>
  </div>
</template>

<script>
import goodsItem from '@/components/goodsItem'
import fill from '@/components/fill'
export default {
  components: { goodsItem, fill },
  data() {
    return {
      list: Array(10),
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = []
          this.refreshing = false
          for (let i = 0; i < 10; i++) {
            this.list.push(this.list.length + 1)
          }
        } else {
          this.loading = true
          for (let i = 0; i < 10; i++) {
            this.list.push(this.list.length + 1)
          }
          this.loading = false
        }
      }, 1000)
    },
  }
}
</script>
<style lang="scss" scoped>
.imgOuter {
  padding: 25px 34px;
  background-color: #fff;
  .tip {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
}
.title2 {
  margin-left: 34px;
  font-size: 28px;
  margin-bottom: 15px;
  margin-top: 30px;
  color: #485565;
  font-weight: 700;
}
.title1 {
  margin-left: 34px;
  font-size: 28px;
  margin-bottom: 15px;
  color: #485565;
  font-weight: 700;
}

</style>
