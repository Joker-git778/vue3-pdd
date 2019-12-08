<template>
  <div class="me">
    <SelectLogin v-if="!$store.state.userInfo.id"/>
    <section v-else>
      <MeTop/>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
import SelectLogin from "./../Login/SelectLogin";
import MeTop from "./MeTop";
export default {
  name:"me",
  data() {
    return {

    }
  },
  components: {
    SelectLogin,
    MeTop
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
.me
  background-color #f5f5f5
  width 100%
  height 100%
</style>
