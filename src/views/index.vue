<!--  -->
<template>
  <div class="index">
	  <HeadNav/>
    <LeftMenu/>
    <router-view class="dis"></router-view>
  </div>
</template>

<script>
import HeadNav from '@/components/header'
import LeftMenu from '@/components/leftMenu'
export default {
  data () {
	return {
	};
  },

  components: {
    HeadNav,
    LeftMenu
  },

  methods: {}
}

</script>
<style lang='less' scoped>
  .index{
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto
  }
  .dis{
    height: calc(100% - 60px);
    margin-left: 180px;
    width:calc(100% - 180px)!important;
  }
</style>