<template>
  <div class="bg-products h-screen w-full flex justify-start items-center">
    <div class="text-center z-50 ml-6" :style="widthSlider">
      <p class="md:text-xl text-base font-bold text-white">
        VIDEOS
      </p>
      <img width="80" src="youtube_logo.png" class="p-3 youtube_logo" alt="youtube_logo">
      <Slider
        :items="items"
        :heightSlider="heightSlider"
        :widthSlider="widthSlider"
        :customClass="customClass"
        :swiperOption="swiperOption"
        :hasPagination="false"
        :hasArrows="false"
        style="background-color: #00000055"
        @femit="actualRef = $event"
      />
    </div>
    <div v-if="actualRef !== ''" class="absolute w-full h-full" :style="'background-image: url(\''+ actualRef +'\');background-repeat: no-repeat; background-size: cover; background-position: center;'" />
    <div v-else class="absolute w-full h-full bg-transparent" />
  </div>
</template>

<script type="text/javascript">
import Slider from '~/components/general/SliderGallery.vue'
export default {
  components: {
    Slider
  },
  data() {
    return {
      actualRef: '',
      // PROPORTION BETWEEN HEIGHT AND WIDTH DEPENDS OF THE NUMBER OF 'slidesPerView' IN 'swiperOption' EX: 4/1 BECAUSE IS 4
      heightSlider: 'height: 40vh;',
      widthSlider: 'width: 10vh;',
      customClass: 'p-2',
      hasNuxtLink: false,
      swiperOption: {
        // USED FOR AUTOPLAY: 1000 = 1s
        direction: 'vertical',
        // loop: true,
        speed: 3000,
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 0,
        // effect: 'fade',
        autoplay: {
          delay: 0,
          disableOnInteraction: true
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
            return `<span class="${className} swiper-pagination-bullet-white">
              </span>`
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      items: [
        {
          ref:
            'https://croatia.hr/sites/default/files/styles/image_full_width/public/2017-08/02_01_slide_nature.jpg?itok=ItAHmLlp'
        },
        {
          ref:
            'https://wonderfulengineering.com/wp-content/uploads/2016/01/nature-wallpapers-10.jpg'
        },
        {
          ref:
            'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_41255987.jpg?crop=0,349,3182,1750&wid=4000&hei=2200&scl=0.7955'
        },
        {
          ref:
            'https://pi.tedcdn.com/r/tedideas.files.wordpress.com/2017/11/featured_art_disappearing_sounds_istock.jpg?'
        },
        {
          ref:
            'https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2018/natureinstee.jpg'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style>
/* BACKGROUND FOR THE PORTRAIT OF SERVICES */
.bg-products {
  background-position: 50% 50%;
  background-image: url('https://bhwp.org/wp-content/uploads/night-trees-stars.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.youtube_logo:hover {
  transition: all 0.5 ease;
}
.youtube_logo:hover {
  transform: scale(1.3);
}
</style>
