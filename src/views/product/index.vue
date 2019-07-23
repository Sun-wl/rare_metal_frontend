<template>
  <div class="product w-all span1 flex-column">
    <div class="span1 scroll-y">
      <div class="p-row-10 flex-row">
        <div class="span1 scroll-x">
          <table class="products">
            <thead>
            <tr class="title">
              <th>产品名称</th>
              <th>价格(元/克)</th>
              <th>起订量(克)</th>
              <th>交货期</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="product in products">
              <td>的的顶顶顶顶顶</td>
              <td>￥200</td>
              <td>10020kg</td>
              <td>2017-09-20</td>
            </tr>
            </tbody>

          </table>
        </div>
        <div>
          <table class="buyTable">
            <thead>
            <tr class="title">
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="product in products">
              <td>
                <div class="p-row-10 line-20 radius-5 border-c buyBtn">购买</div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="p-column-20 p-row-50 bg-f">
      <router-link to="/product/select">
        <button>去确认已选择的产品</button>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'product',
    data () {
      return {
        products: [
          {name: '的顺丰到付'},
          {name: 'ddddd'},
          {name: 'ddddd'},
          {name: 'ddddd'},
          {name: 'ddddd'},
          {name: 'ddddd'},
          {name: 'ddddd'},
          {name: 'ddddd'},
          {name: 'ddddd'},
          {name: 'ddddd'},
          {name: 'ddddd'},
          {name: 'ddddd'},
          {name: 'ddddd'},
          {name: 'ddddd'},
          {name: 'ddddd'},
          {name: 'ddddd'},
          {name: 'ddddd'},
          {name: 'ddddd'},
          {name: 'ddddd'},
          {name: 'ddddd'},
          {name: 'ddddd'},
          {name: 'ddddd'},
          {name: 'ddddd'}
        ]
      }
    },
    methods: {
      buy(){

      }
    },
    created(){
      this.type = this.$route.params.type;
      var _this = this;
      /*this.productList(this.type, function (res) {
       if (res.statusCode == 200) {
       _this.products = res.data;
       } else {
       alert(res.message)
       }
       })*/
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  table {
    text-align: center;
    border-collapse:collapse;
  }

  table th{
    border-bottom:1px solid #eee;
  }
  table th, table td{
    height: 40px;
    word-break: keep-all;
    white-space: nowrap;
  }
  table.products{
    width:100%;
  }
  table.products th, table.products td {
    padding: 0 10px;
    line-height: 40px;
  }
  table.products td{
    color: #999;
  }

  table.buyTable td {
    padding-left: 10px;
  }

  .buyBtn:active{
    background: #1171af;
    color: #fff;
    border:1px solid #1171af;
  }

</style>
