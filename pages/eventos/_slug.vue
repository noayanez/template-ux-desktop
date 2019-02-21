<template lang="html">
  <div class="bg-blue flex justify-center items-center w-screen h-full">
    <div v-if="dataFetched !== ''" class="">
      <div v-if="isHere(this.$route.params.slug)" class="">
        <div v-for="(data,i) in dataFetched" :key="i" class="flex justify-center h-full" style="maxHeight: 80vh;">
          <div
            v-if="data.slug === $route.params.slug"
            class="flex justify-start items-center h-full w-screen"
            :style="'background-image: url(' + buscarBg(data.slug) + '); background-repeat: no-repeat; background-size: cover; background-position: center;'"
          >
            <div class="col-clip-left bg-white h-full xl:w-1/2 lg:w-3/4 w-full flex lg:justify-start justify-center items-center md:p-10 p-2">
              <div class="flex flex-col items-start md:w-5/6 w-full p-2">
                <p class="md:text-4xl sm:text-3xl text-xl font-bold md:p-3 p-1 uppercase">
                  {{ data.slug }}
                </p>
                <p class="md:text-xl sm:text-base text-sm md:p-3 p-1 text-justify scroollable-div overflow-y-auto">
                  {{ data.description }}
                </p>
              </div>
            </div>
            <div v-if="i>0" class="absolute pin-l flex justify-center items-center">
              <nuxt-link :to="dataFetched[i-1].slug">
                <img src="/arrow-left.png" class="leftArrow cursor-pointer" width="50">
              </nuxt-link>
            </div>
            <div v-if="i<dataFetched.length-1" class="absolute pin-r flex justify-center items-center">
              <nuxt-link :to="dataFetched[i+1].slug">
                <img src="/arrow-right.png" class="rightArrow cursor-pointer" width="50">
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <PageNotFound v-else :path="$route.params.slug" />
    </div>
    <Modal
      v-if="modalbool"
      :hasRender="true"
      :render="__render"
      :hasForm="true"
      :formProps="formProps"
      @closeModal="modalbool=false"
    />
  </div>
</template>

<script>
import Modal from '~/components/general/Modal.vue'
import PageNotFound from '~/components/general/PageNotFound.vue'
export default {
  components: {
    Modal,
    PageNotFound
  },
  data() {
    return {
      dataFetched: '',
      modalTitle: '¡INSCRÍBETE!',
      modalSubtitle: 'Rellena tus datos en el siguiente formulario.',
      modalbool: false,
      heightSlider: 'height: 70vh;',
      customStyle: 'border-radius: 0px; background-color: transparent;',
      customClassSwiper: 'h-full w-full',
      bgs: [
        {
          slug: 'coast',
          ref:
            'https://blog.inmobilia.com/wp-content/uploads/2016/02/beaches-peru.jpg'
        },
        {
          slug: 'highlands',
          ref:
            'https://img.elcomercio.pe/files/ec_article_multimedia_gallery/uploads/2017/05/31/592f051b4b406.jpeg'
        },
        {
          slug: 'jungle',
          ref:
            'https://d1bvpoagx8hqbg.cloudfront.net/originals/5-destinos-debes-visitar-rumbo-a-selva-central-peru-7af247c27ac2f9e5865a5097bfd2e9a8.jpg'
        }
      ],
      formProps: {
        customClass:
          'bg-white rounded-lg border-2 text-sm sm:text-base px-3 md:text-lg text-black border-2 w-full h-12',
        customStyle: 'outline: none;',
        columns: [
          {
            items: [
              {
                name: 'Name',
                vmodel: '',
                type: 'input',
                requiredMessage: 'Este campo es obligatorio',
                validMessage: 'El campo contiene contenido no válido',
                isValid: false,
                format: 'text',
                placeholder: 'Nombre Completo'
              },
              {
                name: 'Email',
                vmodel: '',
                type: 'input',
                requiredMessage: 'Este campo es obligatorio',
                validMessage: 'El campo contiene contenido no válido',
                isValid: false,
                format: 'text',
                placeholder: 'Correo'
              },
              {
                name: 'Phone',
                vmodel: '',
                type: 'input',
                requiredMessage: 'Este campo es obligatorio',
                validMessage: 'El campo contiene contenido no válido',
                isValid: false,
                format: 'text',
                placeholder: 'Celular'
              }
            ]
          },
          {
            items: [
              {
                name: 'Source',
                vmodel: '',
                type: 'select',
                requiredMessage: 'Este campo es obligatorio',
                validMessage: 'El campo contiene contenido no válido',
                isValid: false,
                placeholder: '¿Cómo te enteraste?',
                options: [
                  { value: 'Google', text: 'Google' },
                  { value: 'Facebook', text: 'Facebook' },
                  { value: 'Instagram', text: 'Instagram' },
                  { value: 'Behance', text: 'Behance' },
                  { value: 'Youtube', text: 'Youtube' },
                  { value: 'Linkedin', text: 'Linkedin' },
                  { value: 'Mailing', text: 'Mailing' },
                  { value: 'Recomendación', text: 'Recomendación' },
                  { value: 'Otros', text: 'Otros' }
                ]
              },
              {
                name: 'Message',
                vmodel: '',
                type: 'text-area',
                requiredMessage: 'Este campo es obligatorio',
                validMessage: 'El campo contiene contenido no válido',
                isValid: false,
                format: 'text',
                placeholder: '¿Qué esperas del evento?',
                options: []
              }
            ]
          }
        ]
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
    },
    buscarBg(slug) {
      for (var i = 0; i < this.bgs.length; i++) {
        if (this.bgs[i].slug === slug) {
          console.log(slug + ' === ' + this.bgs[i].slug)
          return this.bgs[i].ref
        } else {
          console.log(slug + ' !== ' + this.bgs[i].slug)
        }
      }
      return ''
    },
    isHere(slug) {
      console.log('BUSCANDO: ' + slug)
      for (var i = 0; i < this.bgs.length; i++) {
        if (this.bgs[i].slug === slug) {
          console.log(slug + ' === ' + this.bgs[i].slug)
          return true
        }
      }
      return false
    }
  },
  async mounted() {
    const n = await this.$axios.$get(
      'https://api.tunkitravel.com/site/basics/natural-region'
    )
    console.log(n)
    console.log(this.$route.params.slug)
    this.dataFetched = n
  }
}
</script>

<style lang="css">
.leftArrow {
  transition: all 0.5s ease;
}
.leftArrow:hover{
  transform: scale(1.3);
}
.rightArrow {
  transition: all 0.5s ease;
}
.rightArrow:hover{
  transform: scale(1.3);
}
</style>
