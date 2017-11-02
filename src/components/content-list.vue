<template>
  <ul class="content-box">
    <li class="item"
        v-for="(item , index) in content">
      <h1 class="title"
          v-text="item.title"></h1>
      <p v-if="typeof item.content === 'string'"
         key="str"
         class="content"
         v-text="item.content"></p>
      <ul v-else
          key="arr">
        <li v-for="(text,index) in  item.content"
            class="content"
            :key="index">{{text}}</li>
      </ul>
      <img v-if="item.img"
           class="img"
           :src="item.img">
    </li>
  </ul>
</template>

<script>
export default {
  name: 'content-list',
  props: {
    content: Array
  },
  computed: {
    isString () {
      return typeof this.content.content === 'string'
    }
  }
}
</script>

<style lang="less" scoped>
.content-box {
  background: #fff;
}
.item {
  padding: 0.24rem 0 0 0;
  display: block;
  &:first-child {
    padding: 0;
  }

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
    width: 100%;
    // width: 3.51rem;
    // max-width: 3.51rem;
    display: inline-block;
  }
}
</style>
