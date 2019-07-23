<template>
  <div class="personalAreaSetting w-all bg-e">
    <div class="gap"></div>
    <div class="list">
      <div class="cell">
        <div class="cell-large-left">
          <img class="img-20" src="../../assets/img/personalImg5.png" alt="">
        </div>
        <div class="cell-title">联系人</div>
        <div class="cell-main p-r-20">
          <input class="cell-input" type="text" v-model="params.receiveName">
        </div>
      </div>
      <div class="cell">
        <div class="cell-large-left">
          <img class="img-20" src="../../assets/img/personalImg6.png" alt="">
        </div>
        <div class="cell-title">手机号码</div>
        <div class="cell-main p-r-20">
          <input class="cell-input" type="tel" v-model="params.receiveMobile">
        </div>
      </div>
      <div class="cell">
        <div class="p-row-20 p-t-2">
          <img class="img-20" src="../../assets/img/personalImg2.png" alt="">
        </div>
        <div class="cell-title">所在地区</div>
        <div class="cell-main">{{selected[0]}}{{selected[1]}}{{selected[2]}}</div>
        <div class="p-row-10 p-t-3">
          <img class="img-18" src="../../assets/img/pulldown.png" alt="" @click="openAreaSelect">
        </div>
      </div>
      <div class="cell">
        <div class="w-60"></div>
        <div class="span1 p-r-20">
          <textarea class="cell-textarea" placeholder="输入详细地址" v-model="addrDetail"></textarea>
        </div>
      </div>
    </div>
    <div class="p-row-50 p-t-60">
      <button @click="submit">确认</button>
    </div>

    <div class="fix-lb w-all bg-f" v-show="areaShow">
      <div class="flex-row p-row-20 p-column-10 border-bottom">
        <div class="span1 text-left font-16 font-color-9" @click="cancel">取消</div>
        <div class="span1 text-right font-16 font-color-theme" @click="sure">确定</div>
      </div>
      <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
    </div>
  </div>
</template>

<script>
  import AMap from 'AMap'
  export default {
    name: 'personalAreaSetting',
    data () {
      return {
        addrDetail: '',
        areaShow: false,
        provinces: [],
        citys: [],
        districts: [],
        index1: 0,
        index2: 0,
        index3: 0,
        picker: '',
        selected: [],          //当前确定选中
        slots: [
          {
            flex: 1,
            values: [],
            className: 'slot1',
            textAlign: 'center',
            defaultIndex: 0
          }, {
            flex: 1,
            values: [],
            className: 'slot2',
            textAlign: 'center',
            defaultIndex: 0
          }, {
            flex: 1,
            values: [],
            className: 'slot3',
            textAlign: 'center',
            defaultIndex: 0
          }
        ],
        params: {
          id: '',
          provinceName: '',
          cityName: '',
          address: '',
          receiveName: '',
          receiveMobile: '',
          isDefault: false
        }

      }
    },
    methods: {
      provincesInit(){
        var _this = this;
        AMap.service('AMap.DistrictSearch', function () {//回调函数
          //实例化DistrictSearch
          var districtSearch = new AMap.DistrictSearch({
            level: 'country',
            subdistrict: 3
          });
          districtSearch.search('中国', function (status, result) {
            _this.provinces = result.districtList[0].districtList;
            _this.provinces.forEach(function (item) {
              _this.slots[0].values.push(item.name);
            })
            _this.setCitys(0);
            _this.setDistricts(0);
          })
        })
      },
      setCitys(index){
        this.citys = this.provinces[index].districtList;
        var _this = this;
        _this.slots[1].values = [];
        this.citys.forEach(function (item) {
          _this.slots[1].values.push(item.name);
        })
      },
      setDistricts(index){
        this.districts = this.citys[index].districtList;
        var _this = this;
        _this.slots[2].values = [];
        this.districts.forEach(function (item) {
          _this.slots[2].values.push(item.name);
        })
      },
      onValuesChange(picker, values){
        this.index1 = this.slots[0].values.indexOf(values[0]);
        if (this.provinces[this.index1]) {
          this.setCitys(this.index1);
        }
        this.index2 = this.slots[1].values.indexOf(values[1]);
        if (this.citys[this.index2]) {
          this.setDistricts(this.index2);
        }
        this.index3 = this.slots[2].values.indexOf(values[2]);
      },
      openAreaSelect(){
        this.areaShow = true;
      },
      cancel(){
        this.areaShow = false;
      },
      sure(){
        this.areaShow = false;
        this.selected = [this.slots[0].values[this.index1], this.slots[1].values[this.index2], this.slots[2].values[this.index3]];
      },
      submit(){
        if (!this.params.receiveName) {
          alert("请输入联系人")
          return
        }
        if (!this.params.receiveMobile) {
          alert("请输入手机号码")
          return
        }
        if (!/^1[345678]\d{9}$/.test(this.params.receiveMobile)) {
          alert("请输入正确的手机号")
          return
        }
        if (!this.selected[0] || !this.selected[1] || !this.selected[2]) {
          alert("请选择所在地区")
          return
        }
        if (!this.addrDetail) {
          alert("请输入详细地址")
          return
        }
        this.params.provinceName = this.selected[0];
        this.params.cityName = this.selected[1];
        this.params.address = this.selected[2] + '-' + this.addrDetail;
        var _this = this;
        this.areaSave(this.params, function (res) {
          if (res.statusCode == 200) {
            _this.$router.replace('/personal/area/不选择')
          } else if(res.statusCode == 401){
            sessionStorage.setItem('backUrl', _this.$route.path)
            alert(res.message)
            _this.$router.push('/')
          } else {
            alert(res.message)
          }
        })

      }
    },
    created(){
      if (this.$route.params.area != '新增') {
        var area = JSON.parse(this.$route.params.area)
        this.params.id = area.id;
        this.params.receiveName = area.receiveName;
        this.params.receiveMobile = area.receiveMobile;
        this.selected = [area.provinceName, area.cityName, area.address.split('-')[0]];
        this.addrDetail = area.address.split('-')[1];
        this.params.isDefault = area.isDefault;
      }
      this.provincesInit();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
