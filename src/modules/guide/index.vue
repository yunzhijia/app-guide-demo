<template>
  <section class="guide">
    <header>
      <img class="header-img"
           src="./imgs/banner@3x.png">
    </header>
    <content-list class="content"
                  :content="store"></content-list>
    <footer-btn></footer-btn>
  </section>
</template>

<script>
import { GuideStore } from './store'
export default {
  data () {
    return {
      store: GuideStore
    }
  }
}
</script>

<style lang="less" scoped>
.guide {
  background: #fff;
}
.header-img {
  width: 100%;
  margin-bottom: 0.24rem;
}
.content {
  padding: 0 0.12rem 0.48rem 0.12rem;
}
</style>


