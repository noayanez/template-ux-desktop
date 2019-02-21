<template>
  <div class="w-screen h-screen overflow-hidden" style="background-color: #000000;">
    <!-- THE NAVEGATION BAR USED TO GO THROUGH COMPONENTS -->
    <NavBar />
    <!-- FOOTER THAT DOESN'T APPEAR IN CONTACT'S COMPONENT -->
    <Footer />
    <!-- IT CALLS INDEX.VUE INSIDE THE PAGES FOLDER -->
    <nuxt />
  </div>
</template>

<script>
// import NavBar from '~/components/NavBar.vue'
import NavBar from '~/components/general/NavBar.vue'
import Footer from '~/components/general/Footer.vue'
export default {
  components: {
    // NavBar,
    NavBar,
    Footer
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter,
.page-leave-active {
  opacity: 0.2;
}
</style>
