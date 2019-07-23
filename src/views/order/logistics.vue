<template>
    <div class="orderLogistics w-all flex-column">
      <div class="gap"></div>
      <div class="p-l-50 p-r-15 p-column-10">
        <div class="line-30 font-16">运单编号：sdfdfdfdf</div>
        <div class="line-30 font-16">配送企业：顺丰</div>
      </div>
      <div class="gap"></div>
      <div class="span1 p-20 scroll-y">

          <div class="flex-column" v-for="(logistic,index) in logistics">
            <div class="flex-row">
              <div class="w-30">
                <img class="lightCircle" v-if="index == 0" src="../../assets/img/progress.png" alt="">
                <div class="circle" v-else></div>
              </div>
              <div :class="[index == 0 ? 'font-color-theme font-16' : 'font-color-9', 'span1','line-25']">{{logistic.a}}</div>
            </div>
            <div class="flex-row">
              <div :class="[index == 0 ? 'lightLine' : '', index == logistics.length-1 ? 'lastLine' : '', 'line']"></div>
              <div :class="[index == 0 ? 'font-color-theme font-16' : 'font-color-9', 'p-column-10']">{{logistic.b}}</div>
            </div>
          </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: 'orderLogistics',
        data () {
            return {
                logistics:[
                  {a:'奋斗的发地方大幅度分地方',b:'时的方法'},
                  {a:'奋斗的发地方大幅度分地方',b:'时的方法'},
                  {a:'奋斗的发地方大幅度分地方',b:'时的方法'},
                  {a:'奋斗的发地方大幅度分地方',b:'时的方法'},
                  {a:'奋斗的发地方大幅度分地方',b:'时的方法'},
                  {a:'奋斗的发地方大幅度分地方',b:'时的方法'},
                  {a:'奋斗的发地方大幅度分地方',b:'时的方法'},
                  {a:'奋斗的发地方大幅度分地方',b:'时的方法'},
                  {a:'奋斗的发地方大幅度分地方',b:'时的方法'},
                  {a:'奋斗的发地方大幅度分地方',b:'时的方法'}
                ]
            }
        },
        methods: {},
        created(){

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .circle {
    width: 10px;
    height: 10px;
    margin-top: 7px;
    margin-left:2px;
    background-color: #CBCBCB;
    border-radius: 50%;
  }
  .lightCircle{
    width:15px;
    margin-top:5px;
  }
  .line {
    width: 23px;
    height: 60px;
    margin-left: 7px;
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: #CBCBCB;
  }
  .lastLine{
    border-left-color:#fff;
  }
  .lightLine{
    border-left-color: #1171af;
  }
</style>
