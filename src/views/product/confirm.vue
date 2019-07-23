<template>
    <div class="productConfirm w-all flex-column span1 bg-e">
        <div class="span1 scroll-y">
            <div class="gap"></div>
            <router-link :to=" '/product/payment'">
                <div class="cell p-row-15 bg-f">
                    <div class="cell-main font-15">付款方式</div>
                    <div class="flex-column center">
                        <img class="img-15" src="../../assets/img/to.png" alt="">
                    </div>
                </div>
            </router-link>
            <div class="list" v-if="payment && payment.type == 1">
                <div class="cell p-row-15">
                    <div class="cell-main">收款姓名：{{payment.name}}</div>
                    <div class="cell-main text-right">银行：中国农业银行</div>
                </div>
                <div class="cell p-row-15">
                    <div class="cell-main">支行：发发发</div>
                </div>
                <div class="cell p-row-15">
                    <div class="cell-main">收款账号：发发发</div>
                </div>
            </div>
            <div class="list" v-if="payment && payment.type == 2">
                <div class="cell p-row-15">
                    <div class="cell-main">收款姓名：{{payment.name}}</div>
                </div>
                <div class="cell p-row-15">
                    <div class="cell-main">支付宝：发发发</div>
                </div>
            </div>
            <div class="gap"></div>
            <div v-for="(product,index) in products">
                <div class="bg-f">
                    <div class="p-column-5 p-row-15 border-bottom">
                        <div class="span1 line-30 font-16 font-color-purple">产品{{index + 1}}</div>
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
                        <div class="p-column-15 flex-row bg-f" v-if="area[index]">
                            <div class="p-row-15">
                                <img class="img-18" src="../../assets/img/personalImg2.png" alt="">
                            </div>
                            <div class="span1">
                                <div class="flex-row">
                                    <div class="span1">{{area[index].receiveName}}</div>
                                    <div class="span1 text-right">{{area[index].receiveMobile}}</div>
                                </div>
                                <div class="p-t-10">
                                    地址：{{area[index].provinceName}}{{area[index].cityName}}{{area[index].address}}
                                </div>
                            </div>
                            <div class="p-row-15 flex-column center">
                                <img class="img-15" src="../../assets/img/to.png" alt="">
                            </div>
                        </div>
                        <div class="cell p-row-15 bg-f" v-else>
                            <div class="cell-main font-15">请选择地址</div>
                            <div class="flex-column center">
                                <img class="img-15" src="../../assets/img/to.png" alt="">
                            </div>
                        </div>
                    </router-link>
                    <div class="gap-s"></div>
                    <div class="list">
                        <div class="cell p-row-15">
                            <div class="cell-main font-15">保险费（0.15%）：￥25</div>
                            <div class="flex-column center">
                                <img class="img-15" src="../../assets/img/personalImg9.png" alt="">
                                <!--<img class="img-15" src="../../assets/img/personalImg10.png" alt="">-->
                            </div>
                        </div>
                        <div class="cell p-row-15">
                            <div class="cell-title font-15">备注</div>
                            <div class="cell-main">
                                <input type="text" class="cell-input" placeholder="(选填)">
                            </div>
                        </div>
                        <div class="cell p-row-15">
                            <div class="cell-title font-15">配送方式</div>
                            <div class="cell-main">
                                <select type="text" class="cell-select font-13">
                                    <option value="">顺丰</option>
                                </select>
                            </div>
                        </div>
                        <div class="cell p-row-15">
                            <div class="cell-title font-15">开票名称</div>
                            <div class="cell-main">
                                <select type="text" class="cell-select font-13">
                                    <option value="">ddddddddd</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gap"></div>
            </div>

        </div>
        <div class="btns flex-row">
            <div class="span1 line-50 p-l-20 font-16">应付金额：<span class="font-color-theme line-50 font-16">￥7000</span>
            </div>
            <div class="line-50 bg-theme text-center font-17 p-row-30 font-color-f">提交订单</div>
        </div>
    </div>
</template>

<script>


    export default {
        name: 'productConfirm',
        data() {
            return {
                products: [
                    {name: '四氯化铂'},
                    {name: 'ddddd'}
                ],
            }
        },
        computed: {
            payment() {
                return this.$store.state.payment ? this.$store.state.payment : ''
            },
            area() {
                return this.$store.state.area ? this.$store.state.area : []
            }
        },
        methods: {},
        created() {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .btns {
        width: 100%;
        height: 50px;
        background: #fff;
        border-top: 1px solid #ccc;
        box-shadow: 0 -1px 2px #ccc;
    }
</style>
