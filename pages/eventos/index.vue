<template>
  <div class="bg-blue h-screen w-full flex justify-center items-center">
    <div class="bg-black-dark flex justify-center items-center w-full">
      {{ this.$router.push('/eventos/coast')}}
    </div>
  </div>
</template>

<script type="text/javascript">
// import Slider from '~/components/general/SliderEventos.vue'
// import Modal from '~/components/general/Modal.vue'
export default {
  components: {
    // Slider,
    // Modal
  },
  data() {
    return {
      modalTitle: '¡INSCRÍBETE!',
      modalSubtitle: 'Rellena tus datos en el siguiente formulario.',
      modalbool: false,
      heightSlider: 'height: 100vh;',
      customStyle: 'border-radius: 0px; background-color: transparent;',
      customClassSwiper: 'h-full w-full',
      swiperOption: {
        // USED FOR AUTOPLAY: 1000 = 1s
        speed: 4000,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true
        },
        lazy: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
            return `<span class="${className} swiper-pagination-bullet-white"></span>`
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods: {
    __render(item) {
      return (
        '<h1 class="text-black font-bold text-center p-3">' +
        this.modalTitle +
        '</h1>' +
        '<h2 class="text-black text-center p-3">' +
        this.modalSubtitle +
        '</h2>'
      )
    }
  }
}
</script>

<style>
/* BACKGROUND FOR THE PORTRAIT OF SERVICES */
.bg-services {
  background-position: 50% 50%;
  /* background-image: url('/portrait-us.png'); -- CHANGE THIS*/
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-black-dark {
  background-color: #00000059;
}
</style>
