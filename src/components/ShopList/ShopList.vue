<template>
  <!-- <div class="shop_list"> -->
    <a class="recomment_item">
      <img :src="item.image_url" alt width="100%" v-if="item.image_url" />
      <h4 class="item_title">{{item.short_name}}</h4>
      <div class="item_bottom">
        <span class="item_price">￥{{item.price / 100}}</span>
        <span class="item_sales">{{item.sales_tip}}</span>
        <button class="item_btn" v-if="false">找相关</button>
        <span v-else class="item_user">
            <img src="http://t00img.yangkeduo.com/goods/images/2018-08-17/9f884fac2a889c9ff1e07c699b316d71.jpeg" alt="">
            <img src="http://t00img.yangkeduo.com/goods/images/2018-08-17/9f884fac2a889c9ff1e07c699b316d71.jpeg" alt="">
        </span>
      </div>
    </a>
  <!-- </div> -->
</template>

<script type="text/ecmascript-6">
export default {
  name: "shop_list",
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
      redirect: () => {
        return {};
      }
    }
  },
  components: {}
};
</script>

<style lang="stylus" scoped>
.recomment_item:nth-child(2n) {
  margin-left: 1%;
}

.recomment_item {
  width: 49.5%;
  background-color: #fff;
  padding-bottom: 15px;
  margin-bottom: 15px;
  mariginmargin-left: 1%;

  .item_title {
    line-height: 20px;
    font-size: 13px;
    font-weight: lighter;
    height: 20px;
    overflow: hidden;
    margin: 5px 0;
    padding: 0 1px;
  }

  .item_bottom {
    display: flex;
    align-items: center;
    padding: 0 6px;

    .item_price {
      flex: 2;
      color: red;
      font-weight: bold;
      font-size: 12px;
    }

    .item_sales {
      flex: 4;
      font-size: 10px;
      color: #666;
    }

    .item_btn {
      flex: 2;
      border: 1px solid orangered;
      height: 26px;
      border-radius: 5px;
      background-color: rgba(0, 0, 0, 0);
      color: red;
      font-size: 10px;
    }

    .item_user {
        img {
            width: 30px;
            border-radius: 50%;
        }
        img:nth-child(2) {
            margin-left: -6px;
        }
    }
  }
}
</style>
