<template>
  <div>
    <label v-if="label" :class="{ 'i-form-item-label-required': isRequired }">{{ label }}</label>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'iFormItem',
  inject: ['form'],
  data: () => ({
    isRequired: true,
    validateState: '',
    validateMessage: '',
  }),
  props: {
    label: {
      type: String,
      default: '',
    },
    prop: {
      type: String,
    },
  },
  computed: {
    fieldValue() {
      return this.form.model[this.prop];
    },
  },
  methods: {
    setRules() {
      const rules = this.getRules();
      if (rules.length) {
        rules.forEach((rule) => {
          this.isRequired = rule.required;
        });
      }
      this.$on('on-form-blur', this.onFieldBlur);
      this.$on('on-form-change', this.onFieldChange);
    },
    getRules() {
      let formRules = this.form.rules;
      formRules = formRules ? formRules[this.prop] : [];
      return [].concat(formRules || []);
    },
    getFilterRule(trigger) {
      const rules = this.getRules();
      return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1);
    },
    validate(trigger, callback = () => {}) {
      const rules = this.getFilterRule(trigger);
      if (!rules || rules.length === 0) return true;
      this.validateState = 'validating';

      const descriptor = {};
      descriptor[this.prop] = rules;

      const validator = this.asyncValidator(descriptor);
      const model = {};
      model[this.prop] = this.fieldValue;
      validator.validate(model, { firstFields: true }, (errors) => {
        this.validateState = !errors ? 'success' : 'error';
        this.validateMessage = errors ? errors[0].message : '';
        callback(this.validateMessage);
      });
      return true;
    },
    onFieldBlur() {
      this.validate('blur');
    },
    onFieldChange() {
      this.validate('change');
    },
    resetField() {
      this.validateState = '';
      this.validateMessage = '';
      this.form.model[this.prop] = this.initialValue;
    },
  },
  mounted() {
    if (this.prop) {
      this.dispatch('iForm', 'on-form-item-add', this);
      this.setRules();
      this.initialValue = this.fieldValue;
    }
  },
  beforeDestroy() {
    if (this.prop) {
      this.dispatch('iForm', 'on-form-item-remove', this);
    }
  },
};
</script>

<style>
.i-form-item-label-required:before {
  content: '*';
  color: red;
}
.i-form-item-message {
  color: red;
}
</style>
