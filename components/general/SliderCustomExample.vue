<template lang="html">
  <swiper class="w-full h-32" :options="swiperOption">
    <swiper-slide v-for="(item,i) in items" :key="i" class="w-full bg-grey flex justify-center items-center text-5xl font-bold">
      {{ item.title }}
    </swiper-slide>
    <!-- Add Pagination -->
    <div slot="pagination" class="swiper-pagination" />
    <div slot="button-prev" class="swiper-button-prev swiper-button-black" />
    <div slot="button-next" class="swiper-button-next swiper-button-black" />
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
  data() {
    return {
      items: [
        {
          title: '1'
        },
        {
          title: '2'
        },
        {
          title: '3'
        }
      ],
      swiperOption: {
        // direction: 'vertical',
        loop: true,
        speed: 2000,
        slidesPerView: 1,
        spaceBetween: 30,
        // USED FOR AUTOPLAY: 1000 = 1s
        autoplay: {
          delay: 2000,
          disableOnInteraction: true
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
            return `<span class="${className} swiper-pagination-bullet-black">
              </span>`
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
    routePush(ref) {
      this.$route.push(ref)
    }
  }
}
</script>

<style lang="css">
/* STYLE FOR THE SWIPER AND ITS PAGINATION */
.swiper-pagination-bullet-black,
.swiper-pagination-bullet-white,
.swiper-pagination-bullet-yellow {
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
</style>
