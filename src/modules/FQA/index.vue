<template>
  <div>
    <transition :appear="false"
                :name="trName">
      <keep-alive>
        <router-view :store="store">
        </router-view>
      </keep-alive>
    </transition>
    <footer-btn class="z1"
                v-if="store.state"
                :store="store.state">
    </footer-btn>
  </div>
</template>

<script>
import router from './route'
export default {
  router,
  provide () {
    return {
      store: this.store
    }
  },
  inject: ['query'],
  data () {
    return {
      store: {
        state: null,
        target: null
      },
      isTouch: false,
      isFirst: true,
      listScrollTop: 0
    }
  },
  computed: {
    trName () {
      if (this.isTouch || this.isFirst) {
        return ''
      }
      return this.$route.name === 'detail' ? 'slide-left' : 'slide-right'
    }
  },
  async created () {
    this.store.state = await import(`../../public/guide/FAQ.js`)

    window.jsb.call('setWebViewTitle', {
      title: this.store.state.title
    })

    const move = e => {
      setTimeout(() => {
        this.isTouch = true
      }, 0)
    }
    document.addEventListener('touchstart', () => {
      document.addEventListener('touchmove', move)
    })

    document.addEventListener('touchend', () => {
      document.removeEventListener('touchmove', move)
      setTimeout(() => {
        this.isTouch = false
      }, 500)
    })

    document.addEventListener('touchcancel', () => {
      document.addEventListener('touchmove', move)
      setTimeout(() => {
        this.isTouch = false
      }, 128)
    })
  },
  mounted () {
    this.$nextTick(() => {
      setTimeout(() => { this.isFirst = false }, 1000)
    })
  }
}
</script>

<style lang="less" scoped>

</style>

