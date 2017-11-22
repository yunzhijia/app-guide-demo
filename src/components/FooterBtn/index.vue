<template>
  <div>
    <footer class="add-footer flex flex-center border border-t"
            @click="showQR=true">
      <i class="icon iconfont icon-yingyongqunzu"></i>
      <span class="add">{{text}}</span>
    </footer>
    <back-msg v-if="showQR"
              :store="store"
              @close="showQR=false">
    </back-msg>
  </div>
</template>

<script>
export default {
  name: 'footer-btn',
  props: {
    store: Object
  },
  computed: {
    text () {
      return `加入${this.store.appName}交流群`
    }
  },
  watch: {
    '$route.path' (val) {
      this.showQR = false
    }
  },
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
    background: #e8eff0;
  }
  .add {
    color: #3f3f3f;
    margin-left: 0.1rem;
    margin-top: 0.04rem;
  }
  .iconfont {
    font-size: 0.18rem;
    margin-top: 0.04rem;
  }
}
</style>
