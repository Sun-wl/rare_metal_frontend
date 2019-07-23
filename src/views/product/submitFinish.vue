<template>
    <div class="productSubmit w-all flex-column span1">
      <div class="span1 flex-column center">
        <img class="submitImg" src="../../assets/img/submit.png" alt="">
        <div class="line-60 font-18 p-t-10">订单提交成功</div>
        <div class="font-color-9">友好提醒：为确保产品数量，请及时付款</div>
      </div>
      <router-link :to=" '/order/details/' + id ">
        <div class="to">查看订单</div>
      </router-link>

    </div>
</template>

<script>
    export default {
        name: 'productSubmit',
        data () {
            return {
                id:''
            }
        },
        methods: {},
        created(){
            this.id = this.$route.params.id;
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .submitImg{
    width:200px;
  }
  .to{
    width:100%;
    height:50px;
    line-height:50px;
    text-align: center;
    color: #fff;
    font-size:18px;
    background: #1171af;
  }
</style>
