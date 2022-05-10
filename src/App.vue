<template>
  <div class="container mt-2.5 px-2 sm:mt-4 sm:pl-10 md:pl-20 " >
    <custom-button
        class=" mb-2.5 w-full sm:mr-4 sm:w-auto"
        @click="setCityId(1)"
    >
      Заказать в Москву
    </custom-button>
    <custom-button
        class="w-full sm:w-auto"
        :variant="buttonVariants.SECONDARY"
        @click="setCityId(2)"
    >
      Заказать в Санкт-Петербург
    </custom-button>
    <custom-modal
        v-model="showModal"
        title="Заказать звонок"
    >
      <custom-form @onSendForm="onShowModal"/>
    </custom-modal>
    <notification-modal />
  </div>
</template>

<script>
import buttonVariants from "@/constants/buttonVariants";

import NotificationModal from "@/components/NotificationModal";
import CustomButton from "@/components/CustomButton";
import CustomModal from "@/components/CustomModal";
import CustomForm from "@/components/CustomForm";



export default {
  components: {NotificationModal, CustomForm, CustomModal, CustomButton},
  data() {
    return {
      buttonVariants,
      showModal: false,
    }
  },
  methods: {
    setCityId(city_id) {
      this.$store.commit('UPDATE_OFFER_FORM', {...this.$store.state.offerForm, city_id})
      this.onShowModal()
    },
    async onShowModal() {
      this.showModal = !this.showModal
      if (!this.showModal) {
        setTimeout(() => this.$store.dispatch('clearOfferForm'), 200)
      }
    },
  },

}
</script>

<style lang="scss">
  body {
    margin: 0;
  }
</style>
