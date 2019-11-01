<template>
  <div class="recomment">
    <ul class="recomment_container" v-if="recommendshoplist">
      <ShopList  v-for="item in recommendshoplist" :key="item.goods_id" :item="item" tag="li"/>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapActions, mapState } from "vuex";
import ShopList from "../../components/ShopList/ShopList";
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
    ShopList
  }
}
</script>

<style lang="stylus">
.recomment
  width 100vw
  height 100vh
  .recomment_container
    display flex
    flex-wrap wrap
    margin-bottom 50px
</style>
