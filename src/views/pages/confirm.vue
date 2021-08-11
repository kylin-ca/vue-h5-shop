<!--  -->
<template>
  <div class="container">
    <div class="address" @click="toAddressList">
      <div class="item1">
        <div class="mar"><span class="name">李志超</span> <span class="phone">13429577056</span></div>
        <div class="addr">浙江省绍兴市</div>
      </div>
      <div class="item2"></div>
    </div>
    <div class="addAddress" @click="toAddress">
      <span class="addIcon"></span>
      <span class="addText">添加收货地址</span>
    </div>
    <fill />
    <div class="pad item">
      <div class="flex1">
        <img
          class="goodImg"
          src="http://geheatoss.oss-cn-shanghai.aliyuncs.com/peak/aaaaaa1617258656165_53256d15"
          alt=""
        />
      </div>
      <div class="flex2">
        <div class="name">{{ goodsName }}</div>
        <div class="cardCurrency">{{ cardCurrency }}卡币</div>
        <div class="price">
          共1件 小计<span class="totalPrice">{{ totalPrice }}卡币</span>
        </div>
      </div>
    </div>
    <div class="buyNum">
      <span class="title">购买数量</span>
      <span class="num">此商品每人限购 5 件</span>
      <span class="stepper"><van-stepper disable-input  integer v-model="value" max="5" /></span>
    </div>
    <fill />
    <div class="tips">
      <div class="title">温馨提示</div>
      <p class="text">
        1.2131231231231232131231231231231231212123123111111111111111111111111111111111111111111111111111111111111111111111111111111111231231231231231231231232131231231231321321333312312312321321312312312323123
      </p>
    </div>
    <div class="footer">
      <fill />
      <div class="footerInfo">
        <span class="title">合计：</span>
        <span class="cardCurrency">{{ totalPrice }}卡币</span>
        <span class="footerBtn" @click="submit">立即兑换</span>
      </div>
    </div>
  </div>
</template>

<script>
import fill from '@/components/fill'
export default {
  components: { fill },
  data() {
    return {
      goodsName: '智能手表',
      exchangedNum: '',
      price: '',
      imgUrl: '',
      cardCurrency: '5000',
      value: ''
    }
  },
  computed: {
    totalPrice() {
      return this.value * 5000
    }
  },
  methods: {
    toAddressList() {
      this.$router.push('/addressList')
    },
    toAddress() {
      this.$router.push('/addAddress')
    },
    submit() {
         this.$dialog
        .alert({
          message: '您还未添加收货地址',
        })
    }
  }
}
</script>
<style lang='scss' scoped>
.pad {
  padding: 25px 34px 32px 34px;
  position: relative;
  background-color: #fff;
  display: flex;
  flex-flow: row;
  align-items: center;
  .item {
    width: 100%;
  }
  .goodImg {
    width: 145px;
    height: 145px;
    border-radius: 10px;
  }
  //   .flex1{
  //       flex: 0.5;
  //   }
  .flex2 {
    margin-left: 25px;
    display: flex;
    flex-flow: column;
    height: 100%;
  }
}
.name {
  padding-top: 5px;
  font-size: 28px;
  color: #7c8794;
}
.exchangedNum {
  font-size: 20px;
  color: #bdbdbd;
  margin-bottom: 14px;
}
.price {
  font-size: 21px;
  font-weight: 700;
  color: #7c8794;
}
.cardCurrency {
  font-size: 28px;
  font-weight: 700;
  color: #ff6f1c;
  margin-bottom: 20px;
}
.cardNum {
  margin-left: 12px;
}
.totalPrice {
  font-size: 21px;
  font-weight: 700;
  color: #ff6f1c;
}
.buyNum {
  padding-left: 34px;
  position: relative;
  padding-bottom: 45px;
}
.title {
  font-size: 25px;
  font-weight: 700;
  color: #7c8794;
  margin-right: 25px;
}
.num {
  color: #bdbdbd;
  font-size: 21px;
}
.stepper {
  position: absolute;
  top: 0;
  right: 34px;
}
.tips {
  padding-left: 34px;
  padding-right: 34px;
  padding-bottom: 34px;
  padding-top: 33px;
  .title {
    font-size: 25px;
    font-weight: 700;
    color: #7c8794;
  }
  .text {
    margin-top: 20px;
    font-size: 25px;
    color: #bdbdbd;
    word-wrap: break-word;
  }
}
.container {
  padding-bottom: 130px;
}
.footer {
  position: fixed;
  bottom: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 130px;
  background-color: #fff;
  z-index: 999;
}
.footerInfo {
  height: 120px;
  display: flex;
  align-items: center;
  position: relative;
  .title {
    margin-left: 34px;
    margin-right: 0;
  }
  .cardCurrency {
    margin-bottom: 0;
  }
}
.footerBtn {
  position: absolute;
  right: 34px;
  height: 72px;
  width: 195px;
  border-radius: 50px;
  color: #378bff;
  border: #378bff solid 1px;
  text-align: center;
  line-height: 72px;
  font-size: 24px;
  &:active {
    background-color: #378bff;
    color: #fff;
  }
}
.addAddress {
  width: 100%;
  height: 138px;
  display: flex;
  justify-content: center;
  align-items: center;
  .addText {
    font-size: 25px;
    color: #378bff;
  }
  .addIcon {
    width: 29px;
    height: 29px;
    background: url('../../assets/add.png');
    background-size: 100% 100%;
    margin-right: 15px;
  }
}
.address {
  width: 100%;
  height: 138px;
  padding: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .item2 {
    width: 13px;
    height: 23px;
    background: url('../../assets/link.png');
    background-size: 100% 100%;
  }
  .name {
    font-size: 25px;
    font-weight: 700;
    color: #7c8794;
    margin-right: 25px;
    margin-bottom: 20px;
  }
  .phone {
    font-size: 25px;
    color: #7c8794;
  }
}
.mar {
  margin-bottom: 15px;
}
.addr {
  font-size: 25px;
  color: #7c8794;
}
</style>