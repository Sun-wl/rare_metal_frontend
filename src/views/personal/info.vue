<template>
  <div class="personalInfo w-all bg-e flex-column">
    <div class="gap"></div>
    <div class="list">
      <div class="cell">
        <div class="cell-large-left">
          <img class="img-20" src="../../assets/img/personalImg4.png" alt="">
        </div>
        <div class="cell-large-title">企业名称：</div>
        <div class="cell-main font-color-9">{{customer.companyName}}</div>
      </div>
      <div class="cell">
        <div class="cell-large-left">
          <img class="img-20" src="../../assets/img/personalImg5.png" alt="">
        </div>
        <div class="cell-large-title">联系人：</div>
        <div class="cell-main font-color-9">{{customer.realName}}</div>
      </div>
      <div class="cell">
        <div class="cell-large-left">
          <img class="img-20" src="../../assets/img/personalImg6.png" alt="">
        </div>
        <div class="cell-large-title">手机号：</div>
        <div class="cell-main font-color-9">{{customer.mobile}}</div>
      </div>
    </div>
    <div class="gap"></div>
    <div class="span1 list scroll-y" v-if="billing.length">
      <div class="flex-row border-top" v-for="list in billing">
        <div class="p-row-20 p-t-13">
          <img class="img-20" src="../../assets/img/personalImg7.png" alt="">
        </div>
        <div class="span1 ">
          <div class="cell">
            <div class="cell-large-title">开票名称：</div>
            <div class="cell-main font-color-9">{{list.title}}</div>
          </div>
          <div class="cell">
            <div class="cell-large-title">纳税人识别号：</div>
            <div class="cell-main font-color-9">{{list.tfn}}</div>
          </div>
          <div class="cell">
            <div class="cell-large-title">开票地址：</div>
            <div class="cell-main font-color-9">{{list.reciveAddress}}</div>
          </div>
          <div class="cell" style="border: none;">
            <div class="cell-large-title">开票电话：</div>
            <div class="cell-main font-color-9">{{list.reciveMobile}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'personalInfo',
    data () {
      return {
        customer: {},
        billing: []
      }
    },
    methods: {},
    created(){
      var _this = this;
      /*this.userInfo(function (res) {
        if (res.statusCode == 200) {
          _this.customer = res.data.customer
          _this.billing = res.data.billing
        } else if(res.statusCode == 401){
          sessionStorage.setItem('backUrl', _this.$route.path)
          alert(res.message)
          _this.$router.push('/')
        } else {
          alert(res.message)
        }
      })*/
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
