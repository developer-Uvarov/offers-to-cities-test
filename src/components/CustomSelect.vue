<template>
  <label class="flex flex-col" :class="wrapperClass">
    {{ label }}
    <select
        class="border border-gray-300 rounded-lg pl-1.5 pr-4 py-2 placeholder-gray-500 outline-0
        focus:border focus:border-gray-500 transition ease-in-out duration-150"
        :class="{ 'text-red-400 border-red-400': errors.length > 0 }"
    >
      <option
          v-for="item in list"
          :key="item.id"
          :value="item.id"
          :selected="item.id === modelValue"
          @change="updateSelect"
      >{{ item.name }}
      </option>
    </select>
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
  name: "CustomSelect",
  props: {
    wrapperClass: {
      type: String,
      default: () => ''
    },
    label: {
      type: String,
      required: true
    },
    list: {
      type: Array,
      required: true
    },
    modelValue: {
      type: [Number, null],
      required: true
    },
    errors: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    updateSelect(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-select {
  max-width: 170px;
}
</style>
