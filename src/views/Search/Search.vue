<template>
  <div class="search">
    <SearchNav />
    <div class="shop">
      <!-- 左面 -->
      <div class="menu_wrapper" ref="menu_wrapper">
        <ul>
          <!-- current -->
          <li
            class="menu_item"
            v-for="(goods, index) in searchGoods"
            :key="index"
            :class="{current: index === currentIndex}"
            @click="clickLeftItem(index)"
            ref="menuList"
          >
            <!-- 3.2.1 动态绑定类名 :class="{current: index === currentIndex}" -->
            <!-- 4 绑定事件 @touchend="touchendLeftItem" -->
            <!-- 4.2 左右联动 ref="menuList" -->
            <span>{{goods.name}}</span>
          </li>
        </ul>
      </div>
      <!-- 右面 -->
      <div class="shop_wrapper">
        <!-- 2.3.3 绑定ref -->
        <ul ref="shopsParent">
          <li class="shops_li" v-for="(goods, index) in searchGoods" :key="index">
            <div class="shops_title">
              <h4>{{goods.name}}</h4>
              <a href="#">查看更多</a>
            </div>
            <ul class="phone_type" v-if="goods.tag === 'phone'">
              <li v-for="(phone, index) in goods.category" :key="index">
                <img :src="phone.icon" alt />
              </li>
            </ul>
            <ul class="shop_items">
              <li v-for="(item, index) in goods.items" :key="index">
                <img :src="item.icon" alt />
                <span>{{item.title}}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from "vuex";
// 1. 下载BScroll
/**
 * better-scroll 原理
 * 1. 有父级容器 eg: .menu_wrapper
 * 2. 超出部分隐藏
 * 3. 父级包裹子集，子集高度超过父级 滚动 注意：如果不滚动很大可能是高度不够
 * 4. 定位是 absolute 注意.shop css样式
 */
import BScroll from "better-scroll";
import SearchNav from "./children/SearchNav";
export default {
  name: "search",
  data() {
    return {
      // 2.3.3 定义属性
      scrollY: 0, // 右侧滑动Y轴坐标 (实时更新)
      rightLiTops: [] // 所有分类的头部位置
    };
  },
  mounted() {
    this.$store.dispatch("reqSearchGoods");
  },
  computed: {
    ...mapState(["searchGoods"]),
    // 3.2 定义动态属性
    currentIndex() {
      const { scrollY, rightLiTops } = this;
      // 3.2.1 取出索引 返回循环
      return rightLiTops.findIndex((value, index) => {
        // 4.2 调用左右联动
        this._leftScroll(index);
        // console.log('scrollY' + scrollY);
        // console.log("value" + value);
        return scrollY >= value && scrollY < rightLiTops[index + 1];
      });
    }
  },
  watch: {
    // 2. 监听数据
    searchGoods() {
      this.$nextTick(() => {
        // 2.1 滑动事件
        this._initBScroll();
        // 2.3 求出右边所有板块的位置
        this._initRightLiTops();
      });
    }
  },
  methods: {
    // 2.1 滑动事件
    _initBScroll() {
      // 2.2 左面 定义全局变量
      this.leftScroll = new BScroll(".menu_wrapper", {
        scrollY: true,
        click: true
      });
      this.rightScroll = new BScroll(".shop_wrapper", {
        scrollY: true,
        click: true,
        probeType: 3
      });
      // 3. 监听右侧滑动事件
      this.rightScroll.on("scroll", pos => {
        this.scrollY = Math.abs(pos.y);
        // console.log(this.rightLiTops);
      });
      this.rightScroll.on("scrollEnd", pos => {
        this.scrollY = Math.abs(pos.y);
        // console.log(this.rightLiTops);
      });
    },
    // 2.3 求出右边所有板块的位置 事件
    _initRightLiTops() {
      // 2.3.1 临时数组
      const tempArr = [];
      // 2.3.2 定义变量记录高度
      let top = 0;
      tempArr.push(top); // 添加第一个的高度
      // 2.3.3 遍历li标签 取出高度
      let allLis = this.$refs.shopsParent.getElementsByClassName("shops_li");
      // console.log(allLis);
      Array.prototype.slice.call(allLis).forEach(li => {
        top += li.clientHeight;
        // console.log(top);
        tempArr.push(top);
      });
      // 2.3.4 更新数据
      this.rightLiTops = tempArr;
    },
    // 4. 点击左面切换右面
    clickLeftItem(index) {
      // console.log(index);
      // 4.1 判断是不是点击最后一个
      const scrollY = this.rightLiTops[index];
      this.scrollY = scrollY;
      this.rightScroll.scrollTo(0, -scrollY, 300);
    },
    // 4.2 左右联动
    _leftScroll(index) {
      let menuLists = this.$refs.menuList;
      // console.log(menuLists);
      let el = menuLists[index]; // 获取到li标签
      // console.log(el)
      this.leftScroll.scrollToElement(el, 300, 0, -50)
      
    }
  },
  components: {
    SearchNav
  }
};
</script>

<style  lang="stylus"  scoped>
.search {
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .shop {
    display: flex;
    position: absolute;
    top: 60px;
    bottom: 50px;
    width: 100%;
    overflow: hidden;
  }

  .menu_wrapper {
    flex: 0 0 80px;
    background-color: #e0e0e0;

    .menu_item {
      width: 100%;
      height: 60px;
      background-color: #fafafa;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: lighter;
      color: #666;
    }

    .current {
      color: #e02e24;
    }

    .current::before {
      content: '';
      background-color: #e02e24;
      width: 4px;
      height: 30px;
      position: absolute;
      left: 0;
    }
  }

  .shop_wrapper {
    flex: 1;
    background-color: #ffffff;

    .shops_title {
      display: flex;
      padding: 0 10px;
      height: 44px;
      align-items: center;
      justify-content: space-between;
      color: #999999;

      a {
        color: #999;
        text-decoration: none;
        font-weight: lighten;
      }
    }

    .phone_type {
      display: flex;
      flex-wrap: wrap;
      border-bottom-1px(#cccccc);

      li {
        width: 33.3%;
        margin: 5px 0;

        img {
          width: 70%;
          display: block;
          margin: 0 auto;
        }
      }
    }

    .shop_items {
      display: flex;
      flex-wrap: wrap;

      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 33.3%;
        height: 90px;
        color: #333333;
        font-weight: lighter;
        font-size: 14px;

        img {
          width: 60%;
          height: 60%;
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>
