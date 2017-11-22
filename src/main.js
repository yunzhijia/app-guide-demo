import './tools/qingjs'
import 'core-js/es6/array'
import { setRootFs } from './tools/tool'
import './components'
import Vue from 'vue'
import App from './App'
// import Router from 'vue-router'
setRootFs()
Vue.config.productionTip = false
// Vue.use(Router)
// 解决ios 下：activie不起作用
document.body.addEventListener('touchstart', function () { })
new Vue({
  el: '#app',
  render: h => h(App)
})
