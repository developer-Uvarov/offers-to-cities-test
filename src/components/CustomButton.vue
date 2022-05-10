<template>
  <button
      class="text-white py-1.5 px-3.5 rounded-md transition duration-150 ease-in-out"
      :class="[styles, wrapperClass]"
      :="$attrs"
  >
    <slot></slot>
  </button>
</template>

<script>
import buttonVariants from "@/constants/buttonVariants";

export default {
  name: 'CustomButton',
  props: {
    variant: {
      type: String,
      default: buttonVariants.PRIMARY
    },
    wrapperClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    styles() {
      switch (this.variant) {
        case buttonVariants.SECONDARY:
          return 'bg-teal-600 hover:bg-teal-700'
        case buttonVariants.SECONDARY_LIGHT:
          return 'bg-green-600 hover:bg-green-700'
        default:
          return 'bg-blue-500 hover:bg-blue-600'
      }
    }
  }
}
</script>
