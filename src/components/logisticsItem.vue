<!--  -->
<template>
  <div class="container">
    <div class="orderNum">
      <span>
          <span class="numMar">订单编号: 123456789</span>
          <span>2021.12.3</span>
      </span>
      <span class="status">已下单</span>
    </div>
    <div class="pad item">
      <div class="flex1"><img class="goodImg" :src="imgUrl" alt="" /></div>
      <div class="flex2">
        <div class="name">{{ goodsName }}</div>
        <div class="cardCurrency">5000卡币</div>
      </div>
      <div class="flex3">
        <div class="rmb">￥ 400</div>
        <div class="num" >×1</div>
      </div>
    </div>
    <div class="footTip">
        <span class="tip1">共计一件商品</span>
        <span>合计金额：￥ 0.00(含运费￥：0.00)</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      required: true
    },
    goodsName: {
      type: String,
      required: true
    },
    exchangedNum: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    cardCurrency: {
      type: Number,
      required: true
    }
  },
  data() {
    return {}
  },

  //   components: {},

  //   computed: {},

  //   mounted: {},

  methods: {
  }
}
</script>
<style lang='scss' scoped>
.container {
  position: relative;
  padding-bottom: 30px;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #ececec;
    bottom: 0;
  }
}
.footTip{
    margin-left: 34px;
    color: #7c8794;
    font-size: 21px;
    .tip1{
        margin-right: 45px;
    }
}
.orderNum {
  margin-left: 34px;
  margin-right: 34px;
  margin-top: 30px;
  font-size: 21px;
  display: flex;
  justify-content: space-between;
  color: #7c8794;
  .numMar{
      margin-right: 24px;
  }
  .status {
    color: #378bff;
  }
}
.pad {
  padding: 22px 34px;
  background-color: #fff;
  position: relative;
  display: flex;
  flex-flow: row;
  align-items: center;
  .item {
    width: 100%;
  }
  .goodImg {
    width: 144px;
    height: 144px;
    border-radius: 10px;
  }
  //   .flex1{
  //       flex: 0.5;
  //   }
  .flex2 {
    margin-left: 26px;
    display: flex;
    flex-flow: column;
    height: 100%;
  }
  .flex3 {
    flex: 1;
    height: 100%;
    position: absolute;
    right: 45px;
    top: 30px;
    text-align: right;
    color: #bdbdbd;
    .rmb{
        font-size: 25px;
        color: #bdbdbd;
        margin-bottom: 22px;
    }
  }
}
.name {
  padding-top: 5px;
  font-size: 28px;
  color: #7c8794;
  margin-bottom: 22px;
}
.exchangedNum {
  font-size: 20px;
  color: #bdbdbd;
  margin-bottom: 14px;
}
.price {
  font-size: 22px;
  color: #7c8794;
}
.cardCurrency {
  font-size: 34px;
  font-weight: 700;
  color: #ff6f1c;
  margin-bottom: 35px;
}
.num {
 font-size: 26px;
 font-weight: 700;
}
.cardNum {
  margin-left: 12px;
}
</style>