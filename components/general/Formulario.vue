<template lang="html">
  <div class="w-full p-2">
    <!-- HERE STARTS THE FORM -->
    <div class="flex flex-wrap">
      <div v-for="(column, key) in formProps.columns" :key="key" class="flex flex-col xl:w-1/2 w-full">
        <div v-for="(item,i) in column.items" :key="i" class="p-2 w-full" :class="item.type==='text-area'?'h-full':''">
          <input
            v-if="item.type==='input'"
            v-model="item.vmodel"
            :class="formProps.customClass"
            :style="formProps.customStyle"
            type="text"
            :placeholder="item.placeholder"
          >
          <select
            v-if="item.type === 'select'"
            v-model="item.vmodel"
            :class="formProps.customClass"
            :style="formProps.customStyle"
            required
          >
            <option value="" disabled selected>
              {{ item.placeholder }}
            </option>
            <option v-for="(option,j) in item.options" :key="j" :value="option.value">
              {{ option.text }}
            </option>
          </select>
          <textarea
            v-if="item.type === 'text-area'"
            v-model="item.vmodel"
            class="h-full p-3"
            :class="formProps.customClass"
            :style="formProps.customStyle"
            :placeholder="item.placeholder"
            style="resize: none;"
          />
        </div>
      </div>
    </div>
    <div class="p-4 w-full">
      <p class="text-center text-xl">
        <button
          class="rounded-lg shadow-lg"
          :class="submitting ? 'text-grey-darker bg-grey border-2 border-grey-darkest p-2' : 'text-black bg-blue-lighter border-2 border-black p-2 btn-send'"
          :disabled="submitting"
          @click="submitting=!submitting"
        >
          {{ submitting ? 'ENVIANDO...': 'ENVIAR' }}
        </button>
      </p>
    </div>
    <!-- END OF THE FORM -->
  </div>
</template>

<script>
export default {
  props: {
    // PROPS TO CREATE THE FORM
    formProps: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      submitting: false
    }
  }
}
</script>

<style lang="css">
.btn-send {
  transition: all 0.5s ease;
}
.btn-send:hover{
  transform: scale(1.1);
  font-weight: bold;
}
</style>
