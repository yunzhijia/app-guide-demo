import Vue from 'vue'
import mark from './mark-layer.vue'
import backMsg from './BackMsg'
import footerBtn from './FooterBtn'
import cell from './cell'
import ContentList from './content-list'
const register = (c) => {
  Vue.component(c.name, c)
}
register(mark)
register(backMsg)
register(footerBtn)
register(cell)
register(ContentList)
