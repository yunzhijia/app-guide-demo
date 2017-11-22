<template>
  <section class="main fixed-page common-scroller list-main"
           ref="main"
           v-if="store.state">
    <cell class="about"
          v-if="state.about&&state.about.question"
          :text="state.about.question"
          :none-border="true"
          style="padding:.22rem .15rem"
          @click.native="setTarget(state.about)">
      <img class="header-img"
           src="./imgs/dengpao@3x.png">
    </cell>
    <ul v-for="(c,indexC) in state.data"
        class="category"
        :key="indexC">
      <li class="category-header white-bg"
          v-if="c.category">{{c.category}}</li>
      <li v-for="(q,index) in c.questions"
          :key="index">
        <cell :text="index+1+'. '+ q.question"
              :none-border="index===(length-1)"
              @click.native="setTarget(q)"></cell>
      </li>
    </ul>
    <!-- <footer-btn :store="store.state"></footer-btn> -->
  </section>
</template>

<script>
import detail from './detail'
export default {
  inject: ['query', 'store'],
  computed: {
    state () {
      return this.store.state
    },
    length () {
      return this.state && this.state.questions && this.state.questions.length
    }
  },
  methods: {
    setTarget (data) {
      this.store.target = data
      if (this.$refs.main) {
        this.store.listScrollTop = this.$refs.main.scrollTop
      }
      this.$router.push({
        name: 'detail'
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
    // 通过 `vm` 访问组件实例
      const me = vm
      setTimeout(() => {
        // console.log(me.$refs.main)
        me.$refs.main && (me.$refs.main.scrollTop = me.store.listScrollTop)
      }, 200)
    })
  },
  components: {
    detail
  }
}
</script>

<style lang="less" scoped>
.list-main {
  // min-height: 100%;
  bottom: 0.43rem;
  margin-bottom: 0;
  padding-bottom: 0.2rem;
}
.about {
  margin: 0.12rem 0 0.11rem 0;
}
.header-img {
  width: 0.18rem;
  height: 0.2rem;
  margin-right: 0.05rem;
  margin-bottom: 0.02rem;
}

.category {
  margin-top: 0.24rem;
  background: #fff;
  opacity: 1;
  .category-header {
    line-height: 0.3rem;
    line-height: 0.3rem;
    font-size: 0.12rem;
    padding-left: 0.12rem;
    color: #768893;
  }
}
</style>

