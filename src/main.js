import './tools/qingjs'
import 'core-js/es6/array'
import { setRootFs } from './tools/tool'
import './components'
import Vue from 'vue'
import App from './App'
setRootFs(3.75)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
