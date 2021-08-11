<!--  -->
<template>
  <div class="pad item">
    <div class="flex1"><img class="goodImg" :src="imgUrl" alt="" /></div>
    <div class="flex2">
      <div class="name">{{ goodsName }}</div>
      <div class="exchangedNum">已兑{{ exchangedNum }}件</div>
      <div class="price">
        市场价￥<s>{{ price }}</s>
      </div>
    </div>
    <div class="flex3">
      <div class="cardCurrency">{{ cardCurrency }}<span class="cardNum">卡币</span></div>
      <div class="btn" @click="exchange">立即兑换</div>
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
      exchange() {
          this.$router.push('/details')
      }
    }
}
</script>
<style lang='scss' scoped>
.pad {
  padding: 25px 34px 25px 34px;
  position: relative;
  background-color: #fff;
  display: flex;
  flex-flow: row;
  align-items: center;
  &::after{
    content: "";
    position: absolute;
    width: 90%;
    height: 1px;
    background-color: #ECECEC;
    bottom: 0;
  }
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
    display: flex;
    flex-flow: column;
    align-items: center;
    right: 45px;
    top: 30px;
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
.price{
  font-size: 22px;
  color: #7C8794;
}
.cardCurrency{
  font-size: 34px;
  font-weight: 700;
  color: #FF6F1C;
  margin-bottom: 35px;
}
.btn{
  width: 134px;
  height: 50px;
  color: #FF6F1C;
  border: #FF6F1C solid 1px;
  background-color: #fff;
  border-radius: 30px;
  font-size: 20px;
  line-height: 50px;
  text-align: center;
  font-weight: 800;
  &:active{
    background-color: #FF6F1C;
    color: #fff;
  }
}
.cardNum{
  margin-left: 12px;
}
</style>