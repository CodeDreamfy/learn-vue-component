<template>
  <form action="#">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'iForm',
  provide: () => ({
    form: this,
  }),
  data() {
    return {
      fields: [],
    };
  },
  props: {
    model: {
      type: Object,
    },
    rules: {
      type: Object,
    },
  },
  methods: {
    resetFields() {
      this.fields.forEach((field) => {
        field.resetFiled();
      });
    },
    validate(callback) {
      return new Promise((resolve) => {
        let valid = true;
        this.fields.forEach((field, index) => {
          field.validate('', (error) => {
            if (error) valid = false;
            if (index === this.fields.length - 1) {
              resolve(valid);
              if (typeof callback === 'function') {
                callback(valid);
              }
            }
          });
        });
      });
    },
  },
  created() {
    this.$on('on-form-item-add', (field) => {
      if (field) this.fields.push(field);
    });
    this.$on('on-form-item-remove', (field) => {
      if (field.prop) this.fields.splice(this.fields.indexOf(field), 1);
    });
  },
};
</script>

<style>

</style>
