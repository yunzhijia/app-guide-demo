<template>
  <section class="qa-detail fixed-page common-scroller">

    <content-list :content="data.answer"></content-list>
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
  padding: 0.3rem 0.27rem 0.48rem 0.3rem;
}
</style>
