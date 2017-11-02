<template>
  <section class="main">
    <cell class="about"
          :text="about.question"
          :none-border="true"
          style="padding:.22rem .15rem"
          @click.native="setTarget(about)">
      <img class="header-img"
           src="./imgs/dengpao@3x.png">
    </cell>
    <ul>
      <li v-for="(q,index) in questions"
          :key="index">
        <cell :text="q.question"
              :none-border="index===(questions.length-1)"
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
      target: null,
      history: null
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
      } else {
        this.target = this.history
      }
    },
    setTarget (data) {
      this.target = data
      this.history = data
      window.location.hash = '#detail'
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
.header-img {
  width: 0.18rem;
  height: 0.2rem;
  margin-right: 0.05rem;
}
</style>

