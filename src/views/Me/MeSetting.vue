<template>
  <div class="me_setting">
    <div>
      <MeCommonCell left-icon="pdd-3" left-title="免密支付设置"/>
      <MeCommonCell left-icon="pdd-2" left-title="免拼卡设置"/>
      <MeCommonCell left-icon="pdd-1" left-title="消息接收设置" right-title-color="接收" :click-cell="dealClickCell"/>
    </div>
    <div style="margin-top: 10px;">
      <MeCommonCell leftIcon="pdd-4" :click-cell="dealClickCell"/>
      <MeCommonCell leftIcon="pdd-5"/>
    </div>
    <div style="margin-top: 10px;">
      <MeCommonCell leftIcon="pdd-1"  left-title="免密支付设置"/>
    </div>

    <div class="login_out" @click="dealLogout">退出登录</div>
  </div>
</template>

<script type="text/ecmascript-6">
import MeCommonCell from "./MeCommonCell";
import { Dialog } from 'vant';
export default {
  name:"page",
  data() {
    return {
      
    }
  },
  methods: {
    dealClickCell(props) {
      // console.log(1)
      Dialog({ message: `点击了${props}` });
    },
    dealLogout() {
      Dialog.confirm({
        title: '登录',
        message: '确定退出登录？'
      }).then(() => {
        this.$store.dispatch("logOut");
        this.$router.replace("/");
      }).catch(() => {
        // on cancel
      });
    }
  },
  components: {
    MeCommonCell
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
.me_setting
  width 100%
  height 100%
  background-color #ececec
  .login_out 
    width 100%
    height 44px
    line-height 44px
    text-align center
    margin-top 10px
    background-color #fff
</style>
