<template>
  <div class="productSelect flex-column span1 bg-e">
    <div class="span1 scroll-y p-t-20">
      <div v-for="(product,index) in products">
        <div class="bg-f">
          <div class="p-column-5">
            <div class="flex-row p-row-15">
              <div class="span1 line-30 font-15">{{product.name}}({{product.name}})</div>
            </div>
            <div class="flex-row p-row-15">
              <div class="span1 line-30 font-color-9">交货期：2017-09-20</div>
              <div class="span1 line-30 font-color-9">含税单价(17%)：<span class="font-color-theme">100克</span></div>
            </div>
          </div>
          <div class="border-top p-column-5">
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
            <div class="flex-row p-l-15">
              <div class="span1 line-30 font-color-9">包装规格：1000克/瓶</div>
              <div class="line-30 font-color-9 w-100">数量：10000</div>
              <div class="line-30 font-color-9 w-100">价格：￥8000</div>
            </div>
          </div>
          <div class="border-top flex-row right p-column-5">
            <div class="btn btn-red border-c m-r-10 font-color-9" @click="del()">删除</div>
            <div class="btn border-theme font-color-theme m-r-10" @click="edit(index)">修改</div>
          </div>
        </div>
        <div class="gap"></div>
      </div>
    </div>
    <div class="btns flex-row">
      <div class="span1 line-50 p-l-20 font-16">应付金额：<span class="font-color-theme line-50 font-16">￥7000</span></div>
      <div class="line-50 bg-theme text-center font-17 p-row-30 font-color-f">确认订单</div>
    </div>

    <div class="addCart" v-show="cartShow">
      <div class="addCartInfo">
        <div class="flex-row p-row-15 p-column-10 border-bottom">
          <div class="text-left font-17 font-color-9" @click="cancel">取消</div>
          <div class="span1 flex-row right">
            <span class="font-12 font-color-9 p-t-5 p-r-20">点击确定查看产品价格</span>
            <span class="font-17 font-color-theme" @click="sure">确定</span>
          </div>
        </div>
        <div class="p-column-10">
          <div class="p-row-15 p-b-10">
            <div class="font-16 line-35">点点滴滴(ddddddd)</div>
          </div>
          <div class="p-row-15 p-b-10 flex-row">
            <div class="font-color-9 line-25 p-column-5 w-80">交货期</div>
            <div class="span1 flex-row scroll-x p-column-5">
              <div v-for="(date,index) in dates"
                   :class="[dateIndex == index ? 'border-theme bg-theme font-color-f' : 'border','btn font-color-9 p-row-5 m-r-20 font-12 nowrap']"
                   @click="dateSelect(index)">{{date}}
              </div>
            </div>
          </div>
          <div class="p-row-15 p-t-10 flex-row border-top">
            <div class="font-color-9 line-25 p-column-5 w-80">包装规格</div>
            <div class="span1 flex-column p-column-5">
              <div class="flex-row m-b-10" v-for="(format,index) in formats">
                <div
                  :class="[formatIndex.indexOf(index) >= 0 ? 'border-theme bg-theme font-color-f' : 'border','btn font-color-9 p-row-10 font-12 nowrap']"
                  @click="formatSelect(index)">{{format}}
                </div>
                <div class="p-row-10 flex-column center font-color-9">*</div>
                <number-input v-model.number="num[index].value" @reduce="reduce(index)" @add="add(index)"></number-input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'productSelect',
    data () {
      return {
        products: [
          {name: '的顺丰到付'},
          {name: 'ddddd'},
          {name: 'ddddd'},
          {name: 'ddddd'},
          {name: 'ddddd'},
          {name: 'ddddd'}
        ],
        cartShow: false,
        dateIndex: '无',
        dates: ['2017-09-20', '2017-09-20', '2017-09-20', '2017-09-20', '2017-09-20'],
        formatIndex: [],
        formats: ['100克/瓶', '500克/瓶', '1000克/瓶'],
        num: []
      }
    },
    methods: {
      del(){
        if (confirm('确认删除？')) {

        }
      },
      edit(){
        this.cartShow = true;
      },
      dateSelect(index){
        this.dateIndex = index;
      },
      formatSelect(index){
        if (this.formatIndex.indexOf(index) >= 0) {
          this.formatIndex.splice(this.formatIndex.indexOf(index), 1);
        } else {
          this.formatIndex.push(index);
        }
      },
      reduce(index){
        if (this.num[index].value > 0) {
          this.num[index].value--;
        }
      },
      add(index){
        this.num[index].value++;
      },
      cancel(){
        this.cartShow = false;
        this.dateIndex = '无';
        this.formatIndex = [];
        this.num.forEach(function (item) {
          item.value = 0;
        })
      },
      sure(){

      },
    },
    created(){
      for (var i = 0; i < this.formats.length; i ++) {
        var item = {value: 0};
        this.num.push(item);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .addCart {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
  }

  .addCartInfo {
    width: 100%;
    background: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .num {
    width: 40px;
    height: 100%;
  }

  .btns {
    width: 100%;
    height: 50px;
    border-top: 1px solid #ccc;
    box-shadow: 0 -1px 2px #ccc;
    background: #fff;
  }
</style>
