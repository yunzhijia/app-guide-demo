<template>
  <component :is="target">
  </component>
</template>

<script>
import { getQuery } from './tools/tool'
export default {
  data () {
    return {
      target: 'qa'
    }
  },
  created () {
    window.jsb.call('setBounce', {
      enable: 0
    })
    window.jsb.call('closePop')
    window.jsb.call('setWebViewTitle', {
      title: '应用指引'
    })
    const q = getQuery()
    this.target = q.type || 'qa'
  },
  components: {
    'qa': () => import('./modules/Q&A/index.vue'),
    'guide': () => import('./modules/guide/index.vue')
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
  //   height: 100%;
  //   overflow-x: hidden;
}
</style>

