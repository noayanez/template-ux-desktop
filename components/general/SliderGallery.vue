<template lang="html">
  <swiper class="" style="max-height: 80vh;" :options="swiperOption" :style="heightSlider">
    <swiper-slide v-for="(item,i) in items" :key="i" class="flex justify-center items-center" :class="customClass" :style="widthSlider">
      <div
        class="cursor-pointer w-full h-full rounded-lg hoverWhited"
        :style="'background-image: url(' + item.ref + '); background-repeat: no-repeat; background-size: cover; background-position: center; z-index: 90;'"
        @click="$emit('femit',item.ref)"
      />
    </swiper-slide>
    <div v-if="hasPagination" slot="pagination" class="swiper-pagination" />
    <div v-if="hasArrows" slot="button-prev" class="fixed swiper-button-prev swiper-button-yellow" :style="swiperOption.direction === 'vertical'? 'transform: rotate(90deg); top:0; left: 35%;':''" />
    <div v-if="hasArrows" slot="button-next" class="block swiper-button-next swiper-button-yellow" :style="swiperOption.direction === 'vertical'? 'transform: rotate(90deg); bottom:0; left: 35%;':''" />
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  props: {
    // ITEMS AND FUNCTION TO RENDER THEM
    items: {
      type: Array,
      default: null
    },
    render: {
      type: Function,
      default: null
    },
    // SEVERAL STYLES FOR THE SLIDER AND IT'S COMPONENTS
    heightSlider: {
      type: String,
      default: ''
    },
    widthSlider: {
      type: String,
      default: ''
    },
    customClass: {
      type: String,
      default: ''
    },
    swiperOption: {
      type: Object,
      default: null
    },
    // TURN ON/OFF NUXT LINK RENDERIZATION
    hasNuxtLink: {
      type: Boolean,
      default: false
    },
    // TURN ON/OFF PAGINATION
    hasPagination: {
      type: Boolean,
      default: true
    },
    // TURN ON/OFF NAVIGATION WITH ARROWS
    hasArrows: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="css">
/* STYLE FOR THE SWIPER AND ITS PAGINATION */
.swiper-pagination-bullet-black,
.swiper-pagination-bullet-white,
.swiper-pagination-bullet-yellow
.swiper-pagination-bullet-red {
  width: 12px;
  height: 12px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #000000;
  opacity: 1;
}
.swiper-pagination-bullet-black {
  background: #00000088;
}
.swiper-pagination-bullet-black.swiper-pagination-bullet-active {
  color: #ffffff;
  background: #000000;
}
.swiper-pagination-bullet-white {
  background: #ffffff88;
}
.swiper-pagination-bullet-white.swiper-pagination-bullet-active {
  color: #000000;
  background: #ffffff;
}
.swiper-pagination-bullet-yellow {
  background: #ffff0044;
}
.swiper-pagination-bullet-yellow.swiper-pagination-bullet-active {
  color: #000000;
  background: #ffff00;
}
.swiper-pagination-bullet-red {
  background: #ff000088;
}
.swiper-pagination-bullet-red.swiper-pagination-bullet-active {
  color: #ffffff;
  background: #ff0000;
}
/* CAN CHANGE THIS 2 ELEMENTS TO CREATE NEW COLORED ARROWS FOR THE NAVIGATION IN SLIDER */
/* JUST REPLACE THE PART ffff00 IN '%23ffff00' TO SET A NEW COLOR */
.swiper-button-prev.swiper-button-yellow {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffff00'%2F%3E%3C%2Fsvg%3E") !important;
}
.swiper-button-next.swiper-button-yellow {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffff00'%2F%3E%3C%2Fsvg%3E") !important;
}
.swiper-button-prev.swiper-button-red {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ff0000'%2F%3E%3C%2Fsvg%3E") !important;
}
.swiper-button-next.swiper-button-red {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ff0000'%2F%3E%3C%2Fsvg%3E") !important;
}
</style>
