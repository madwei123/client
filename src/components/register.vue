<!--  -->
<template>
  <div class="register">
    <section class="form-wrap">
      <div class="title">欢迎注册</div>
      <el-form
        :model="registerUser"
        :rules="rules"
        ref="registerForm"
        label-width="80px"
        class="registerForm"
      >
        <el-form-item label="用户名" prop="name">
          <el-input type="text" v-model="registerUser.name" autocomplete="off" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input
            type="email"
            v-model="registerUser.email"
            autocomplete="off"
            placeholder="请输入email"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="registerUser.password"
            autocomplete="off"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="password2">
          <el-input
            type="password"
            v-model="registerUser.password2"
            autocomplete="off"
            placeholder="请再次输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="请选择身份" prop="identity">
          <el-select type="text" v-model="registerUser.identity" placeholder="请选择身份">
            <el-option label="管理员" value="manager"></el-option>
            <el-option label="员工" value="employee"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="sumit_btn" @click="submitForm('registerForm')">注册</el-button>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.registerUser.password !== "") {
          this.$refs.registerForm.validateField("password2");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerUser.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerUser: {
        name: "",
        email: "",
        password: "",
        password2: "",
        identity: ""
      },
      rules: {
        name: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 2, max: 30, message: "长度在2-30之间", trigger: "blur" }
        ],
        email: [
          {
            type: "email",
            required: true,
            message: "邮箱格式不正确",
            trigger: "blur"
          }
        ],
        password: [
          { min: 6, max: 30, message: "长度在6-30之间", trigger: "blur" },
          { validator: validatePass, trigger: "blur" }
        ],
        password2: [
          { required: true, message: "确认密码不能为空", trigger: "blur" },
          { validator: validatePass2, trigger: "blur" }
        ],
        identity: [{ required: true, message: "请选择身份", trigger: "change" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      console.info(this);
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.registerUser);
          this.$http
            .post("/api/users/register", this.registerUser)
            .then(res => {
              if (res.data.msg) {
                this.$message({
                  type: "error",
                  message: res.data.msg
                });
              } else {
                this.$message({
                  type: "success",
                  message: "register successful"
                });
                this.$router.push('/login')
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style lang='less' scoped>
.register {
  width: 100%;
  height: 100%;
  background: url(../assets/img/bg.jpg) no-repeat center center;
  background-size: cover;
  .registerForm {
    width: 70%;
    margin: 30px auto 0;
  }
  /deep/.el-form-item__label {
    width: 110px !important;
  }
  /deep/.el-form-item__content {
    margin-left: 110px !important;
  }
  > .form-wrap {
    width: 500px;
    height: 450px;
    background-color: #fff;
    margin: auto;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    > .title {
      text-align: center;
      background: yellowgreen;
      height: 50px;
      line-height: 50px;
      color: red;
      font-weight: 900;
      font-size: 20px;
    }
  }
}
</style>