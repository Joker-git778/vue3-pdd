<template>
  <div class="search_panel">
    <div class="search_nav">
      <div class="search_input">
        <img src="./images/search.png" alt="" width="25">
        <input type="search" placeholder="搜索内容" ref="mySearch" name="" id="">
      </div>
      <button @click="isShowSearchPanel(false)">取消</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name:"search_panel",
  data() {
    return {

    }
  },
  props: {
    isShowSearchPanel: {
      type: Function
    }
  },
  mounted() {
    this.$refs.mySearch.focus()
  },
  components: {

  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl";
.search_panel 
  width 100%
  height 100vh
  background-color #fff
  position fixed
  top 0px
  left 0px
  z-index 1000
  .search_nav
    width 100%
    height 60px
    padding 0 20px
    display flex
    justify-content center
    align-items center
    border-bottom-1px(#dddddd)
    .search_input
      display flex
      flex-direction row
      align-items center
      width 85%
      height 38px
      border-radius 10px
      padding 0 10px
      input
        outline none
        width 90%
        height 90%
        padding-left 10px
        font-size 16px
    button
      font-size 16px
      color #666
      background-color #fff
</style>
