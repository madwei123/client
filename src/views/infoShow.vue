<!--  -->
<template>
  <div class="info-show">
    <el-row class="hh">
      <el-col :span="8" class="hh">
        <div class="user">
          <img :src="this.$store.getters.user.avatar" alt>
        </div>
      </el-col>
      <el-col :span="16" class="hh info">
        <div class="user-name">
          <i class="fa fa-user">{{this.$store.getters.user.name}}</i>
          <span></span>
        </div>
				<div class="user-name">
          <i class="fa fa-cog"></i>
          <span>{{this.$store.getters.user.identity}}</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang='less' scoped>
.info-show {
  width: 100%;
  .hh {
    height: 100%;
  }
  .user {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #dddddd;
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
	}
	.info{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		>div{
			width: 100%;
			padding-left: 30%
		}
		span{
			font-size: 20px
		}
		
	}
}
</style>