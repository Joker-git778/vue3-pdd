<template>
  <div class="MeCommonCell" @click="clickCell(leftTitle)">
    <div class="cell_left" :style="{color: leftTitleColor}">
      <i :class="leftIcon"></i>
      <span v-if="leftTitle">{{leftTitle}}</span>
    </div>
    <div class="cell_right" :style="{color: rightTitleColor}">
      <span v-if="rightTitle" style="font-size: 13px;">{{rightTitle}}</span>
      <i v-if="isShowRightArrow" class="pdd-uniE909"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name:"MeCommonCell",
  data() {
    return {

    }
  },
  props: {
    leftTitle: { type: String, default: "" },
    leftIcon: { type: String, default: "" },
    rightTitle: { type: String, default: "" },
    leftTitleColor: { type: String, default: "#333" },
    rightTitleColor: { type: String, default: "#666" },
    isShowRightArrow: { type: Boolean, default: true },
    clickCell: { type: Function, default: () => {} }
  },
  components: {

  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
.MeCommonCell
    height 44px
    background-color #fff
    display flex
    justify-content space-between
    align-items center
    padding 0 10px
    border-bottom 1px solid #ececec
    .cell_left,
    .cell_right
      display flex
      align-items center
      i
        margin-right 5px
</style>
