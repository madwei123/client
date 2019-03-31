<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    isEmpty(value){
        return (
          value ===  undefined ||
          value === null||
          (typeof value === 'object'&&Object.keys(value).length === 0 )||
          (typeof value === 'string'&&value.trim().length === 0 )
        )
    }
  },
  created(){
      if(localStorage.eleToken){
        const token = localStorage.eleToken
         // 解析token
            const decoded = jwt(token);
            console.log(decoded);

            // token存储到vuex中
          this.$store.dispatch('setAuthenticated',!this.isEmpty(decoded))
          this.$store.dispatch('setuser',decoded)
      }
  }
}

import jwt from "jwt-decode";



</script>

<style>
#app {
  width: 100%;
 height: 100%;
}
</style>
