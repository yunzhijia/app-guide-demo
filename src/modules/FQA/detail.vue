<template>
  <section class="qa-detail fixed-page common-scroller">
    <img v-if="data&&data.banner"
         :src="bannerSrc"
         class="banner">
    <div class="inner-content"
         v-if="!isText">
      <content-list :appId="query.appId"
                    :content="data.answer"></content-list>
    </div>
    <div v-else
         class="text-content">
      <h3 class="title">{{data.question}}</h3>
      <p v-if="isString"
         class="content">
        {{data.answer}}
      </p>
      <div v-else>
        <p class="content"
           v-for="(str,index) in data.answer">
          {{str}}
        </p>
      </div>
    </div>
    <!-- <footer-btn :store="store.state"></footer-btn> -->
  </section>
</template>

<script>
export default {
  inject: ['query', 'store'],
  computed: {
    data () {
      return this.store.target
    },
    isString () {
      return typeof this.data.answer === 'string'
    },
    isText () {
      if (Array.isArray(this.data.answer) && this.data.answer.length) {
        if (typeof this.data.answer[0] === 'string') {
          return true
        }
      } else {
        return this.isString
      }
    },
    pixUrl () {
      return `static/public/${this.query.appId}/imgs/`
    },
    bannerSrc () {
      return this.query.form ? this.data.banner : (this.pixUrl + this.data.banner)
    }
  }
}
</script>

<style lang="less" scoped>
.qa-detail {
  background: #fff;
  bottom: 0.43rem;
}
.inner-content {
  padding: 0.24rem 0.12rem 0.48rem 0.12rem;
}
.banner {
  width: 100%;
  // margin-bottom: 0.24rem;
}
.text-content {
  padding: 0.3rem 0.27rem;
}

.title {
  color: #1d1d1d;
  font-size: 17px;
  line-height: 0.22rem;
  font-family: PingFangSC-Medium;
  font-weight: bold;
  font-weight: 700;
}
.content {
  color: #030303;
  font-size: 16px;
  line-height: 0.2rem;
  margin-top: 0.11rem;
}
</style>
