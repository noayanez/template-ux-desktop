<template>
  <div class="bg-minning h-screen w-full flex flex-row justify-start items-center">
    <div class="bg-black-darkest xl:w-1/3 md:w-3/5 w-full p-10 xl:rounded-r-lg">
      <div class="md:text-left text-center text-yellow font-bold sm:text-4xl text-3xl py-2">
        <p>FABRICACIÓN DE REACTIVOS PARA LA MINERÍA</p>
      </div>
      <div class="md:text-left text-center text-white sm:text-lg text-base py-2">
        <p>Primera planta de Sudamérica</p>
      </div>
      <div class="md:block flex justify-center items-center py-4 w-full">
        <nuxt-link to="/" class="text-black font-bold btn-see-more p-3">
          SABER MÁS
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

<style>
/* USED IN MENU ICON */
.bar {
  border-radius: 10px;
  width: 30px;
  height: 5px;
  background-color: black;
}
/* BACKGROUND FOR THE MAIN PORTRAIT */
.bg-minning {
  background-position: 50% 50%;
  background-image: url('/professional.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-black-darkest {
  background-color: #000000a8;
}
.btn-see-more {
  background-color: yellow;
  border-radius: 5px;
}
</style>
