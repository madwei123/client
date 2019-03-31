<!--  -->
<template>
  <div class="login">
    <section class="form-wrap">
      <div class="title">欢迎登录</div>
      <el-form
        :model="loginUser"
        :rules="rules"
        ref="loginForm"
        label-width="80px"
        class="loginForm"
      >
        <el-form-item label="邮箱" prop="email">
          <el-input
            type="email"
            v-model="loginUser.email"
            autocomplete="off"
            placeholder="请输入email"
          ></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="loginUser.password"
            autocomplete="off"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" class="sumit_btn" @click="submitForm('loginForm')">登录</el-button>
        </el-form-item>
        <div class="register">
          <p>
            还没有账号?
            现在
            <router-link to="/register">注册</router-link>
          </p>
        </div>
      </el-form>
    </section>
  </div>
</template>

<script>
import jwt from "jwt-decode";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };

    return {
      loginUser: {
        email: "",
        password: ""
      },
      rules: {
        email: [
          {
            required: true,
            message: "邮箱不能为空",
            trigger: "blur"
          },
          {
            type: "email",
            message: "邮箱格式不正确",
            trigger: "blur"
          }
        ],
        password: [
          { min: 6, max: 30, message: "长度在6-30之间", trigger: "blur" },
          { validator: validatePass, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    isEmpty(value){
        return (
          value ===  undefined ||
          value === null||
          (typeof value === 'object'&&Object.keys(value).length === 0 )||
          (typeof value === 'string'&&value.trim().length === 0 )
        )
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$http.post("/api/users/login", this.loginUser).then(res => {
            // 登录成功的话  拿到token
            console.dir(res);

            const { token } = res.data;
            localStorage.setItem("eleToken", token);
            // 解析token
            const decoded = jwt(token);
            console.log(decoded);

            // token存储到vuex中
          this.$store.dispatch('setAuthenticated',!this.isEmpty(decoded))
          this.$store.dispatch('setuser',decoded)
            this.$router.push("/index");
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
.login {
  width: 100%;
  height: 100%;
  background: url(../assets/img/bg1.jpg) no-repeat center center;
  background-size: cover;
  .loginForm {
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
    height: 300px;
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

.register {
  display: flex;
  flex-direction: row-reverse;
}
</style>