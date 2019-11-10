<template>
  <div class="search_nav">
      <a href="#" class="search_nav_icon" @click.prevent="isShowSearchPanel(true)">
          <img src="../images/search.png" alt="" width="25px">
          <span>搜索栏</span>
      </a>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name:"search_nav",
  data() {
    return {

    }
  },
  props: {
    isShowSearchPanel: Function
  },
  components: {

  }
}
</script>

<style lang="stylus"  scoped>
.search_nav
    width 100%
    height 60px
    background-color #fff
    border-bottom-1px(#cccccc)
    position sticky
    top 0px
    left 0px
    z-index 998
    display flex
    justify-content center
    align-items center
    .search_nav_icon
        width 90%
        height 70%
        background-color #f5f5f5
        border-radius 10px
        display flex
        justify-content center
        align-items center
        span
            color #aaaaaa
            margin-left 6px
            font-size 18px
            font-weight lighter
</style>
