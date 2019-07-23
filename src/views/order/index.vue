<template>
  <div class="order flex-column span1 bg-e">
    <div class="flex-row bg-f">
      <div class="span1 p-row-20" @click="listView(0)">
        <div class="line-40 font-15 text-center">进行中</div>
        <div class="font-0" v-if="index == 0">
          <img class="border-b" src="../../assets/img/border.png" alt="">
        </div>
      </div>
      <div class="span1 p-row-20" @click="listView(1)">
        <div class="line-40 font-15 text-center">已完成</div>
        <div class="font-0" v-if="index == 1">
          <img class="border-b" src="../../assets/img/border.png" alt="">
        </div>
      </div>
      <div class="span1 p-row-20" @click="listView(2)">
        <div class="line-40 font-15 text-center">已取消</div>
        <div class="font-0" v-if="index == 2">
          <img class="border-b" src="../../assets/img/border.png" alt="">
        </div>
      </div>
    </div>

    <div class="span1 p-row-10 p-column-20 scroll-y">
      <div class="" v-for="order in orderList">
        <div class="radius-5 bg-f">
          <div class="p-column-5">
            <router-link :to=" '/order/details/'+ order.id">
              <div class="flex-row p-row-10">
                <div class="span3 line-30">订单号：{{order.orderNo}}</div>
                <div class="span2 line-30 font-color-theme">订单状态：{{order.statusText}}</div>
              </div>
              <div class="flex-row p-row-10">
                <div class="span3 line-30">下单时间：{{order.createTime}}</div>
                <div class="span2 line-30">产品数量：{{order.total}}</div>
              </div>
              <div class="p-row-10 line-30">产品名称：{{order.total}}</div>
            </router-link>
          </div>
          <div class="border-top flex-row p-column-5 right">
            <div class="btn btn-red border-c m-r-10 font-13" v-if="order.status == 1" @click="cancel(order.orderNo)">取消订单</div>
            <router-link to="/product/confirm">
              <div class="btn border-theme font-color-theme m-r-10 font-13" v-if="order.status == 1">再次购买</div>
            </router-link>
          </div>
        </div>
        <div class="gap"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'order',
    data () {
      return {
        index: '0',
        orderList: [
          {orderNo: 'fdfdfdfsdfsdfsdfsfsdf', statusText: '已发货', createTime: '2017-09-20', total: 200, status: 1,id:1},
          {orderNo: 'fdfdfdfsdfsdfsdfsfsdf', statusText: '已发货', createTime: '2017-09-20', total: 200, status: 1,id:1},
          {orderNo: 'fdfdfdfsdfsdfsdfsfsdf', statusText: '已发货', createTime: '2017-09-20', total: 200, status: 1,id:1}
        ]
      }
    },
    computed: {
      type () {
        switch (this.index) {
          case '0':
            return 3;
            break;
          case '1':
            return 1;
            break;
          case '2':
            return 2;
            break;
        }
      }
    },
    methods: {
      listView(index){
        this.index = String(index);
        this.getOrderList(this.type);
      },
      getOrderList(type){
        var _this = this;
        this.orderListGet(type, function (res) {
          if (res.statusCode == 200) {
            _this.orderList = res.data;
          } else {
            alert(res.message)
          }
        })
      },
      cancel(orderNo){
        if (confirm('确定取消此订单？')) {

        }
      }
    },
    created(){
      this.index = this.$route.params.index;
//      this.getOrderList(this.type);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .border-b {
    height: 2px;
    width: 100%;
  }
</style>
