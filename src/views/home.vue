<!--  -->
<template>
  <div class="home">
			<div class="container">
				<h1>我是主页 哈 中国人rrnghhehe</h1>
				<p class="lead">
					我是主页要展示的内容
				</p>
			</div>
	</div>
</template>

<script>
export default {
  data () {
	return {
	};
  },
}

</script>
<style lang='less' scoped>
	.home{
		width: 100%;
		height: calc(100% - 60px);
		background:url(../assets/img/bg.jpg) no-repeat;
		background-color: yellow;
		background-size: cover

	}
	.container{
		width: 100%;
		height: 100%;
		padding-top: 100px;
		background-color: rgba(0, 0, 0, .8);
		text-align:center;
		color: #fff
	}
	.title{
		font-size: 30px
	}
	.lead{
		margin-top: 50px;
		font-size: 22px
	}
</style>