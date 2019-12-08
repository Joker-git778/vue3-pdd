<template>
  <div class="user_detail">
    <div class="user_detail_top">基本信息</div>
    <div class="user_detail_group">
      <div class="user_icon">
        <span>头像</span>
        <img src="./images/me_icon.png" alt=""/>
      </div>
      <div class="user_icon">
        <span>手机</span>
        <span>189****87892</span>
      </div>
      <div class="user_icon">
        <span>昵称</span>
        <span><input type="text"></span>
      </div>
      <div class="user_icon" @click="show = true">
        <span>性别</span>
        <span>{{userSex}}</span>
      </div>
      <div class="user_icon">
        <span>常住地</span>
        <span><input type="text"></span>
      </div>
      <div class="user_icon" @click="showDatetime = true">
        <span>生日</span>
        <span>{{userBirthday}}</span>
      </div>
      <div class="user_icon">
        <span>个性签名</span>
        <span><input type="text"></span>
      </div>
    </div>
    <!--选择性别-->
    <van-action-sheet v-model="show" :actions="actions" @select="onSelect" cancel-text="取消"/>
    <!--选择出生日期-->
    <van-popup
      v-model="showDatetime"
      position="bottom"
    >
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="confirm"
      />
    </van-popup>
  </div>
</template>

<script>
  // import moment from 'moment'
  export default {
    name: "UserDetail",
    data(){
      return {
        // 0.属性
        userSex: '',
        userBirthday: '',

         // 1. 性别
        show: false,
        actions: [
          { name: '男' },
          { name: '女' }
        ],

        // 2. 日期
        currentDate: new Date(),
        minDate: new Date("1919", "0", "1"),
        maxDate: new Date(),
        showDatetime: false
      }
    },
    methods:{
      handleBirthday(data){
          this.userBirthday =  moment(data).format('YYYY年MM月DD日');
      },
      onSelect(item) {
      // 默认情况下，点击选项时不会自动关闭菜单
      // 可以通过 close-on-click-action 属性开启自动关闭
        this.show = false;
        this.userSex = item.name;
      },
      confirm(value) {
        var date = value;
        var m = date.getMonth() + 1;
        var d = date.getDate();
        if (m >= 1 && m <= 9) {
            m = "0" + m;
        }
        if (d >= 0 && d <= 9) {
            d = "0" + d;
        }
        var timer = date.getFullYear() + "-" + m + "-" + d;
        // console.log(timer);
        this.userBirthday = timer;
        this.showDatetime = false;
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .user_detail
    width 100%
    height 100%
    .user_detail_top
      width 100%
      height 60px
      line-height 60px
      padding-left 10px
      font-weight bold
      background-color #fff
      border-bottom: 1px solid #e0e0e0
    .user_detail_group
      .user_icon
        height 60px
        padding 0 10px
        background-color #fff
        border-bottom: 1px solid #e0e0e0
        display flex
        justify-content space-between
        align-items center
        img
          width 45px
          height 100%
          margin 10px 0
          border-radius 50%
      .user_icon
        height 40px
        padding 0 10px
        background-color #fff
        border-bottom: 1px solid #e0e0e0
        display flex
        justify-content space-between
        align-items center
        input
          border none
          outline none
          text-align right
      button
        width 90%
        height 40px
        line-height 40px
        background-color #e9232c
        text-align center
        margin 20px 5%
        border none
        font-size 16px
        color #fff
        border-radius 10px
    .right-title-color
      color #999
      font-size 14px
</style>
