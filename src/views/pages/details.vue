<!-- home -->
<template>
  <div class="about-container">
    <div class="swiperOuter">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide swiper-slide1"></div>
          <div class="swiper-slide swiper-slide2"></div>
          <div class="swiper-slide swiper-slide3"></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="info">
      <div class="infoLeft">
        <div class="name">智能手表</div>
        <div class="cardCurrency">50000卡币</div>
        <div class="exchangedNum">已兑100件</div>
        <div></div>
      </div>
      <div class="infoRight">参考价 ￥ <s>400</s></div>
    </div>
    <fill />
    <div class="service">
      <div class="serviceItem">
        <span class="serviceName">服务</span>
        <span>不支持退换货</span>
      </div>
      <div class="serviceItem">
        <span class="serviceName">运费</span>
        <span>免邮费 (新疆、青海地区不支持发货)</span>
      </div>
    </div>
    <div class="protitle">— 详情介绍 —</div>
    <div class="footer">
      <div class="btn" @click="confirm">立即兑换</div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import fill from '@/components/fill'
import 'swiper/dist/css/swiper.min.css'
export default {
  components: { fill },
  data() {
    return {}
  },
  computed: {},
  mounted() {
    var mySwiper = new Swiper('.swiper-container', {
      autoplay: 5000, //可选选项，自动滑动
      pagination: '.swiper-pagination',
      autoplayDisableOnInteraction: false,
      simulateTouch: true,
      paginationType: 'bullets'
    })
  },
  methods: {
    confirm() {
        this.$router.push('/confirm')
    }
  }
}
</script>
<style lang="scss" scoped>
.about-container{
  padding-bottom: 134px;
}
.swiperOuter {
  width: 570px;
  margin-top: 25px;
  margin-left: 35px;
  background-color: #fff;
  margin-bottom: 32px;
}
.swiper-container {
  width: 100%;
  height: 200px;
  border-radius: 10px;
}
.swiper-slide1 {
  background-color: aqua;
  border-radius: 10px;
}
.swiper-slide2 {
  background-color: rgb(255, 0, 179);
  border-radius: 10px;
}
.swiper-slide3 {
  background-color: rgb(0, 255, 76);
  border-radius: 10px;
}
.info {
  position: relative;
  padding-bottom: 25px;
}
.infoRight {
  font-size: 22px;
  color: #7c8794;
  position: absolute;
  right: 35px;
  top: 50px;
}
.infoLeft {
  padding-left: 35px;
  .name {
    font-size: 28px;
    color: #7c8794;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .cardCurrency {
    font-size: 28px;
    color: #ff6f1c;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .exchangedNum {
    font-size: 20px;
    color: #bdbdbd;
  }
}
.service {
  font-size: 24px;
  color: #7c8794;
  padding-left: 35px;
  padding-top: 27px;
  padding-bottom: 30px;
  .serviceItem {
    margin-bottom: 20px;
  }
  .serviceName {
    margin-right: 102px;
  }
}
.protitle {
  width: 100%;
  height: 43px;
  text-align: center;
  line-height: 43px;
  font-size: 20px;
  color: #7c8794;
  background-color: #f2f2f2;
}
.footer {
  width: 100%;
  z-index: 999;
  position: fixed;
  background-color: #fff;
  bottom: 0;
  height: 134px;
  display: flex;
  justify-content: center;
  align-items: center;
  .btn {
    width: 560px;
    height: 72px;
    text-align: center;
    line-height: 72px;
    font-size: 28px;
    color: #378bff;
    border: #378bff solid 1px;
    border-radius: 50px;
    &:active {
      background-color: #378bff;
      color: #fff;
    }
  }
}
</style>
