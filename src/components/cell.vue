<template>
  <a class="cell flex flex-center border border-b"
     :style="{padding:padding}">
    <div></div>
    <p class="flex-full f32">{{text}}</p>
    <i class="icon iconfont icon-arrow-right"></i>
  </a>
</template>

<script>
export default {
  name: 'cell',
  props: {
    text: String,
    icon: {
      default: null
    },
    padding: {
      default: '.13rem .15rem'
    }
  }
}
</script>

<style lang="less" scoped>
.cell {
  background: #fff;

  &:active {
    opacity: 0.5;
  }

  &::after {
    left: 0.13rem;
  }

  &:last-child::after {
    border: none;
  }

  .f32 {
    font-size: 0.16rem;
    color: #030303;
    line-height: 0.22rem;
  }

  .icon {
    color: #768893;
  }
}
</style>
