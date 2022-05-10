<template>
  <custom-modal
      :model-value="notification.isShow"
      @update:modelValue="onHideNotification"
      title="Уведомление"
  >
    <div v-html="notification.message" class="mb-2" />
    <div class="flex justify-end">
      <custom-button @click="onHideNotification">
        Закрыть
      </custom-button>
    </div>
  </custom-modal>
</template>

<script>
import {mapState} from "vuex";
import CustomModal from "@/components/CustomModal";
import CustomButton from "@/components/CustomButton";

export default {
  name: "NotificationModal",
  components: {CustomButton, CustomModal},
  computed: {
    ...mapState({
      notification: 'notification'
    })
  },
  methods: {
    onHideNotification() {
      this.$store.commit('UPDATE_NOTIFICATION', {...this.notification, isShow: false})
    }
  }
}
</script>

<style scoped>

</style>
