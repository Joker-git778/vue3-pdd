<template>
  <div class="home">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from "@/components/Header/Header";
export default {
  name:"home",
  data() {
    return {

    }
  },
  components: {
    Header
  }
}
</script>

<style lang="stylus" scoped>
</style>

