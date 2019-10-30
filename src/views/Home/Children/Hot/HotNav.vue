<template>
  <div class="hot_nav">
    <swiper :options="swiperOption" v-if="homenav">
      <swiper-slide v-for="(swiperImg, index) in swiperImgUrl" :key="index"  class="nav-content-inner">
        <a class="inner_item" v-for="(items, index) in swiperImg" :key="index">
          <img :src="items.iconurl" alt="">
          <span>{{items.icontitle}}</span>
        </a>
      </swiper-slide>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { mapState, mapActions } from "vuex";
export default {
  name: "hot_nav",
  data() {
    return {
      swiperOption: {
        scrollbar: {
          el: ".swiper-scrollbar"
        }
      },
      imgUrl: [
        {
          url: require("../../imgs/nav/nav_icon01.png"),
          name: "热卖"
        },
        {
          url: require("../../imgs/nav/nav_icon02.png"),
          name: "热卖"
        },
        {
          url: require("../../imgs/nav/nav_icon03.png"),
          name: "热卖"
        },
        {
          url: require("../../imgs/nav/nav_icon04.png"),
          name: "热卖"
        },
        {
          url: require("../../imgs/nav/nav_icon05.png"),
          name: "热卖"
        },
        {
          url: require("../../imgs/nav/nav_icon06.gif"),
          name: "热卖"
        },
        {
          url: require("../../imgs/nav/nav_icon07.png"),
          name: "热卖"
        },
        {
          url: require("../../imgs/nav/nav_icon08.png"),
          name: "热卖"
        },
        {
          url: require("../../imgs/nav/nav_icon09.png"),
          name: "热卖"
        },
        {
          url: require("../../imgs/nav/nav_icon10.png"),
          name: "热卖"
        },
        {
          url: require("../../imgs/nav/nav_icon11.png"),
          name: "热卖"
        },
        {
          url: require("../../imgs/nav/nav_icon12.png"),
          name: "热卖"
        },
        {
          url: require("../../imgs/nav/nav_icon13.png"),
          name: "热卖"
        },
        {
          url: require("../../imgs/nav/nav_icon14.png"),
          name: "热卖"
        },
        {
          url: require("../../imgs/nav/nav_icon15.png"),
          name: "热卖"
        },
        {
          url: require("../../imgs/nav/nav_icon16.png"),
          name: "热卖"
        }
      ]
    };
  },
  computed: {
    ...mapState(['homenav']),
    swiperImgUrl() {
      const { homenav } = this;
      // 准备空的二维数组
      const arr = [];
      let minArr = [];
      // 遍历imgUrl
      homenav.forEach(element => {
        if (minArr.length === 8) {
          arr.push(minArr);
          minArr = [];
        }
        minArr.push({
          icontitle: element.icontitle,
          iconurl: element.iconurl
        });
      });
      if (minArr) {
        arr.push(minArr);
      }
      // console.log(arr);
      return arr;
    }
  },
  mounted() {
    this.reqHomeNav();
  },
  methods: {
    ...mapActions(["reqHomeNav"])
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style lang="stylus">
.hot_nav 
  margin-bottom 5px
  background-color #fff
  .swiper-scrollbar-drag 
    background-color: rgb(247, 76, 85)
  .nav-content-inner
    width 100%
    height 150px
    display flex
    flex-wrap wrap
    .inner_item
      width 25%
      height 70px
      display flex
      flex-direction column
      justify-content center
      align-items center
      font-size 14px
      color #666666
      img
        width 30%
        margin-bottom 5px
  .swiper-container-horizontal > .swiper-scrollbar
    width 50%
    height 3px
    left 50%
    margin-left -25%
</style>
