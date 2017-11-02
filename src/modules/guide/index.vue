<template>
  <section class="guide">
    <header>
      <img class="header-img"
           src="./imgs/banner@3x.png">
    </header>
    <ul class="content-box">
      <li class="item"
          v-for="(item , index) in store">
        <h1 class="title">{{item.title}}</h1>
        <p class="content">{{item.content}}</p>
        <img v-if="item.img"
             class="img"
             :src="item.img">
      </li>
    </ul>
    <footer-btn></footer-btn>
  </section>
</template>

<script>
import { GuideStore } from './guideStore'
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
}

.content-box {
  padding: 0 0.12rem 0.6rem 0.12rem;
}
.item {
  padding: 0.24rem 0 0 0;
  .title {
    color: #1d1d1d;
    font-size: 0.16rem;
    line-height: 0.22rem;
  }
  .content {
    color: #768893;
    font-size: 0.14rem;
    line-height: 0.2rem;
    margin-top: 0.11rem;
  }
  .img {
    margin-top: 0.24rem;
    width: 3.51rem;
  }
}
</style>


