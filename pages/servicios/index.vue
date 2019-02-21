<template>
  <div class="bg-teal h-screen w-full flex justify-center items-center ">
    <Modal
      v-if="modal"
      :hasForm="true"
      :formProps="formProps"
      :render="__render"
      @closeModal="closeModal"
    />
    <button class="border-2 bg-yellow font-bold p-3 text-3xl rounded-lg" style="border-color: black;" @click="modal = !modal">
      ABRIR MODAL
    </button>
  </div>
</template>

<script type="text/javascript">
import Modal from '~/components/general/Modal.vue'
export default {
  components: {
    Modal
  },
  data() {
    return {
      modal: false,
      formProps: {
        customClass:
          'bg-white rounded-lg border-2 text-sm sm:text-base h-12 px-3 md:text-lg text-black border-2 w-full',
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
              },
              {
                name: 'Needs',
                vmodel: '',
                type: 'select',
                requiredMessage: 'Este campo es obligatorio',
                validMessage: 'El campo contiene contenido no válido',
                isValid: false,
                placeholder: 'Selecciona un servicio',
                options: [
                  {
                    value: 'Web Inteligente',
                    text: 'Web Inteligente'
                  },
                  {
                    value: 'Chatbot con inteligencia artificial',
                    text: 'Chatbot con inteligencia artificial'
                  },
                  {
                    value: 'Página Web',
                    text: 'Página Web'
                  },
                  {
                    value: 'E-commerce / Catálogo online',
                    text: 'E-commerce / Catálogo online'
                  },
                  {
                    value: 'Aplicación móvil',
                    text: 'Aplicación móvil'
                  },
                  {
                    value: 'Campaña de Redes Sociales',
                    text: 'Campaña de Redes Sociales'
                  },
                  {
                    value: 'Campaña de Google Adwords',
                    text: 'Campaña de Google Adwords'
                  },
                  {
                    value: 'Identidad Corporativa',
                    text: 'Identidad Corporativa'
                  },
                  {
                    value: 'Otros',
                    text: 'Otros'
                  }
                ]
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
                placeholder: 'Escribe un mensaje...',
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
    },
    __render() {
      return '<p class="p-3 text-4xl">HOLA MUNDO<p/>'
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
</style>
