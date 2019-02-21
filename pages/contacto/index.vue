<template>
  <div class="bg-blue-light h-screen w-full flex justify-center items-center ">
    <div class="xl:block hidden xl:w-1/3 h-full">
      <div class="abosulte flex flex-col justify-center items-start col-clip-left w-full h-full bg-white bg-cover bg-center bg-white pin-l pl-10 pr-6">
        <div v-for="(item, i) in items" :key="i" class="p-4">
          <p class="flex justify-start items-center text-4xl p-4 font-bold text-black">
            {{ item.title }}
          </p>
          <div v-if="item.typeComponent === 1" class="flex flex-col justify-center items-start">
            <div v-for="(inf, j) in item.information" :key="j" class="flex justify-start items-center p-4">
              <img :src="inf.imgShow" class="px-3">
              <div v-if="inf.ref !== ''" class="">
                <p v-for="(t,k) in inf.text" :key="k" class="text-xl text-black p-1">
                  {{ t }}
                </p>
              </div>
              <div v-else class="">
                <a :href="inf.ref" class="text-xl text-black">
                  <p v-for="(t,k) in inf.text" :key="k" class="p-1">
                    {{ t }}
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div v-else class="flex justify-start items-center p-3">
            <div v-for="(inf, j) in item.information" :key="j" class="flex justify-start items-center px-3">
              <img :src="inf.imgShow" :href="inf.ref" class="cursor-pointer hoverScale">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center xl:w-2/3 w-full h-full">
      <div class="flex flex-col justify-center items-center sm:w-4/5 w-full sm:p-0 p-2">
        <p class="text-2xl sm:text-4xl md:text-5xl font-bold p-3 text-center w-full">
          {{ formTitle }}
        </p>
        <p class="text-lg sm:text-2xl md:text-4xl font-bold p-3 text-center w-full">
          {{ formSubtitle }}
        </p>
        <Formulario :formProps="formProps" />
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import Formulario from '~/components/general/Formulario.vue'
export default {
  components: {
    Formulario
  },
  data() {
    return {
      modal: false,
      formTitle: '¡ÚNETENOS!',
      formSubtitle: '¡RELLENA EL FORMULARIO Y NOS CONTÁCTAREMOS CONTIGO!',
      items: [
        {
          typeComponent: 1,
          title: 'VISÍTANOS',
          information: [
            {
              imgShow: 'http://msmperu.com/images/icons/ubicacion_icono.png',
              text: ['Miraflores'],
              ref: ''
            },
            {
              imgShow: 'http://msmperu.com/images/icons/correo_icono.png',
              text: ['info@msmperu.com'],
              ref: 'mailto:info@msmperu.com'
            },
            {
              imgShow: 'http://msmperu.com/images/icons/cel_icono.jpg',
              text: ['(+51) 954 139 731', '(+51) 927 728 956'],
              ref: ''
            }
          ]
        },
        {
          typeComponent: 2,
          title: 'SÍGUENOS',
          information: [
            {
              imgShow: 'http://msmperu.com/images/icons/whatsapp.png',
              ref: 'https://web.whatsapp.com/send?phone=(+51)%20954%20139%20731'
            },
            {
              imgShow: 'http://msmperu.com/images/icons/linkedin.png',
              ref: 'https://www.linkedin.com/in/mauricio-solis/'
            },
            {
              imgShow: 'http://msmperu.com/images/icons/facebook.png',
              ref: 'https://www.facebook.com/msmperugeneraciondedemanda/'
            },
            {
              imgShow: 'http://msmperu.com/images/icons/instagram.png',
              ref: 'https://www.instagram.com/msmgeneraciondedemanda/'
            }
          ]
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
                placeholder: 'Cuéntanos sobre ti...',
                options: []
              }
            ]
          }
        ]
      }
    }
  },
  methods: {
    closeModal() {
      this.modal = false
    }
  }
}
</script>

<style>
@screen lg {
  .col-clip-left {
    clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
  }
}
/* BACKGROUND FOR THE PORTRAIT OF SERVICES */
/* .bg-services {
background-position: 50% 50%;
background-image: url('/portrait-us.png'); -- CHANGE THIS
background-repeat: no-repeat;
background-size: cover;
} */
.hoverScale {
  transition: all 0.5s ease;
}
.hoverScale:hover {
  transform: scale(1.3);
  font-weight: bold;
}
</style>
