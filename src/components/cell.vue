<template>
  <a class="cell flex flex-center border border-b can-click"
     :class="{'none-border':noneBorder}">
    <slot></slot>
    <p class="flex-full f32">{{text}}</p>
    <i class="icon iconfont icon-arrow-right"></i>
  </a>
</template>

<script>
export default {
  name: 'cell',
  props: {
    text: String,
    noneBorder: {
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
.cell {
  background: #fff;
  padding: 0.13rem 0.15rem;

  &:active {
    // opacity: 0.5;
    background: #e8eff0;
  }

  &::after {
    left: 0.13rem;
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

.none-border {
  &:last-child::after {
    border: none;
  }
}
</style>
