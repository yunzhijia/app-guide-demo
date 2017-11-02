<template>
  <div>
    <mask-layer class="z4"></mask-layer>
    <aside v-if="true"
           class="back-msg white-bg z5 flex flex-column flex-center">
      <div class="flex flex-center">
        <img class="group-head"
             src="https://www.yunzhijia.com/image/59e05fe0e4b0a34ecabbef71_ext/59e06907e4b0873449bcdd0d">
        <span class="head-title">云之家应用中心交流群</span>
      </div>
      <img class="QR"
           src="./QR.png">
      <div class="bottom-tip">
        长按识别二维码进群
      </div>
      <div class="close-btn"
           @click="$emit('close')">
        <i class="icon iconfont icon-iconfontcha grey-c"></i>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'back-msg'
}
</script>

<style lang="less" scoped>
.back-msg {
  width: 80%; // height: 68%;
  position: fixed;
  opacity: 1;
  top: 14%;
  left: 10%;
  border-radius: 4px;
  text-align: center;
  padding: 42px 52px;

  .QR {
    width: 188px;
    height: 188px;
    margin: 24px 0 36px 0;
  }

  .group-head {
    width: 42px;
    height: 42px;
    border-radius: 100%;
    margin-right: 8px;
  }

  .head-title {
    font-size: 12px;
  }

  .bottom-tip {
    font-size: 10px;
    color: #1d1d1d;
  }
  .close-btn {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 18px;
    padding: 10px;
  }
}
</style>
