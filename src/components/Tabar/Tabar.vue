<template>
  <div class="tab_bottom">
    <span
      class="tab_item"
      v-for="(items, index) in imgUrl"
      :key="index"
      @touchend="switchTo(index)"
    >
      <img :src="on===index ? items.selected : items.initial" alt />
      <span :class="on===index ? 'on' : ''">{{items.name}}</span>
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "tab_bottom",
  data() {
    return {
      on: 0,
      imgUrl: [
        {
          initial: require("../../common/img/icon_home.png"),
          selected: require("../../common/img/icon_home_selected.png"),
          routerTo: "/home",
          name: "首页"
        },
        {
          initial: require("../../common/img/icon_intro.png"),
          selected: require("../../common/img/icon_intro_selected.png"),
          routerTo: "/recomment",
          name: "推荐"
        },
        {
          initial: require("../../common/img/icon_search.png"),
          selected: require("../../common/img/icon_search_selected.png"),
          routerTo: "/search",
          name: "搜索"
        },
        {
          initial: require("../../common/img/icon_chat.png"),
          selected: require("../../common/img/icon_chat_selected.png"),
          routerTo: "/chat",
          name: "聊天"
        },
        {
          initial: require("../../common/img/icon_mine.png"),
          selected: require("../../common/img/icon_mine_selected.png"),
          routerTo: "/me",
          name: "我的"
        }
      ]
    };
  },
  methods: {
    switchTo(index) {
      if (this.on === index) {
        return;
      };
      this.on = index;
      this.$router.push(this.imgUrl[index].routerTo);
    }
  },
  components: {}
};
</script>

<style lang="stylus" scoped>
.tab_bottom {
  width: 100%;
  height: 50px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  display: flex;
  z-index: 999;

  .tab_item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #666;

    img {
      width: 35%;
      margin-bottom: 2px;
    }

    .on {
      color: red;
    }
  }
}
</style>
