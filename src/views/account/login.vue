<template>
  <div class="login span1">
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
            <input class="cell-input" type="number" v-model="mobile" placeholder="手机号码" autofocus="true">
          </div>
          <div class="cell-right">
            <img class="img-15" src="../../assets/img/del.png" alt="" @click="delPhone">
          </div>
        </div>
        <div class="cell">
          <div class="cell-left">
            <img class="img-20" src="../../assets/img/lock.png" alt="">
          </div>
          <div class="cell-main">
            <input class="cell-input" type="password" v-model="password" placeholder="密码"
                   v-if="!passwordShow">
            <input class="cell-input" type="text" v-model="password" placeholder="密码" v-if="passwordShow">
          </div>
          <div class="cell-right">
            <div class="flex-row">
              <img class="img-15" src="../../assets/img/eye.png" alt="" v-if="!passwordShow"
                   @click="passwordShowOrNot">
              <img class="img-15" src="../../assets/img/eyeClose.png" alt="" v-if="passwordShow"
                   @click="passwordShowOrNot">
              <img class="img-15 m-l-10" src="../../assets/img/del.png" alt="" @click="delPassword">
            </div>
          </div>
        </div>
      </div>
      <div class="flex-row right">
        <div class="w-80">
          <router-link to="/reset">
            <div class="font-color-theme p-10 text-right">重置密码</div>
          </router-link>
        </div>
      </div>
      <div class="p-column-60">
        <button @click="login(mobile,password)">登录</button>
        <div class="text-center p-t-20">
          还没有账号，请立即
          <router-link to="/register"><span class="font-color-theme">注册</span></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        mobile: '',
        password: '',
        passwordShow: false,
      }
    },
    methods: {
      delPhone(){
        this.mobile = '';
      },
      delPassword(){
        this.password = '';
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
</style>
