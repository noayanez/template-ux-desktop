<template lang="html">
  <div class="">
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    }
  },
  mounted() {
    this.message = this.$route.params.slug
  }
}
</script>

<style lang="css">
</style>
