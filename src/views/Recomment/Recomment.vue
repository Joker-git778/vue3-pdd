<template>
  <div class="recomment">
    <ul class="recomment_container" v-if="recommendshoplist">
      <ShopList  v-for="(item, index) in recommendshoplist" :key="index" :item="item" tag="li"/>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapActions, mapState } from "vuex";
import ShopList from "../../components/ShopList/ShopList";

import BScroll from "better-scroll";
export default {
  name:"recomment",
  data() {
    return {
      page: 1,
      count: 20,
      show: true
    }
  },
  mounted() {
    this.$toast.loading({
      message: '加载中...',
      forbidClick: true,
      loadingType: 'spinner'
    });
    this.$store.dispatch("reqRecommentShopList", { page: this.page, count: this.count, callback: () => {
      this.$toast.clear(); // 关闭提示
    } });
  },
  computed: {
    ...mapState(["recommendshoplist"])
  },
  watch: {
    recommendshoplist() {
      this.$nextTick(() => {
        // 让当前页码加1
        this.page += 1;
        this._initBScroll();
      })
    }
  },
  methods: {
    _initBScroll() {
      // 1. 初始化
      this.listScroll = new BScroll(".recomment", {
        scrollY: true,
        probeType: 3
      });
      // 1.2 监听滚动
      this.listScroll.on("touchEnd", (pos) => {
        // 1.2.1 监听下拉
        // console.log(pos.y);
        // console.log(this.listScroll.maxScrollY) // 最大滚动高度
        if (pos.y >= 50) {
          console.log("下拉");
        }
        // 1.2.2 监听上拉
        if (this.listScroll.maxScrollY > pos.y + 20) {
          console.log(this.page)
          // console.log("上拉");
          this.$toast.loading({
            message: '加载中...',
            forbidClick: true,
            loadingType: 'spinner'
          });
          this.$store.dispatch("reqRecommentShopList", { page: this.page, count: this.count, callback: () => {
            this.$toast.clear(); // 关闭提示
          } });
        }
      });
      // 1.3 列表滚动结束
      this.listScroll.on("scrollEnd", () => {
        this.listScroll.refresh(); // 消除bug 重新计算
      })
    }
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
  background-color #fff
  .recomment_container
    display flex
    flex-wrap wrap
    padding-bottom 50px
</style>
