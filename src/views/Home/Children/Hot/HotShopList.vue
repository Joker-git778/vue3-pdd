<template>
  <div class="shop-container" v-if="homeshoplist">
    <ul class="shop-list">
      <li class="shop-list-item" v-for="shop in homeshoplist" :key="shop.goods_id">
        <img :src="shop.image_url" alt width="100%" />
        <h4 class="list-item-title">{{shop.goods_name}}</h4>
        <div class="list-item-bottom">
          <span class="item-price">￥{{shop.normal_price / 100}}</span>
          <span class="item-counter">已拼{{shop.market_price}}件</span>
          <span class="item-user">
            <img v-for="item in shop.bubble" :key="item.group_order_id" :src="item.avatar" alt />
          </span>
          <span class="item-buy">
            <button>去拼单 &gt;</button>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "HotShopList",
  mounted() {
    this.reqHomeShopList();
  },
  computed: {
    ...mapState(["homeshoplist"])
  },
  methods: {
    ...mapActions(["reqHomeShopList"])
  }
};
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.shop-container {
  margin-bottom: 50px;
  background-color: #f5f5f5;

  .shop-list {
    padding-left: 0;

    .shop-list-item {
      width: 100%;
      margin-bottom: 10px;
      background-color: #fff;
      display: flex;
      flex-direction: column;

      .list-item-title {
        line-height: 22px;
        width: 94%;
        margin-left: 3%;
        height: 44px;
        overflow: hidden;
      }

      .list-item-bottom {
        margin: 10px 0;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

        .item-price {
          font-size: 18px;
          text-align: center;
          font-weight: bolder;
          color: red;
          flex: 1;
        }

        .item-counter {
          flex: 2;
          font-size: 12px;
          color: #cccccc;
        }

        .item-user {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1;

          img {
            width: 30px;
            border-radius: 50%;
          }

          img:nth-child(2) {
            margin-left: -6px;
          }
        }

        .item-buy {
          flex: 2;

          button {
            width: 80%;
            height: 34px;
            font-size: 15px;
            border: none;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 10px;
            background-color: red;
            border-radius: 8px;
          }
        }
      }
    }
  }
}
</style>
