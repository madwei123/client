<!--  -->
<template>
  <header class="head-nav">
    <el-row>
      <el-col :span="6" class="logo-container">
        <img src="../assets/logo.png" alt class="logo">
        <span class="title">
            <router-link to="/index">
            后台管理系统
            </router-link>
        </span>
      </el-col>
      <el-col :span="6" class="user" style="float:right">
        <div class="userinfo">
          <span class="username">
            <!-- 下拉箭头 -->
            <el-dropdown @command="handleCommand" trigger="click">
              <span class="el-dropdown-link">
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="info">个人信息</el-dropdown-item>
                <el-dropdown-item command="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </span>
          <div class="welcome">
            <p class="name comename">欢迎</p>
            <p class="name avatarname">{{user.name}}</p>
          </div>
          <img :src="user.avatar" alt>
        </div>
      </el-col>
    </el-row>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    handleCommand(command) {
      switch (command) {
        case "info":
          this.showinfo();
          break;
        case "logout":
          this.logout();
      }
    },
    showinfo() {
        this.$router.push({name:"infoshowLink"})
    },
    logout() {
      localStorage.removeItem("eleToken");
      this.$store.dispatch("clearCurrentState");
      this.$router.push("/login");
    }
  }
};
</script>
<style lang='less' scoped>
.head-nav {
  width: 100%;
  height: 60px;
  min-width: 600px;
  padding: 5px;
  background: #324967;
  color: #fff;
  border-bottom: 1px solid #1f2d3d;

  .logo-container {
    display: flex;
    height: 55px;
    flex-direction: row;
    align-items: center;
  }

  .logo {
    border: 0px;
    width: 42px;
    vertical-align: middle;
  }
  .userinfo {
    display: flex;
    height: 55px;
    flex-direction: row-reverse;
    align-items: center;
    padding-right: 15px;
    img {
      width: 25px;
      height: 25px;
      border-radius: 50%;
    }
    .welcome {
      width: 120px;
      text-align: center;
      cursor: default;
    }
  }

  .el-icon-arrow-down.el-icon--right {
    color: #fff;
  }
}
</style>