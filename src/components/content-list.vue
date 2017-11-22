<template>
  <ul class="content-box">
    <li class="item"
        v-for="(item , index) in content">
      <h1 class="title"
          v-if="item.title"
          v-text="item.title"></h1>
      <p v-if="typeof item.content === 'string'"
         key="str"
         class="content"
         v-text="item.content"></p>
      <ul v-else
          key="arr">
        <li v-for="(text,index) in  item.content"
            class="content-item"
            :key="index">{{text}}</li>
      </ul>
      <img v-if="item.img"
           class="img"
           :src="isForm?item.img:(pixUrl+item.img)">
    </li>
  </ul>
</template>

<script>
export default {
  inject: ['query'],
  name: 'content-list',
  props: {
    content: Array,
    appId: String
  },
  computed: {
    isString () {
      return typeof this.content.content === 'string'
    },
    pixUrl () {
      return `static/public/${this.appId}/imgs/`
    },
    isForm () {
      return this.query && this.query.form
    }
  }
}
</script>

<style lang="less" scoped>
.content-box {
  background: #fff;
  opacity: 1;
}
.item {
  padding: 0.24rem 0 0 0;
  display: block;
  &:first-child {
    padding: 0;
  }

  .title {
    color: #1d1d1d;
    // font-size: 0.16rem;
    font-size: 16px;
    line-height: 0.22rem;
  }
  .content {
    color: #768893;
    // font-size: 0.14rem;
    font-size: 14px;
    line-height: 0.2rem;
    margin-top: 0.11rem;
  }
  .content-item {
    color: #768893;
    font-size: 14px;
    line-height: 0.2rem;
    // margin-top: 0.11rem;
  }
  .img {
    margin-top: 0.24rem;
    width: 100%;
    // width: 3.51rem;
    // max-width: 3.51rem;
    display: inline-block;
  }
}
</style>
