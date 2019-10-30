<template>
  <div id="app">
    <router-view/>
    <Tabar></Tabar>
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
*
  margin 0
  padding 0 
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
