<template>
  <component :is="target">
  </component>
</template>

<script>
export default {
  provide () {
    const { query } = this
    return {
      query
    }
  },
  data () {
    return {
      target: 'qa',
      query: {
        appId: 'guide'
      }
    }
  },
  created () {
    window.jsb.call('setBounce', {
      enable: 0
    })
    window.jsb.call('closePop')
    this.target = this.query.type || 'fqa'
  },
  components: {
    'fqa': () => import('./modules/FQA/index.vue')
  }
}
</script>

<style lang="less">
@import "./assets/iconfont/iconfont.css";
@import "./components/style/reset.less";
@import "./components/style/class.less";
html,
body,
.main {
  width: 100%;
  background: #f8f9fb;
  overflow-x: hidden;
  margin-bottom: 0.44rem;
}
</style>

