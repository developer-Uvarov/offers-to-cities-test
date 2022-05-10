<template>
  <label class="flex flex-col min-w-0" :class="wrapperClass">
    {{ label }}
    <input
        :value="modelValue"
        @input="updateInput"
        type="text"
        :placeholder="placeholder"
        :="$attrs"
        class="border border-gray-300 rounded-lg px-3 py-1.5 placeholder-gray-500 outline-0
        focus:border focus:border-gray-500 transition ease-in-out duration-150"
        :class="{ 'text-red-400 border-red-400': errors.length > 0 }"
    >
    <div class="flex flex-col text-red-400">
      <span
          v-for="error in errors"
          :key="error.$uid"
      >
        {{ error.$message }}
      </span>
    </div>
  </label>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    modelValue: [String, Number],
    wrapperClass: {
      type: String,
      default: () => ''
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    errors: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  },
}
</script>
