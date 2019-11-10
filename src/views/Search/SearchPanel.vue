<template>
  <div class="search_panel">
    <div class="search_nav">
      <div class="search_input">
        <img src="./images/search.png" alt="" width="25">
        <input type="search" placeholder="搜索内容" ref="mySearch" name="" id="">
      </div>
      <button @click="isShowSearchPanel(false)">取消</button>
    </div>
    <div class="search_content">
      <div class="title">
        <img src="./images/hot.png" alt="" width="25">
        <span>热门搜索</span>
      </div>
      <ul class="search_list">
        <li>抽纸批发</li>
        <li>浴巾可穿</li>
        <li>石榴水果</li>
        <li>富豪卷纸</li>
        <li>冰箱收纳盒</li>
        <li>毛巾衣服</li>
        <li>小白增高透气</li>
        <li>连衣裙</li>
      </ul>
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
  .search_content
    padding 30px 15px
    .title
      display flex
      align-items center
      color #aaaaaa
      margin-bottom 10px
    .search_list
      display flex
      flex-wrap wrap
      li
        color #aaa
        margin 5px 10px
        padding 5px
        border-radius 5px
        font-weight lighter
        font-size 12px
</style>
