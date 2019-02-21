<template lang="html">
  <transition name="fade" mode="out-in">
    <div class="absolute flex justify-center items-center h-screen w-screen p-4" style="background: #000000ee; z-index: 9999;" @click.self="closeModal">
      <div class="flex flex-col justify-center items-center pin md:w-2/3 sm:w-4/5 p-4" :style="customStyle">
        <div v-if="render !== null" v-html="render()" />
        <Formulario v-if="hasForm" :formProps="formProps" />
      </div>
      <div class="absolute pin-r pin-t pt-24 pr-10" @click="closeModal">
        <div class="aspa cursor-pointer" />
      </div>
    </div>
  </transition>
</template>

<script>
import Formulario from '~/components/general/Formulario.vue'
export default {
  components: {
    Formulario
  },
  props: {
    // FUNCTION TO RENDER SOMETHING THAT IS ONLY HTML AND ITS ITEMS
    render: {
      type: Function,
      default: null
    },
    items: {
      type: Array,
      default: null
    },
    // PROPS TO CREATE A FORM
    hasForm: {
      type: Boolean,
      default: false
    },
    formProps: {
      type: Object,
      default: null
    },
    // FUNCTION SENT BY THE PARENT TO DO SOMETHING
    parentFunction: {
      type: Function,
      default: null
    },
    customStyle: {
      type: String,
      default: 'background-color: white; border-radius: 30px;'
    }
  },
  methods: {
    closeModal() {
      // console.log('CERRANDO MODAL')
      this.$emit('closeModal')
    }
  }
}
</script>

<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.aspa {
    height: 50px;
    width: 50px;
    background-color: #FA6900;
    border-radius: 5px;
    position: relative;
}
.aspa:after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: "\274c";
    font-size: 42px;
    color: #FFF;
    text-align: center;
    align-items: center;
}
</style>
