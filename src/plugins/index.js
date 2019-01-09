import AsyncValidator from 'async-validator';

export default {
  install: (Vue) => {
    Vue.prototype.asyncValidator = (descriptor) => new AsyncValidator(descriptor); // eslint-disable-line
  },
};
