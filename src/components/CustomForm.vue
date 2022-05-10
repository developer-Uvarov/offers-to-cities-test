<template>
  <form class="flex lg:flex-nowrap flex-wrap items-start">
   <div class="flex sm:flex-row flex-col w-[100%] lg:mr-5">
     <custom-input
         :model-value="form.name"
         :errors="v$.form.name.$errors"
         label="Имя*"
         placeholder="Иван Петров"
         wrapper-class="sm:w-[100%] lg:w-[170px] sm:mr-5 mr-0 mb-5"
         @update:modelValue="(value) => updateForm(value, 'name')"

     >
     </custom-input>
     <custom-input
         :model-value="form.phone"
         :errors="v$.form.phone.$errors"
         label="Телефон*"
         placeholder="+7(___)___-__-__"
         v-mask="'+7(###) ###-##-##'"
         wrapper-class="sm:w-[100%] lg:w-[170px] sm:mr-5 mr-0 mb-5"
         @update:modelValue="(value) => updateForm(value, 'phone')"

     >
     </custom-input>
     <custom-input
         :model-value="form.email"
         :errors="v$.form.email.$errors"
         label="Email*"
         placeholder="you@example.com"
         wrapper-class="sm:w-[100%] lg:w-[170px] mb-5"
         @update:modelValue="(value) => updateForm(value, 'email')"
     >
     </custom-input>
   </div>
    <div class="flex lg:flex-col sm:flex-row flex-col sm:items-center lg:w-auto w-[100%]">
      <custom-select
          :model-value="form.city_id"
          :list="cities"
          :errors="v$.form.city_id.$errors"
          label="Город*"
          wrapper-class="lg:w-[170px] w-[100%] flex-shrink lg:mr-0 sm:mr-5 mb-5"
          @update:modelValue="(value) => updateForm(value, 'city_id')"

      />
      <custom-button
          :variant="buttonVariant.SECONDARY_LIGHT"
          wrapper-class="lg:w-[170px] sm:w-[190px] w-[100%] flex-shrink-0 ml-auto"
          @click="onSubmit"
      >
        Отправить
      </custom-button>
    </div>
  </form>
</template>

<script>
import cities from "@/constants/cities";
import buttonVariant from "@/constants/buttonVariants";

import useVuelidate from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'

import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import CustomSelect from "@/components/CustomSelect";
import {mapState} from "vuex";

export default {
  name: "CustomForm",
  components: {CustomSelect, CustomInput, CustomButton},
  data() {
    return {
      v$: useVuelidate(),
      cities,
      buttonVariant,
    }
  },
  validations() {
    return {
      form: {
        name: {
          required: helpers.withMessage('Обязательное поле', required)
        },
        phone:{
          required: helpers.withMessage('Обязательное поле', required),
        },
        email:{
          required: helpers.withMessage('Обязательное поле', required),
          email: helpers.withMessage('Введите email', email)
        },
        city_id: {
          required: helpers.withMessage('Обязательное поле', required)
        }
      }
    }
  },
  computed: {
    ...mapState({
      form: 'offerForm'
    })
  },
  methods: {
    updateForm(value, key) {
      this.$store.commit('UPDATE_OFFER_FORM', {...this.form, [key]: value})
      this.v$.form[key].$touch()
    },
    async onSubmit() {
      if (await this.v$.$validate()) {
        try {
          await this.$store.dispatch('sendForm', this.form)
          this.$emit('onSendForm')
        } catch (e) {
          console.log(e)
        }
      }
    }
  },
}
</script>
