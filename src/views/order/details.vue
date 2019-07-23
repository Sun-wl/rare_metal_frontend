<template>
  <div class="orderDetails w-all span1 flex-column">
    <div class="span1 scroll-y">
      <div class="gap"></div>
      <div class="cell p-row-15 bg-f">
        <div class="cell-main font-15">付款方式</div>
      </div>
      <div class="bg-f p-column-5" v-if="payment.type == 1">
        <div class="flex-row p-row-15">
          <div class="span1 line-30 font-color-9">收款姓名：{{payment.name}}</div>
          <div class="line-30 text-right font-color-9">银行：中国农业银行</div>
        </div>
        <div class="p-row-15 line-30 font-color-9">支行：发发发</div>
        <div class="flex-row p-row-15 line-30 font-color-9">收款账号：发发发</div>
      </div>
      <div class="bg-f p-column-5" v-if="payment.type == 2">
        <div class="flex-row p-row-15 line-30 font-color-9">收款姓名：{{payment.name}}</div>
        <div class="flex-row p-row-15 line-30 font-color-9">支付宝：发发发</div>
      </div>

      <div class="gap"></div>
      <div v-for="(product,index) in products">
        <div class="bg-f">
          <div class="p-column-5 p-row-15 border-bottom">
            <div class="flex-row">
              <div class="span1 line-30 font-16 font-color-purple">产品{{index+1}}</div>
              <div class="span1 flex-row right">
                <router-link :to=" '/order/logistics/'+ 1">
                  <div class="btn border">查看物流</div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="p-column-5">
            <div class="flex-row p-row-15">
              <div class="span1 line-30 font-15">{{product.name}}</div>
            </div>
            <div class="flex-row p-row-15">
              <div class="span1 line-30 font-color-9">交货期：2017-09-20</div>
              <div class="span1 line-30 font-color-9">含税单价(17%)：100克</div>
            </div>
          </div>
          <div class="border-top p-column-5">
            <div class="flex-row p-l-15">
              <div class="span1 line-30 font-color-9">包装规格：1000克/瓶</div>
              <div class="line-30 font-color-9 w-100">数量：100000</div>
              <div class="line-30 font-color-9 w-100">价格：￥80000</div>
            </div>
            <div class="flex-row p-l-15">
              <div class="span1 line-30 font-color-9">包装规格：1000克/瓶</div>
              <div class="line-30 font-color-9 w-100">数量：10000</div>
              <div class="line-30 font-color-9 w-100">价格：￥8000</div>
            </div>
            <div class="flex-row p-l-15">
              <div class="span1 line-30 font-color-9">包装规格：1000克/瓶</div>
              <div class="line-30 font-color-9 w-100">数量：10000</div>
              <div class="line-30 font-color-9 w-100">价格：￥8000</div>
            </div>
          </div>
          <div class="gap-s"></div>
          <router-link :to=" '/personal/area/'+index ">
            <div class="p-column-15 flex-row bg-f">
              <div class="p-row-15">
                <img class="img-18" src="../../assets/img/personalImg2.png" alt="">
              </div>
              <div class="span1">
                <div class="flex-row">
                  <div class="span1">李白</div>
                  <div class="span1 text-right">13888888888</div>
                </div>
                <div class="p-t-10">地址：11111111111</div>
              </div>
              <div class="p-row-15 flex-column center">
                <img class="img-15" src="../../assets/img/to.png" alt="">
              </div>
            </div>
          </router-link>
          <div class="gap-s"></div>
          <div class="list">
            <div class="p-row-15 p-column-5 border-bottom">
              <div class="font-13 line-25">保险费：0.15%</div>
              <div class="font-13 line-25">开票名称：dfdsfsdfdfdfdfdfd</div>
              <div class="font-13 line-25">发货时间：dfdsfsdfdfdfdfdfd</div>
              <div class="font-13 line-25 font-color-9">备注：dfdsfsdfdfdfdfdfd</div>
            </div>
            <div class="cell p-row-15">
              <div class="cell-main font-color-theme font-16">金额：￥7998.2</div>
              <div class="cell-main text-right">待支付</div>
            </div>
            <div class="p-column-10 p-l-15 border-bottom">
              <div class="flex-row">
                <div class="span1 line-30 font-13 font-color-9">预付首款日期：2017-02-15</div>
                <div class="w-140 line-30 font-13 font-color-9 right">付款金额：￥2222222</div>
              </div>
              <div class="flex-row">
                <div class="span1 line-30 font-13 font-color-9">预付尾款日期：2017-02-15</div>
                <div class="w-140 line-30 font-13 font-color-9 right">付款金额：￥2222222</div>
              </div>
            </div>
            <div class="p-column-10 p-l-15 border-bottom">
              <div class="flex-row">
                <div class="span1 line-30 font-13 font-color-9">已付首款日期：2017-02-15 12:12</div>
                <div class="w-140 right">
                  <div class="line-30 font-13 font-color-9">付款金额：￥2222222</div>
                  <div class="line-30 font-13 font-color-9">付款方式：支付宝</div>
                </div>
              </div>
              <div class="flex-row">
                <div class="span1 line-30 font-13 font-color-9">已付尾款日期：2017-02-15 12:12</div>
                <div class="w-140 right">
                  <div class="line-30 font-13 font-color-9">付款金额：￥2222222</div>
                  <div class="line-30 font-13 font-color-9">付款方式：支付宝</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="gap"></div>
      </div>
      <div class="p-row-15 p-column-10">
        <div class="font-13 line-25">订单号：ddddddd</div>
        <div class="font-13 line-25">下单时间：dfdsfsdfdfdfdfdfd</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'orderDetails',
    data () {
      return {
        payment: {name: 'fdfssd', account: '', type: 1},
        products: [
          {name: '四氯化铂'},
          {name: 'ddddd'}
        ],
      }
    },
    methods: {
      cancel(id){
        if (confirm('确定删除？')) {

        }
      }
    },
    created(){

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
