<!--  -->
<template>
  <div>
    <div class="addressItem">
      <van-radio-group v-model="radio">
        <div class="cellborder">
          <van-cell-group>
            <van-cell center>
              <template #title>
                <div style="margin-top: 15px;margin-bottom: 20px;">
                  <span class="name">姓名</span> <span class="phone">13429577056</span>
                </div>
              </template>
              <template #label>
                <span class="custom-title">地址</span>
              </template>
              <template #right-icon>
                <span class="useBtn" @click="use">使用</span>
                <van-icon name="success" color="#1989fa" />
              </template>
            </van-cell>
          </van-cell-group>
          <van-cell-group>
            <van-cell center>
              <template #title>
                <van-radio name="1" @click="radioClick" icon-size="20px">设为默认</van-radio>
              </template>
              <template #right-icon>
                <span class="leftBtn" @click="edit">编辑</span>
                <span class="rightBtn" @click="remove">删除</span>
              </template>
            </van-cell>
          </van-cell-group>
        </div>
      </van-radio-group>
    </div>
    <div class="footer">
      <div class="btn" @click="addAddress">添加收货地址</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: ''
    }
  },
  methods: {
    radioClick() {
      console.log(this.radio)
    },
    use() {
      console.log('按钮点击')
    },
    edit() {
      console.log('编辑')
    },
    remove() {
      this.$dialog
        .alert({
          message: '弹窗内容',
          showCancelButton: true
        })
        .then(() => {
          this.$notify({ type: 'success', message: '删除成功' })
        })
        .catch(() => {
          this.$notify({ type: 'warning', message: '删除失败' })

          // on cancel
        })
    },
    addAddress() {
      this.$router.push('/addAddress')
    }
  }
}
</script>
<style lang='scss' scoped>
.addressItem {
  padding-bottom: 134px;
  .custom-title {
    font-size: 25px;
    font-weight: 700;
    color: #7c8794;
  }
  .name {
    font-size: 25px;
    font-weight: 700;
    color: #7c8794;
    margin-right: 25px;
  }
  .phone {
    font-size: 25px;
    color: #7c8794;
  }
}
.cellborder {
  border-bottom: rgba(153, 153, 153, 0.1) solid 3px;
}
.leftBtn {
  font-size: 21px;
  color: #bdbdbd;
  margin-right: 32px;
}
.rightBtn {
  font-size: 21px;
  color: #bdbdbd;
}
.useBtn {
  width: 70px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  background-color: #fff;
  border: #ff6f1c solid 1px;
  border-radius: 8px;
  font-size: 21px;
  color: #ff6f1c;
}
.footer {
  width: 100%;
  z-index: 999;
  position: fixed;
  bottom: 0;
  height: 134px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
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