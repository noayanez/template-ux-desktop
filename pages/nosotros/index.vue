<template>
  <div class="bg-us h-screen w-full flex flex-col justify-center items-center ">
    <!-- SWIPER IN SLIDER COMPONENT -->
    <div class="py-4">
      <p class="bg-black-dark rounded-lg text-white text-5xl text-center font-bold p-3">
        {{ pageTitle }}
      </p>
    </div>
    <div class="bg-black-darkest flex justify-center items-center w-full">
      <!-- SWIPER IN SLIDER COMPONENT -->
      <Slider
        :items="items"
        :render="__render"
        :swiperOption="swiperOption"
        :customStyle="customStyle"
        :customClassSwiper="customClassSwiper"
        :customClassRender="customClassRender"
        :btnMoveColor="btnMoveColor"
        :hasNuxtLink="hasNuxtLink"
        :customNuxtLink="customNuxtLink"
      />
    </div>
  </div>
</template>

<script type="text/javascript">
import Slider from '~/components/general/SliderCustom.vue'
export default {
  components: {
    Slider
  },
  data() {
    return {
      pageTitle: '¡CONÓCENOS!',
      offcanvas: true,
      // OPTIONS FOR THE SLIDER USED HERE
      customStyle:
        'height: 100%; border-radius: 0px; background-color: #00000059;',
      customClassSwiper: 'flex-col',
      customClassRender: 'self-center',
      hasNuxtLink: true,
      customNuxtLink:
        'background-color: yellow; border-radius: 10px; color: black; border-width: 2px; border-color: black;',
      btnMoveColor: 'swiper-button-yellow',
      swiperOption: {
        loop: true,
        speed: 2000,
        slidesPerView: 1,
        spaceBetween: 20,
        // USED FOR AUTOPLAY: 1000 = 1s
        autoplay: {
          delay: 2000,
          disableOnInteraction: true
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
            return `<span class="${className} swiper-pagination-bullet-yellow">
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
          title: '¿PORQUÉ USAR LINKEDIN?',
          imgShow: 'http://msmperu.com/images/NOSOTROS/nosotros_1.jpg',
          subtitle: 'Est ubi transferrem, legam ex voluptate ubi illum.',
          nuxtlink: {
            text: 'VER',
            ref: '/nosotros/porque-usar-linkedin'
          }
        },
        {
          title: 'CONOCE MÁS SOBRE MÍ',
          imgShow: 'http://msmperu.com/images/NOSOTROS/nosotros_2.jpg',
          subtitle:
            'Elit relinqueret pariatur anim incididunt, eu quo arbitrantur.',
          nuxtlink: {
            text: 'VER',
            ref: '/nosotros/conoce-sobre-mi'
          }
        },
        {
          title: '¿QUÉ HACEMOS?',
          imgShow: 'http://msmperu.com/images/NOSOTROS/nosotros_3.jpg',
          subtitle: 'Id sunt pariatur quibusdam non ipsum sempiternum.',
          nuxtlink: {
            text: 'VER',
            ref: '/nosotros/que-hacemos'
          }
        },
        {
          title: 'NUESTROS CLIENTES',
          imgShow: 'http://msmperu.com/images/NOSOTROS/nosotros_4.jpg',
          subtitle: 'Veniam occaecat litteris, nam quid ubi multos.',
          nuxtlink: {
            text: 'VER',
            ref: '/nosotros/nuestros-clientes'
          }
        }
      ]
    }
  },
  methods: {
    __render(item) {
      return (
        '<div class="flex flex-col justify-center items-center p-3 pb-0 w-full h-full">' +
        '<div class="w-full h-full flex flex-col justify-center items-center">' +
        '<p class="p-3 text-center text-white text-4xl font-bold py-5">' +
        item.title +
        '</p>' +
        '<img src="' +
        item.imgShow +
        '" class="rounded-lg" width="100%">' +
        '</div>' +
        '<div class="flex flex-wrap justify-center items-center p-3">' +
        '<p class="p-3 text-center text-white text-xl">' +
        item.subtitle +
        '</p>' +
        '</div>' +
        '</div>'
      )
    }
  }
}
</script>

<style>
/* BACKGROUND FOR THE PORTRAIT OF US*/
.bg-us {
  background-position: 50% 50%;
  background-image: url('/portrait-us.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-black-darkest {
  background-color: #000000a8;
}
.bg-black-dark {
  background-color: #00000059;
}
.btn-see {
  background-color: yellow;
  border-radius: 5px;
  /* border-color: black;
  border-width: 2px; */
  color: white;
}
</style>
