<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <i-form ref="form" :model="formValidate" :rules="ruleValidate">
      <i-form-item label="用户名" prop="name">
        <i-input v-model="formValidate.name"></i-input>
      </i-form-item>
      <i-form-item label="邮箱" prop="mail">
        <i-input v-model="formValidate.mail"></i-input>
      </i-form-item>
    </i-form>
    <button @click="handleSubmit">提交</button>
    <button @click="handleReset">提交</button>
  </div>
</template>

<script>
import iForm from './form/form';
import iFormItem from './form/form-item';
import iInput from './input/input';

export default {
  name: 'index',
  data: () => ({
    msg: '具有数据校验功能的表单组件-iForm',
    formValidate: {
      name: '',
      mail: '',
    },
    ruleValidate: {
      name: [
        { require: true, message: '用户名不能为空', trigger: 'blur' },
      ],
      mail: [
        { require: true, message: '邮箱不能为空', trigger: 'blur' },
        { type: 'email', message: '邮箱格式不正确', trigger: 'blur' },
      ],
    },
  }),
  components: {
    iForm,
    iFormItem,
    iInput,
  },
  methods: {
    handleEvent(text) {
      console.log("handleEvent:", text); // eslint-disable-line
    },
    handleSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log('提交成功'); // eslint-disable-line
        } else {
          console.log('表单校验失败'); // eslint-disable-line
        }
      });
    },
    handleReset() {
      this.$refs.form.resetFields();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
