<template>
    <div class="productPayment w-all bg-e">
      <div v-for="payment in payments">
        <div class="gap"></div>
        <div class="bg-f p-column-5" v-if="payment.type == 1" @click="selectThis(payment)">
          <div class="flex-row p-row-15">
            <div class="span1 line-35 font-15">收款姓名：发发发</div>
            <div class="line-35 text-right font-15">银行：中国农业银行</div>
          </div>
          <div class="p-row-15 line-35 font-15">支行：发发发</div>
          <div class="flex-row p-row-15 line-35 font-15">收款账号：发发发</div>
        </div>
        <div class="bg-f p-column-5" v-if="payment.type == 2" @click="selectThis(payment)">
          <div class="flex-row p-row-15 line-35 font-15">收款姓名：发发发</div>
          <div class="flex-row p-row-15 line-35 font-15">支付宝：发发发</div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'productPayment',
        data () {
            return {
                payments:[
                  {name:'fdfssd',account:'',type:1},
                  {name:'fdfssd',account:'',type:2}
                ]
            }
        },
        methods: {
          selectThis(payment){
            this.$store.commit('paymentSave', {
              paymentSelected: payment
            })
            this.$router.back();
          }
        },
        created(){

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
