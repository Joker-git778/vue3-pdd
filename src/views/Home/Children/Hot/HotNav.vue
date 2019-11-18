<template>
  <div class="hot_nav" ref="hotNav">
    <vue-scroll :ops="ops"> 
      <div v-if="homenav" class="hot_inner" ref="hotInner">
      <div
        v-for="(swiperImg, index) in swiperImgUrl"
        :key="index"
        class="nav-content-inner"
        ref="navInner"
      >
        <a class="inner_item" v-for="(items, index) in swiperImg" :key="index">
          <img :src="items.iconurl" alt />
          <span>{{items.icontitle}}</span>
        </a>
      </div>
      <div class="scrollbar"></div>
    </div>*
    </vue-scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState, mapActions } from "vuex";
import BScroll from "better-scroll";
export default {
  name: "hot_nav",
  data() {
    return {
      scrollX: 0,
      ops: {
          vuescroll: {
            mode: 'slide'
          },
          rail: {
            background: "#cccccc",
            size: "3px",
            opacity: 0.5,
            gutterOfEnds: "25%",
            gutterOfSide: "0px"
          },
          bar: {
            size: "3px",
            onlyShowBarOnScroll: false,
            background: "#f74c55",
            keepShow: true
          },
          scrollPanel: {
            scrollingY: false
          }
        }
    };
  },
  computed: {
    ...mapState(["homenav"]),
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
      return arr;
    }
  },
  mounted() {
    this.reqHomeNav();
  },
  updated() {
    this.$refs.hotInner.style.width =
      this.$refs.navInner.length * this.$refs.navInner[0].offsetWidth + "px";
  },
  methods: {
    ...mapActions(["reqHomeNav"])
  }
};
</script>

<style lang="stylus">
.hot_nav {
  height: 150px;
  overflow: hidden;
  margin-bottom: 5px;
  background-color: #fff;

  .nav-content-inner {
    float: left;
    width: 100vw;
    height: 150px;
    display: flex;
    flex-wrap: wrap;

    .inner_item {
      width: 25vw;
      height: 70px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      color: #666666;

      img {
        width: 30%;
        margin-bottom: 5px;
      }
    }
  }

}
</style>
