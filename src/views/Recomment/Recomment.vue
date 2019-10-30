<template>
  <div class="recomment">
    <ul class="recomment_container" v-if="recommendshoplist">
      <li class="recomment_item" v-for="item in recommendshoplist" :key="item.goods_id">
        <img :src="item.image_url" alt="" width="100%" v-if="item.image_url">
        <h4 class="item_title">{{item.short_name}}</h4>
        <div class="item_bottom">
          <span class="item_price">￥{{item.price / 100}}</span>
          <span class="item_sales">{{item.sales_tip}}</span>
          <button class="item_btn">找相关</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapActions, mapState } from "vuex";
export default {
  name:"recomment",
  data() {
    return {

    }
  },
  mounted() {
    this.$store.dispatch("reqRecommentShopList");
  },
  computed: {
    ...mapState(["recommendshoplist"])
  },
  components: {

  }
}
</script>

<style lang="stylus">
.recomment
  background-color #f5f5f5
  width 100%
  height 100vh
  .recomment_container
    display flex
    flex-wrap wrap
    background-color #f5f5f5
    margin-bottom 50px
    .recomment_item:nth-of-type(odd)
      mariginmargin-right 1%
    .recomment_item
      width 49.5%
      background-color #fff
      padding-bottom 15px
      margin-bottom 15px
      .item_title
        line-height 20px
        font-size 13px
        font-weight lighter
        height 20px
        overflow hidden
        margin 5px 0
        padding 0 1px
      .item_bottom 
        display flex
        align-items center
        padding 0 6px
        .item_price
          flex 2
        .item_sales
          flex 3
        .item_btn
          flex 2
</style>
