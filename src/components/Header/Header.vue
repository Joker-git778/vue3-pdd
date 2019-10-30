<template>
  <div class="header_page">
    <ly-tab v-model="selectedId" :items="items" :options="options" @change="handleChange"></ly-tab>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "header_page",
  data() {
    return {
      selectedId: 0,
      items: [
        { label: "热门" },
        { label: "服饰" },
        { label: "鞋包" },
        { label: "母婴" },
        { label: "百货" },
        { label: "食品" },
        { label: "内衣" },
        { label: "男装" },
        { label: "电器" }
      ],
      options: {
        activeColor: "#f63d47"
        // 可在这里指定labelKey为你数据里文字对应的字段
      },
      // 二级路由路径
      subRouterUrl: [
        "/home/hot",
        "/home/dress",
        "/home/box",
        "/home/mbaby",
        "/home/general",
        "/home/food",
        "/home/shirt",
        "/home/man",
        "/home/ele"
      ]
    };
  },
  methods: {
    handleChange(item, index) {
      // console.log(item, index);
      this.$router.push(this.subRouterUrl[index]);
    }
  },
  components: {}
};
</script>

<style  lang="stylus" scoped>
  .header_page
    position sticky
    top 0px
    z-index 999
</style>
