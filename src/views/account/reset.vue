<template>
  <div class="reset span1">
    <div style="height:180px;">
      <img class="img1" src="../../assets/img/img1.png" alt="">
    </div>
    <div class="p-row-50">
      <div class="list">
        <div class="cell">
          <div class="cell-left">
            <img class="img-20" src="../../assets/img/phone.png" alt="">
          </div>
          <div class="cell-main">
            <input class="cell-input" type="number" v-model="params.mobile" placeholder="请输入手机号码" autofocus="true">
          </div>
          <div class="cell-right">
            <img class="img-15" src="../../assets/img/del.png" alt="" @click="delPhone">
          </div>
        </div>
        <div class="cell">
          <div class="cell-left">
            <img class="img-20" src="../../assets/img/code.png" alt="">
          </div>
          <div class="cell-main">
            <input class="cell-input" type="number" v-model="params.captcha" placeholder="请输入验证码">
          </div>
          <div class="p-r-10">
            <div class="code" @click="sendCode(3,opts.params.mobile)">{{text}}</div>
          </div>
        </div>
        <div class="cell">
          <div class="cell-left">
            <img class="img-20" src="../../assets/img/lock.png" alt="">
          </div>
          <div class="cell-main">
            <input class="cell-input" type="password" v-model="params.password" placeholder="请输入密码(至少六位)"
                   v-if="!passwordShow">
            <input class="cell-input" type="text" v-model="params.password" placeholder="请输入密码(至少六位)"
                   v-if="passwordShow">
          </div>
          <div class="cell-right">
            <div class="flex-row">
              <img class="img-15" src="../../assets/img/eye.png" alt=""
                   v-show="!passwordShow" @click="passwordShowOrNot">
              <img class="img-15" src="../../assets/img/eyeClose.png" alt=""
                   v-show="passwordShow" @click="passwordShowOrNot">
              <img class="img-15 m-l-10" src="../../assets/img/del.png" alt="" @click="delPassword">
            </div>
          </div>
        </div>
      </div>
      <div class="p-column-60">
        <button @click="reset(params)">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'reset',
    data () {
      return {
        passwordShow: false,
        params: {
          'mobile': '',
          'password': '',
          'captcha': ''
        }
      }
    },
    methods: {
      delPhone(){
        this.params.mobile = '';
      },
      delPassword(){
        this.params.password = '';
      },
      passwordShowOrNot(){
        this.passwordShow = !this.passwordShow;
      }
    },
    created(){
      localStorage.setItem('ticket', '')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .img1 {
    width: 150px;
    position: absolute;
    right: 0;
    top: 0;
  }

  .code {
    height: 100%;
    line-height: 25px;
    color: #1171af;
    border: 1px dashed #1171af;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    padding: 0 10px;
  }
</style>
