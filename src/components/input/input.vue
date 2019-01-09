<template>
  <input
    type="text"
    :value="currentValue"
    @input="handleInput"
    @blur="handleBlur"
    >
</template>

<script>
export default {
  name: 'iInput',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data: (() => ({
    currentValue: this.value,
  })),
  watch: {
    value(val) {
      this.currentValue = val;
    },
  },
  methods: {
    handleInput() {
      this.$emit('input', this.currentValue);
      this.dispatch('iFormItem', 'on-form-change', this.currentValue);
    },
    handleBlur() {
      this.dispatch('iFormItem', 'on-form-blur', this.currentValue);
    },
  },
};
</script>

<style>

</style>
