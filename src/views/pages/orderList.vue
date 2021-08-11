<!--  -->
<template>
  <div>
    <van-tabs v-model="active" @click="onClick" sticky animated swipeable color="#409EFF">
      <van-tab class="pdt" title="全部">
        <logistics-item
          v-for="item in list"
          :key="item"
          imgUrl="http://geheatoss.oss-cn-shanghai.aliyuncs.com/peak/aaaaaa1617258656165_53256d15"
          goodsName="智能手环"
          :exchangedNum="2000"
          :price="1999"
          :cardCurrency="5000"
        />
      </van-tab>
      <van-tab class="pdt" title="代发货">
         <logistics-item
          v-for="item in list"
          :key="item"
          imgUrl="http://geheatoss.oss-cn-shanghai.aliyuncs.com/peak/aaaaaa1617258656165_53256d15"
          goodsName="智能手环"
          :exchangedNum="2000"
          :price="1999"
          :cardCurrency="5000"
        />
      </van-tab>
      <van-tab class="pdt" title="待收货">
         <logistics-item
          v-for="item in list"
          :key="item"
          imgUrl="http://geheatoss.oss-cn-shanghai.aliyuncs.com/peak/aaaaaa1617258656165_53256d15"
          goodsName="智能手环"
          :exchangedNum="2000"
          :price="1999"
          :cardCurrency="5000"
        />
      </van-tab>
      <van-tab class="pdt" title="已完成">
         <logistics-item
          v-for="item in list"
          :key="item"
          imgUrl="http://geheatoss.oss-cn-shanghai.aliyuncs.com/peak/aaaaaa1617258656165_53256d15"
          goodsName="智能手环"
          :exchangedNum="2000"
          :price="1999"
          :cardCurrency="5000"
        />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import logisticsItem from '@/components/logisticsItem'
export default {
  components: { logisticsItem },
  data() {
    return {
      active: 0,
       list: Array(10),
    }
  },

  //   components: {},

  //   computed: {},

  //   mounted: {},

  methods: {
    //标签点击事件
    onClick() {
      console.log('点击事件')
    }
  }
}
</script>
<style lang='scss' scoped>
.listBox {
  width: 100%;
  height: 100px;
  border-top: #ebeef5 solid 1px;
  background-color: #fff;
}
.pdt{
  padding-top: 17px;
}
</style>