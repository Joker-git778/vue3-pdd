<template>
  <div id="app">
    <router-view/>
    <Tabar v-show="$route.meta.showTaBar"></Tabar>
  </div>
</template>

<script>
import Tabar from "./components/Tabar/Tabar";
export default {
  name: "App",
  components: {
    Tabar
  }
}
</script>

<style lang="stylus">
#app
  width 100%
  height 100vh
  background-color #f5f5f5
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
li 
  list-style none
</style>
