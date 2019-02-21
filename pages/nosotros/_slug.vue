<template lang="html">
  <div class="bg-red flex justify-center items-center w-full h-full">
    <div v-for="(item,i) in items" :key="i">
      <!-- BELOW THIS THERE IS A FUNCTIONALITY TO RENDER DIFFERENTLY IF THE OPTION IN THE SLIDER IS A PAIR OPTION OR NOT -->
      <div v-if="actualPath==item.path" class="flex justify-center items-center w-full h-screen md:px-24 sm:px-8 px-4">
        <!-- THIS PART IS TEXT AND BUTTON -->
        <div class="bg-black-darkest rounded-lg flex justify-around items-center w-full py-8" :class="i%2==0? 'flex-row flex-wrap' : 'flex-row-reverse flex-wrap-reverse'">
          <div class="flex flex-col justify-center items-center lg:w-1/2 w-full lg:px-6 sm:px-12 px-6" :class="i%2==0? 'lg:border-r-2 lg:border-white' : 'lg:border-l-2 lg:border-white'">
            <div class="w-full text-2xl font-bold text-white p-3 text-center">
              {{ item.title }}
            </div>
            <div class="w-full xl:text-lg text-base text-justify text-white p-3 md:m-0 m-3 lg:overflow-y-hidden overflow-y-auto scroollable-div rounded-lg" style="background: #ffffff11">
              <p v-for="(txt,j) in item.text" :key="j" class="p-3">
                {{ txt }}
              </p>
            </div>
            <div v-if="item.button.type=='internal'" class="flex justify-center items-center p-4">
              <div class="flex justify-center items-center h-12">
                <nuxt-link class="flex justify-center items-center cursor-pointer btn-visit h-full w-full p-3" :to="item.button.ref">
                  <span class="cursor-pointer text-black font-bold text-center">
                    {{ item.button.text }}
                  </span>
                </nuxt-link>
              </div>
            </div>
            <div v-else-if="item.button.type=='external'" class="flex justify-center items-center p-4">
              <a class="flex justify-center items-center btn-visit h-12" :href="item.button.ref">
                <span class="cursor-pointer text-black font-bold text-center h-full w-full p-3">
                  {{ item.button.text }}
                </span>
              </a>
            </div>
          </div>
          <!-- THIS PART IS THE IMAGE -->
          <div class="lg:w-1/2 w-3/4">
            <div class="w-full text-2xl text-white p-6">
              <img :src="item.imgShow" class="w-full rounded-lg"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      actualPath: '',
      items: [
        {
          path: 'porque-usar-linkedin',
          title: '¿POR QUÉ USAR LINKEDIN?',
          text: [
            'Es el Google de los profesionales. Es importante que tengas un perfil activo y atractivo para hacer negocios, ya sea si trabajas para alguna empresa o si eres independiente.',
            'Actualmente, Linkedin es la mayor red profesional del mundo pues posee más de 500 millones de usuarios en 200 países y territorios en todo el planeta.',
            'En Perú son 5 millones y el 45% de los usuarios son decisores de negocios, ocupando cargos como dueños de empresas, inversionistas y altos ejecutivos.'
          ],
          imgShow: 'http://msmperu.com/images/NOSOTROS/nosotros_1.jpg',
          imgSlider: [],
          button: {
            text: 'CONÓCENOS',
            ref: 'https://www.linkedin.com/company/msm-peru/',
            type: 'external'
          }
        },
        {
          path: 'conoce-sobre-mi',
          title: 'CONOCE MÁS SOBRE MÍ, LOLO',
          text: [
            'Mi nombre es Mauricio Solis Medina y soy Founder & CEO de MSM Generación de Demanda.',
            'Soy cinturón negro en planeamiento estratégico, marketing y comercial. Me encargo de los planes de expansión de MSM Generación de Demanda y,' +
              'todo nuestro equipo, tiene como consigna la exportación de nuestros servicios a la región y Latam.',
            'Líder del servicio de tercerización del company page de marcas y personas en Linkedin.'
          ],
          imgShow: 'http://msmperu.com/images/NOSOTROS/nosotros_interno2.jpg',
          imgSlider: [],
          button: {
            text: 'CONTÁCTAME',
            ref: 'https://www.linkedin.com/in/mauricio-solis/',
            type: 'external'
          }
        },
        {
          path: 'que-hacemos',
          title: '¿QUÉ HACEMOS?',
          text: [
            'MSM Generación de Demanda es la única empresa especialista del país en el Social Selling, una nueva forma de vender sin tener la necesidad de hacerlo.' +
              ' La metodología que usamos y hemos perfeccionado, ha generado a empresas, profesionales y emprendedores un incremento considerable en sus ingresos (desde un 20% más) ,' +
              ' posicionarse como expertos del servicio/producto que ofrecen y ser marcas líderes en su rubro.',
            'Pero…. ¿Qué es el Social Selling? El Social Selling es una nueva y moderna metodología para abordar y relacionarse con tus potenciales clientes y prospectos, utilizando' +
              ' las informaciones disponibles en las redes sociales para incrementar su negocio. Linkedin en Perú tiene más de de 5 millones de usuarios activos y de éstos alrededor del ' +
              '45% son decisores de negocios en las empresas, desde dueños, presidentes, gerentes hasta mandos medios. Todos esos usuarios nos ofrecen información oportuna para acercarnos ' +
              'y crear un vínculo y así poder generar reuniones con los profesionales que toman la decisión de compra de nuestro servicio B2B.'
          ],
          imgShow: 'http://msmperu.com/images/NOSOTROS/nosotros_3.jpg',
          imgSlider: [],
          button: {
            text: 'CONÓCENOS',
            ref: '/servicios',
            type: 'internal'
          }
        },
        {
          path: 'nuestros-clientes',
          title: 'NUESTROS CLIENTES',
          text: [
            '¡Ya hemos capacitado a más de 3,000 profesionales de más de 35 empresas en 10 ciudades!'
          ],
          imgShow: 'http://msmperu.com/images/NOSOTROS/nosotros_4.jpg',
          imgSlider: [
            'http://msmperu.com/images/logos/7.png',
            'http://msmperu.com/images/logos/9.png',
            'http://msmperu.com/images/logos/3.png',
            'http://msmperu.com/images/logos/12.png'
          ],
          button: {
            text: 'CONTÁCTANOS',
            ref: '/contacto',
            type: 'internal'
          }
        }
      ]
    }
  },
  mounted() {
    this.actualPath = this.$route.params.slug
  }
}
</script>

<style lang="css">
.bg-black-darkest {
  background-color: #000000a8;
}
.runded-xl {
  border-radius: 5%;
}
.btn-visit {
  background-color: yellow;
  border-radius: 10px;
  color: black;
  border: solid 2px;
  border-color: black;
}
.scrollbar-thin {
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}
@media (max-width: 992px) {
  .scroollable-div {
    max-height: 20vh
  }
}
</style>
