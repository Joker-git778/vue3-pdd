<template>
  <div class="hot">
    <swiper :options="swiperOption" ref="mySwiper" class="ad_swiper" v-if="homecasual">
      <!-- slides -->
      <swiper-slide v-for="(items, index) in homecasual" :key="index">
        <img :src="items.imgurl" alt="" class="ad_img">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!-- 轮播 -->
    <HotNav/>
    <div class="hot_ad">
      <img src="../../imgs/hot_ad/home_ad.gif" alt="">
    </div>
    <!-- 商品列表 -->
    <HotShopList/>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState, mapActions } from 'vuex';
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import HotNav from "./HotNav";
import HotShopList from "./HotShopList";
export default {
  name: "hot",
  data() {
    return {
      swiperOption: {
        // 参数选项,显示分页器
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: true,
        //循环 
        loop:true, 
        //每张播放时长3秒，自动播放 
        autoplay: true, 
        //滑动速度 
        speed:1000, 
        // delay:1000
      },
      swiperImgs: [
        require("../../imgs/rowing/s1.png"),
        require("../../imgs/rowing/s2.png"),
        require("../../imgs/rowing/s3.png"),
        require("../../imgs/rowing/s4.png"),
        require("../../imgs/rowing/s5.png"),
        require("../../imgs/rowing/s6.png"),
        require("../../imgs/rowing/s7.png"),
        require("../../imgs/rowing/s8.png"),
        require("../../imgs/rowing/s9.png")
      ]
    };
  },
  mounted() {
    // 请求轮播数据
    this.reqHomeCasula();
  },
  methods: {
    ...mapActions(["reqHomeCasula"])
  },
  computed: {
    ...mapState(["homecasual"])
  },
  components: {
    swiper,
    swiperSlide,
    HotNav,
    HotShopList
  }
};
</script>

<style lang="stylus">
.hot 
  width 100%
  height 100vh
  img 
    width 100%
  .ad_swiper
    .swiper-pagination
      text-align right
      margin-right 3px
    .swiper-pagination-bullet-active
      background-color #ff0000
  .hot_ad
    background-color #fff
    margin 8px 0
    padding 5px
</style>
