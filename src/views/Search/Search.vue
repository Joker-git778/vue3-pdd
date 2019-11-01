<template>
  <div class="search">
      <SearchNav/>
      <div class="shop">
        <!-- 左面 -->
        <div class="menu_wrapper">
          <ul>
            <li class="current menu_item">
              <span>女装</span>
            </li>
            <li class="menu_item">
              <span>鞋包</span>
            </li>
          </ul>
        </div>
        <!-- 右面 -->
        <div class="shop_wrapper">

        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import SearchNav from "./children/SearchNav"
export default {
  name:"search",
  data() {
    return {

    }
  },
  components: {
    SearchNav
  }
}
</script>

<style  lang="stylus"  scoped>
.search
  width 100%
  height 100vh
  background-color #fff
  .shop 
    display flex
    position relative
    top 0px
    bottom 50px
    width 100%
  .menu_wrapper
    flex 0 0 80px
    background-color #e0e0e0
    .menu_item
      width 100%
      height 60px
      background-color #fafafa
      display flex
      justify-content center
      align-items center
      font-weight lighter
      color #666
    .current
      color #e02e24
    .current::before
      content ''
      background-color #e02e24
      width 4px
      height 30px
      position absolute
      left 0
</style>
