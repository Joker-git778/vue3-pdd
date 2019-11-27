<template>
  <div class="loginContainer">
    <!--登录面板内容部分-->
    <div class="login_inner">
      <!--面板头部-->
      <div class="login_header">
        <div class="login_logo">
          <img src="./images/login-logo.png" alt width="250" />
        </div>
        <!--面板标题-->
        <div class="login_header_title">
          <a href="javascript:;" :class="{current: loginMode}" @click="dealLoginMode(true)">验证码登录</a>
          <a href="javascript:;" :class="{current: !loginMode}" @click="dealLoginMode(false)">密码登录</a>
        </div>
      </div>
      <!--面板表单部分-->
      <div class="login_content">
        <form>
          <!--手机验证码登录部分-->
          <div :class="{current: loginMode}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone" />
              <button
                v-if="!countDown"
                class="get_verification"
                :class="{phone_right: phoneRight}"
                @click.prevent="getVerifyCode()"
              >获取验证码</button>
              <button v-else disabled="disabled" class="get_verification">已发送({{countDown}}s)</button>
            </section>
            <section class="login_verification">
              <input type="text" maxlength="6" placeholder="验证码" v-model="code" />
            </section>
            <section class="login_hint">
              温馨提示：未注册撩课帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">服务协议与隐私政策</a>
            </section>
          </div>
          <!--账号登录部分-->
          <div :class="{current: !loginMode}">
            <section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="用户名/手机/邮箱" v-model="user_name" />
              </section>
              <section class="login_verification">
                <input type="password" maxlength="18" placeholder="密码" v-if="pwdMode" v-model="pwd" />
                <input type="text" maxlength="18" placeholder="密码" v-else v-model="pwd" />
                <div class="switch_show">
                  <img
                    @click.prevent="dealPwdMode(false)"
                    :class="{on: pwdMode}"
                    src="./images/hide.png"
                    alt
                    width="20"
                  />
                  <img
                    @click.prevent="dealPwdMode(true)"
                    :class="{on: !pwdMode}"
                    src="./images/show.png"
                    alt
                    width="20"
                  />
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha" />
                <img
                  ref="captcha"
                  class="get_verification"
                  src="http://localhost:3000/api/captcha"
                  alt="captcha"
                  @click.prevent="getCaptcha()"
                />
              </section>
            </section>
          </div>
          <button class="login_submit" @click.prevent="login()">登录</button>
        </form>
        <button class="login_back" @click="$router.back()">返回</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { getPhoneCode, phoneCodeLogin, loginPwd } from "@/api/index";
export default {
  name: "page",
  data() {
    return {
      loginMode: true, // 登录方式 验证码true 账号true
      phone: "", // 电话
      countDown: 0, // 倒计时
      phoneRight: false,
      pwd: "", // 密码
      code: "", // 手机号验证码
      userInfo: "", // 用户信息
      user_name: "", // 密码验证
      pwdMode: true, // 密码显示false 隐藏 true
      captcha: "" // 图形验证码
    };
  },
  methods: {
    // 登录模式
    dealLoginMode(val) {
      this.loginMode = val;
    },
    // 手机验证码
    async getVerifyCode() {
      // 1. 开启倒计时
      if (this.phoneRight) {
        this.countDown = 30;
        this.intervalId = setInterval(() => {
          this.countDown--;
          // 判断
          if (this.countDown === 0) {
            clearInterval(this.intervalId);
          }
        }, 1000);
      }
      // 2. 获取短信验证码
      let res = await getPhoneCode(this.phone);
      console.log(res);
      // 3. 获取失败
      if (res.err_code === 0) {
        this.$notify({ type: "danger", message: res.message }); // vant 提示
        this.countDown = 0;
      }
    },
    // 密码显示方式
    dealPwdMode(val) {
      this.pwdMode = val;
    },
    // 获取图形验证码
    getCaptcha() {
      this.$refs.captcha.src =
        "http://localhost:3000/api/captcha?time=" + new Date();
    },
    // 登录
    async login() {
      // 判断登录方式
      if (this.loginMode) {
        // 验证码
        if (!this.phone) {
          return this.$notify({ type: "danger", message: "请输入手机号" });
        } else if (!this.phoneRight) {
          return this.$notify({ type: "danger", message: "手机号格式不正确" });
        } else if (!this.code) {
          return this.$notify({ type: "danger", message: "请输入验证码" });
        } else if (!/^\d{6}$/.test(this.code)) {
          // 正则六位纯数字
          return this.$notify({ type: "danger", message: "验证码格式不正确" });
        } else {
          const res = await phoneCodeLogin(this.phone, this.code);
          console.log(res);
          this.userInfo = res.message;
        }
      } else {
        // 密码
        if (!this.user_name) {
          return this.$notify({
            type: "danger",
            message: "请输入用户名/手机/邮箱!"
          });
        } else if (!this.pwd) {
          return this.$notify({ type: "danger", message: "请输入密码!" });
        } else if (!this.captcha) {
          return this.$notify({ type: "danger", message: "请输入验证码!" });
        } else {
          return this.$notify({ type: "success", message: "我是模拟的-登陆成功！" });
        }
      }

      // 处理
      if (!this.userInfo.id) {
        // console.log(this.userInfo);
        // 失败
        this.$notify({ type: "danger", message: this.userInfo });
      } else {
        // 成功
        // 同步数据
        this.$store.dispatch("syncUserInfo", this.userInfo);
        this.$router.back();
      }
    }
  },
  watch: {
    phone(val) {
      let tel = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/;
      if (tel.test(val)) {
        this.phoneRight = true;
      }
    },
    user_name() {
      let user = /^[a-zA-Z0-9_-]{4,16}$/; // 字母 数字 下划线
      let tel = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/;
      let email = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      if (user.test(this.user_name)) {
        console.log(1);
      }
    }
  },
  components: {}
};
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl';

.loginContainer {
  width: 100%;
  height: 100%;
  background: #fff;

  .login_inner {
    padding-top: 60px;
    width: 80%;
    margin: 0 auto;

    .login_header {
      .login_logo {
        font-size: 40px;
        font-weight: bold;
        color: #e02e24;
        text-align: center;

        img {
          display: inline-block;
          width: 150px;
          height: 100px;
        }
      }

      .login_header_title {
        padding-top: 40px;
        padding-bottom: 10px;
        text-align: center;

        > a {
          color: #333;
          font-size: 14px;
          padding-bottom: 4px;

          &:first-child {
            margin-right: 40px;
          }

          &.current {
            color: #e02e24;
            font-weight: 700;
            border-bottom: 2px solid #e02e24;
          }
        }
      }
    }

    .login_content {
      > form {
        > div {
          display: none;

          &.current {
            display: block;
          }

          input {
            width: 100%;
            height: 100%;
            padding-left: 8px;
            box-sizing: border-box;
            border: 1px solid #ddd;
            border-radius: 4px;
            outline: 0;
            font: 400 14px Arial;

            &:focus {
              border: 1px solid #e02e24;
            }
          }

          .login_message {
            position: relative;
            margin-top: 16px;
            height: 48px;
            font-size: 14px;
            background: #fff;

            .get_verification {
              position: absolute;
              top: 50%;
              right: 10px;
              transform: translateY(-50%);
              border: 0;
              color: #ccc;
              font-size: 14px;
              background: transparent;

              &.phone_right {
                color: #e02e24;
              }
            }
          }

          .login_verification {
            position: relative;
            margin-top: 16px;
            height: 48px;
            font-size: 14px;
            background: #fff;

            .switch_show {
              position: absolute;
              right: 10px;
              top: 12px;

              img {
                display: none;
              }

              img.on {
                display: block;
              }
            }
          }

          .login_hint {
            margin-top: 12px;
            color: #999;
            font-size: 12px;
            line-height: 20px;

            > a {
              color: #e02e24;
            }
          }
        }

        .login_submit {
          display: block;
          width: 100%;
          height: 42px;
          margin-top: 30px;
          border-radius: 4px;
          background: #e02e24;
          color: #fff;
          text-align: center;
          font-size: 16px;
          line-height: 42px;
          border: 0;
        }
      }

      .login_back {
        display: block;
        width: 100%;
        height: 42px;
        margin-top: 15px;
        border-radius: 4px;
        background: transparent;
        border: 1px solid #e02e24;
        color: #e02e24;
        text-align: center;
        font-size: 16px;
        line-height: 42px;
      }
    }
  }
}
</style>
