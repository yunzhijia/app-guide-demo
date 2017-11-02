<template>
  <section class="main">
    <cell class="about"
          :text="about.question"
          @click.native="setTarget(about)"></cell>
    <ul>
      <li v-for="(q,index) in questions">
        <cell :text="q.question"
              @click.native="setTarget(q)"></cell>
      </li>
    </ul>
    <transition name="slide-fade">
      <detail v-if="target"
              :data="target"></detail>
    </transition>
    <footer-btn></footer-btn>
  </section>
</template>

<script>
import { about, questions } from './store'
import detail from './detail'
export default {
  data () {
    return {
      about,
      questions,
      target: null
    }
  },
  created () {
    window.onhashchange = this.hashChange
  },
  beforeDestroy () {
    window.onhashchange = null
  },
  methods: {
    hashChange () {
      const hash = window.location.hash
      if (hash !== '#detail') {
        this.target = null
      }
    },
    setTarget (data) {
      this.target = data
      window.location.hash = 'detail'
    }
  },
  components: {
    detail
  }
}
</script>

<style lang="less" scoped>
.about {
  margin: 0.12rem 0 0.11rem 0;
}
</style>

