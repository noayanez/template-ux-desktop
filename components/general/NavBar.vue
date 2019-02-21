<template>
  <div class="z-10 w-full pin-t">
    <div class="absolute z-30 xl:shadow-none shadow-md w-full xl:h-24 h-16 bg-nav-bar flex flex-row justify-between items-start p-1">
      <!-- NAVEGATION BAR MENU, HIDDEN WHEN RESOLUTION IS LESS THAN 1200px -->
      <nuxt-link to="/">
        <img
          src="/logo.png"
          width="57"
          class="xl:hidden cursor-pointer"
          style="user-select: none;"
          @click="changePath('/',0)"
        >
        <img
          src="/logo-amarillo.png"
          width="120"
          class="xl:block hidden cursor-pointer md:px-4"
          style="user-select: none;"
          @click="changePath('/',0)"
        >
      </nuxt-link>
      <div class="flex justify-end items-center p-2 w-full h-full">
        <!-- IF RESOLUTION IS MORE THAN 1200px THIS PART IS RENDERED -->
        <div class="xl:block hidden h-full">
          <div class="flex justify-between items-center font-bold w-full h-full">
            <!-- ITERATOR FOR THE OPTIONS OF THE MENU BAR, CAN TOGGLE BETWEEN BUTTONS AND TEXTS DEPENDING OF *TYPE* ATTRIBUTE -->
            <div v-for="(item,i) in items" :key="i" class="flex flex-col justify-center items-center w-2/5 h-full px-6">
              <!-- TOGGLE FOR TEXT TYPE -->
              <div v-if="item.type=='text'" @mouseover="hoverer = i" @mouseout="hoverer = null">
                <!-- MENU PARENT OPTION -->
                <div class="flex flex-col justify-center items-start menu-option py-3">
                  <nuxt-link :to="item.ref">
                    <span class="cursor-pointer" style="user-select: none;" @click="changePath(item.ref,i)">
                      {{ item.title }}
                    </span>
                  </nuxt-link>
                  <div v-if="actualPath == item.ref" class="underbar-active cursor-pointer" />
                  <div v-else class="underbar cursor-pointer" />
                </div>
                <!-- CHILDS OF THE OPTION -->
                <div v-show="(item.childs.length > 0) && (hoverer == i)" class="fixed flex flex-col justify-center items-start">
                  <div v-for="(child,j) in item.childs" :key="j" class="cursor-pointer" @click="changePath(child.ref,i)">
                    <nuxt-link class="flex justify-start items-start cursor-pointer text-left h-full w-full" :to="child.ref">
                      <div class="menu-option h-full p-3">
                        <span class="cursor-pointer h-ful w-full text-base text-left" style="user-select: none;">
                          {{ child.title }}
                        </span>
                        <div v-if="child.ref === actualPath" class="underbar-active cursor-pointer" />
                        <div v-else class="underbar cursor-pointer" />
                      </div>
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <!-- TOGGLE FOR BUTTON TYPE -->
              <div v-else-if="item.type=='button'" class="flex justify-center items-center py-2">
                <nuxt-link :to="item.ref" class="flex justify-center items-center btn-intranet w-full h-full">
                  <span class="cursor-pointer text-black text-bold p-3 h-full w-full" style="user-select: none;" @click="changePath(item.ref,i)">
                    {{ item.title }}
                  </span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <!-- MENU ICON, ALWAYS TOGETHER -->
        <div class="cursor-pointer xl:hidden" @click="offcanvas=!offcanvas">
          <div class="pb-1">
            <div class="bar" />
          </div>
          <div class="pb-1">
            <div class="bar" />
          </div>
          <div class="pb-1">
            <div class="bar" />
          </div>
        </div>
        <!-- END MENU ICON -->
      </div>
    </div>
    <!-- MODAL COMPONENT WITH MENU INSIDE -->
    <transition name="fade" mode="out-in">
      <div v-if="offcanvas" class="absolute z-30 h-screen w-full overflow-hidden bg-modal" />
    </transition>
    <transition name="offcanvas" mode="out-in">
      <div v-if="offcanvas" class="fixed z-50 h-screen w-full overflow-hidden flex justify-end items-end">
        <div class="bg-grey w-64 h-full flex flex-col justify-center items-center">
          <div class="fixed w-full h-16 bg-transparent flex justify-end items-center p-2 pin-t pin-r">
            <div class="p-1">
              <!-- MENU ICON, ALWAYS TOGETHER -->
              <div class="cursor-pointer" @click="offcanvas=!offcanvas">
                <div class="pb-1">
                  <div class="bar" />
                </div>
                <div class="pb-1">
                  <div class="bar" />
                </div>
                <div class="pb-1">
                  <div class="bar" />
                </div>
              </div>
              <!-- END MENU ICON -->
            </div>
          </div>
          <div v-for="(item,i) in items" :key="i" class="flex flex-col justify-start items-start text-base w-full font-bold">
            <!-- MENU OPTION  -->
            <nuxt-link v-if="(nx === i)" class="flex justify-start items-start cursor-pointer bg-yellow w-full" :to="item.ref">
              <span class="cursor-pointer w-full px-6 py-4" @click="changePath(item.ref,i)">
                {{ item.title }}
              </span>
            </nuxt-link>
            <nuxt-link v-else class="flex justify-start items-start cursor-pointer hover:bg-yellow-lighter text-left w-full" :to="item.ref">
              <span class="cursor-pointer w-full px-6 py-4" @click="changePath(item.ref,i)">
                {{ item.title }}
              </span>
            </nuxt-link>
            <!-- LIST OF CHILDS OF THE MENU OPTION -->
            <div class="w-full">
              <transition name="offcanvas" mode="out-in">
                <ul v-if="item.childs.length > 0 && nx === i" class="w-full">
                  <li v-for="(child,j) in item.childs" :key="j" class="flex  justify-start items-start w-full">
                    <nuxt-link class="flex justify-start items-start cursor-pointer text-left h-ful w-full" :to="child.ref">
                      <div class="menu-option-y w-ful h-full p-3">
                        <span class="cursor-pointer h-ful w-full py-3 text-base" @click="changePath(child.ref,i)">
                          {{ child.title }}
                        </span>
                        <div v-if="child.ref === actualPath" class="underbar-y-active" />
                        <div v-else class="underbar-y" />
                      </div>
                    </nuxt-link>
                  </li>
                </ul>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- END MODAL -->
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      nx: null,
      hoverer: '',
      actualPath: '',
      childPath: '',
      offcanvas: false,
      // WRITE HERE THA ROUTES THAT THE PAGE HAS
      items: [
        {
          title: 'INICIO',
          ref: '/',
          type: 'text',
          activechilds: false,
          childs: []
        },
        {
          title: 'NOSOTROS',
          ref: '/nosotros',
          type: 'text',
          activechilds: false,
          childs: [
            {
              title: 'LINKEDIN',
              ref: '/nosotros/porque-usar-linkedin'
            },
            {
              title: 'SOBRE MI',
              ref: '/nosotros/conoce-sobre-mi'
            },
            {
              title: '¿QUÉ HACEMOS?',
              ref: '/nosotros/que-hacemos'
            },
            {
              title: 'NUESTROS CLIENTES',
              ref: '/nosotros/nuestros-clientes'
            }
          ]
        },
        {
          title: 'SERVICIOS Y PRODUCTOS',
          ref: '',
          type: 'text',
          activechilds: false,
          childs: [
            {
              title: 'PRODUCTOS',
              ref: '/productos'
            },
            {
              title: 'SERVICIOS',
              ref: '/servicios'
            }
          ]
        },
        {
          title: 'EVENTOS',
          ref: '/eventos',
          type: 'text',
          activechilds: false,
          childs: []
        },
        {
          title: 'CONTÁCTANOS',
          ref: '/contacto',
          type: 'text',
          activechilds: false,
          childs: []
        },
        {
          title: 'INTRANET',
          ref: '/login',
          type: 'button',
          activechilds: false,
          childs: []
        }
      ]
    }
  },
  mounted() {
    console.log("PATH: '" + this.$route.path + "''")
    console.log(this.$route.params.slug)
    this.reviseActualPath()
  },
  methods: {
    reviseActualPath() {
      var pathaux = this.$route.path
      console.log('Revisando: ' + pathaux)
      for (var i in this.items) {
        console.log('tam: ' + this.items[i].childs.length + '/ ' + i)
        if (this.items[i].ref === pathaux) {
          this.actualPath = pathaux
          this.nx = parseInt(i)
          return
        } else if (this.items[i].childs.length > 0) {
          for (var j in this.items[i].childs) {
            if (this.items[i].childs[j].ref === pathaux) {
              this.actualPath = pathaux
              this.nx = parseInt(i)
              return
            }
          }
        }
      }
    },
    changePath(ref, i) {
      if (ref !== '') {
        this.actualPath = ref
        this.offcanvas = false
      }
      this.nx = i
    },
    mostrar() {
      console.log(this.$route.params.slug === undefined)
      console.log(this.$route.params.slug)
      console.log(this.$route.path)
    }
  }
}
</script>

<style>
.bar {
  border-radius: 10px;
  width: 30px;
  height: 5px;
  background-color: black;
}
.bg-modal {
  background-color: #000000a0;
}
a:link,
a:visited {
  color: inherit;
  text-decoration: none;
  cursor: auto;
}
.menu-option {
  color: white;
  font-size: 1.125rem;
  text-align: center;
}
.menu-option-y {
  color: black;
  font-size: 1.125rem;
  text-align: left;
}
.btn-intranet {
  background-color: yellow;
  border-radius: 10px;
  color: black;
  border: solid 2px;
  border-color: black;
  cursor: pointer;
}
.underbar {
  width: 0%;
  height: 2px;
  background-color: yellow;
  transition: width 0.5s;
}
.underbar-y {
  width: 0%;
  height: 2px;
  background-color: yellow;
  transition: width 0.5s;
}
.menu-option:hover .underbar {
  width: 100%;
}
.menu-option-y:hover .underbar-y {
  width: 100%;
}
.underbar-active {
  width: 100%;
  height: 2px;
  background-color: yellow;
}
.underbar-y-active {
  width: 100%;
  height: 2px;
  background-color: yellow;
}
@media screen and (max-width: 1200px) {
  .bg-nav-bar {
    background-color: #fffc00;
    border-bottom-width: 2px;
    border-bottom-color: #000000bd;
  }
}
.offcanvas-enter-active {
  transition: transform 0.5s;
  opacity: 1;
  transform: translate(0);
}
.offcanvas-leave-active {
  transition: transform 0.5s;
  opacity: 1;
  transform: translate(0);
}
.offcanvas-enter {
  transform: translate(100%);
  opacity: 0.8;
}
.offcanvas-leave-to {
  transform: translate(100%);
  opacity: 0.8;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.btn-black-darker {
  background-color: #00000055;
}
</style>
