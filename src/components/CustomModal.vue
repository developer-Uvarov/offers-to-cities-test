<template>
  <teleport to="body">
    <transition
        enter-active-class="transition ease-out duration-200 transform"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in duration-200 transform"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
      <div
          v-show="modelValue"
          class="custom-modal fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50"
          @click.prevent="onHide"
      >
        <div
            ref="outside"
            class="flex items-center justify-center min-h-screen text-center"
        >
          <div
              class="custom-modal__dialog sm:mx-9 mx-2.5 bg-white rounded-lg text-left overflow-hidden shadow-xl p-6"
              role="dialog"
              ref="modal"
              aria-modal="true"
              aria-labelledby="modal-headline"
          >
            <h2 class="text-2xl mb-4 mt-0">
              {{ title }}
            </h2>
            <div>
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
export default {
  name: "CustomModal",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    onHide(event) {
      if (event.srcElement === this.$refs.outside) {
        this.$emit('update:modelValue', false)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.custom-modal {
  &__dialog {
    width: 100%;
    max-width: 790px;
  }
}

</style>
