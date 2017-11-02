<template>
  <section class="qa-detail fixed-page common-scroller">
    <h1 class="title">{{data.question}}</h1>
    <p class="answer">{{data.answer}}</p>
  </section>
</template>

<script>
export default {
  props: {
    data: Object
  }
}
</script>

<style lang="less" scoped>
.qa-detail {
  background: #fff;
  padding: 0.3rem 0.27rem 0.44rem 0.3rem;

  .title {
    font-size: 0.17rem;
    line-height: 0.24rem;
    margin-bottom: 0.16rem;
  }

  .answer {
    font-size: 0.16rem;
    line-height: 0.22rem;
  }
  .icon {
    color: red;
  }
}
</style>
