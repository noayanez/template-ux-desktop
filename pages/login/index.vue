<template>
  <div class="bg-login h-screen w-full flex justify-center items-center ">
    <div class="bg-black-darkest h-full flex flex-col justify-center items-center md:px-16 px-8 md:w-1/2 w-full">
      <div class="flex justify-center items-center p-4 w-full h-16">
        <p class="text-center text-white md:text-4xl text-3xl font-bold">
          LOGIN
        </p>
      </div>
      <div class="flex justify-center items-center w-full h-16">
        <div class="bg-grey flex justify-center items-center px-3 rounded-l-lg h-12">
          <img src="/user.png" height="30" width="30">
        </div>
        <div class="bg-white flex justify-center items-center rounded-r-lg h-12">
          <input v-model="user" class="h-full w-full p-4 rounded-r-lg" type="text" placeholder="USUARIO" style="outline: none;"></input>
        </div>
      </div>
      <div class="flex justify-center items-center w-full h-16">
        <div class="bg-grey flex justify-center items-center px-3 rounded-l-lg h-12">
          <img src="/pass.png" height="30" width="30">
        </div>
        <div class="bg-white flex justify-center items-center rounded-r-lg h-12">
          <input v-model="pass" class="h-full w-full p-4 rounded-r-lg" type="password" placeholder="CONTRASEÑA" style="outline: none;"></input>
        </div>
      </div>
      <button class="flex justify-center items-center p-3" style="outline: none;">
        <span class="cursor-pointer text-black font-bold btn-intranet text-bold p-3 h-full w-full" style="outline: none;">
          INGRESAR
        </span>
      </button>
    </div>
    <div class="bg-black-darkest-inter flex justify-center items-center h-full md:w-1/4 xl:w-1/3" />
    <div class="bg-transparent flex justify-center items-center h-full md:w-1/4 xl:w-1/3" />
  </div>
</template>

<script type="text/javascript">
export default {
  components: {},
  data() {
    return {
      user: '',
      pass: ''
    }
  }
}
</script>

<style>
/* BACKGROUND FOR THE PORTRAIT OF SERVICES */
.bg-login {
  background-position: 50% 50%;
  background-image: url('/portrait-us.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-black-darkest {
  background-color: #000000a8;
}
.bg-black-darkest-inter {
  background-image: linear-gradient(to right, #000000a8, #ffffff00);
}
</style>
