<template>
  <div class="me">
    <SelectLogin/>
  </div>
</template>

<script type="text/ecmascript-6">
import SelectLogin from "./../Login/SelectLogin";
export default {
  name:"me",
  data() {
    return {

    }
  },
  components: {
    SelectLogin
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
.me
  background-color #f5f5f5
  width 100%
  height 100%
</style>
