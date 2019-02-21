<template lang="html">
  <div class="flex justify-center items-center h-screen w-screen" style="background: #000000;">
    <div class="flex flex-col justify-center items-center pin md:w-2/3 sm:w-4/5 p-4">
      <p class="text-5xl text-white font-bold p-3 text-center">
        {{ customMessage }}
      </p>
      <p class="text-4xl text-white p-3 text-center">
        {{ "Página: '" + path + "'" }}
      </p>
      <div class="p-3">
        <nuxt-link to="/">
          <button class="cursor-pointer border-2 border-black bg-teal p-3 rounded-lg text-3xl font-bold">
            Ir al inicio
          </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // FUNCTION TO RENDER SOMETHING THAT IS ONLY HTML AND ITS ITEMS
    path: {
      type: String,
      default: 'null'
    },
    customMessage: {
      type: String,
      default: 'LA PAGINA NO HA SIDO ENCONTRADA.'
    }
  },
  methods: {}
}
</script>

<style lang="css">
</style>
