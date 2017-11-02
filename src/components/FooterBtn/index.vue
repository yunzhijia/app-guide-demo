<template>
  <div>
    <footer class="add-footer flex flex-center border border-t"
            @click="showQR=true">
      <i class="icon iconfont icon-yingyongqunzu"></i>
      <span class="add">加入应用交流群</span>
    </footer>
    <back-msg v-if="showQR"
              @close="showQR=false"></back-msg>
  </div>
</template>

<script>
export default {
  name: 'footer-btn',
  data () {
    return {
      showQR: false
    }
  }
}
</script>
<style lang="less" scoped>
.add-footer {
  height: 0.43rem;
  font-size: 0.15rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  text-align: center;
  &:active {
    opacity: 0.5;
  }
  .add {
    color: #3f3f3f;
    margin-left: 0.1rem;
  }
  .iconfont {
    font-size: 0.18rem;
    margin-bottom: 0.02rem;
  }
}
</style>
