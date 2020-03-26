<template>
  <div id="app">
    <router-view />
    <FooterGuide v-show="$route.meta.isShowFooter" />
  </div>
</template>
<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  created () {

  },
  components: {
    FooterGuide
  },

  methods: {
  }
}
</script>
<style lang="stylus" sccoped>
#app
  font-size 30px
</style>
