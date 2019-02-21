<template>
  <div class="z-10 absolute flex flex-row justify-center items-center pin-b footer-form">
    <div class="flex justify-center items-center">
      <div class="text-sm font-bold text-black px-3">
        <p style="user-select: none;">
          Powered by:
        </p>
      </div>
      <div class="p-1">
        <a href="https://prodequa.com/">
          <img src="http://msmperu.com/images/icons/prodequa_logo.png" alt="whatsapp" class="cursor-pointer md:w-24 w-16">
        </a>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <div v-for="(item,i) in items" :key="i" class="md:p-3 p-2">
        <a :href="item.ref">
          <img :src="item.showIcon" alt="" class="cursor-pointer w-8">
        </a>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      // CHANGE THIS PART TO ADD MORE ICON TO THE FOOTER
      items: [
        {
          showIcon: 'http://msmperu.com/images/icons/whatsapp.png',
          ref: ''
        },
        {
          showIcon: 'http://msmperu.com/images/icons/linkedin.png',
          ref: ''
        }
      ]
    }
  }
}
</script>

<style>
.footer-form {
  border-top-right-radius: 20px;
  background-color: #fafafad1;
}
</style>
