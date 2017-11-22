<template>
  <div>
    <mask-layer class="z4"></mask-layer>
    <aside class="back-msg white-bg z5 ">
      <div class="flex flex-center bm-header abs">
        <img v-if="store.groupHead"
             class="group-head"
             :src="store.groupHead">
        <span class="head-title">{{store.appName+'交流群'}}</span>
      </div>
      <img class="QR abs"
           :src="isForm?store.QRCode:(pixUrl+store.QRCode)">
      <div class="bottom-tip abs">
        长按识别二维码进群
      </div>
      <i @click="$emit('close')"
         class="icon iconfont icon-iconfontcha grey-c close-btn"
         style="font-size:18px"></i>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'back-msg',
  inject: ['query'],
  props: {
    store: Object
  },
  computed: {
    pixUrl () {
      return `static/public/${this.query.appId}/imgs/`
    },
    isForm () {
      return this.query && this.query.form
    }
  },
  mounted () {
    this.$el.addEventListener('touchmove', (e) => {
      e.stopPropagation()
      e.preventDefault()
    })
  }
}
</script>

<style lang="less" scoped>
.abs {
  position: absolute;
}
.back-msg {
  width: 2.81rem; // height: 68%;
  height: 3.87rem;
  position: fixed;
  opacity: 1;
  // top: 18%;
  top: 1rem;
  left: 0.47rem;
  border-radius: 4px;
  text-align: center;
  padding: 0.42rem 0.6rem;
  font-family: PingFangSC-Regular;
  text-align: center;

  .bm-header {
    width: 2.81rem;
    text-align: center;
    top: 0.44rem;
    left: 0;
  }

  .QR {
    top: 1.22rem;
    left: 0.58rem;
    width: 1.66rem;
    height: 1.66rem;
  }

  .group-head {
    width: 42px;
    height: 42px;
    border-radius: 100%;
    margin-right: 8px;
  }

  .head-title {
    font-size: 16px;
  }

  .bottom-tip {
    font-size: 14px;
    color: #1d1d1d;
    bottom: 0.48rem;
    left: 0;
    width: 100%;
    text-align: center;
  }
  .close-btn {
    position: absolute;
    right: 0.12rem;
    top: 0.12rem;
    font-size: 22px;
    padding: 0;
  }
}
</style>
