<template>
  <div class="area w-all bg-e">
    <div class="gap"></div>
    <div class="list">
      <div class="cell" @click="edit('新增')">
        <div class="cell-large-left">
          <img class="img-18" src="../../assets/img/personalImg8.png" alt="">
        </div>
        <div class="cell-main font-15">新增地址</div>
      </div>
    </div>
    <div class="gap"></div>
    <div class="list" v-for="(area,index) in areas">
      <div class="border-bottom p-column-5" @click="selectArea(area)">
        <div class="flex-row p-row-20 w-all">
          <div class="span1 line-30 text-left font-15">{{area.receiveName}}</div>
          <div class="span1 line-30 text-right font-15">{{area.receiveMobile}}</div>
        </div>
        <div class="p-row-20 line-30 w-all font-15">
          地址：{{area.provinceName}}{{area.cityName}}{{area.address}}
        </div>
      </div>
      <div class="cell">
        <div class="cell-large-left">
          <img class="img-18" src="../../assets/img/personalImg9.png" alt="" v-if="defaultValue == index"
               @click="defaultAreaChange(area.id,2)">
          <img class="img-18" src="../../assets/img/personalImg10.png" alt="" v-if="defaultValue != index"
               @click="defaultAreaChange(area.id,1)">
        </div>
        <div class="cell-main font-13">设为默认</div>
        <div class="cell-large-right">
          <div class="flex-row right">
            <div class="flex-row center m-r-20" @click="edit(area)">
              <img class="img-18 m-r-5" src="../../assets/img/personalImg11.png" alt="">
              <div class="cell-main font-13">编辑</div>
            </div>
            <div class="flex-row center" @click="del(area.id)">
              <img class="img-18 m-r-5" src="../../assets/img/personalImg12.png" alt="">
              <div class="cell-main font-13">删除</div>
            </div>
          </div>
        </div>
      </div>
      <div class="gap"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'area',
    data () {
      return {
        defaultValue: '没有默认地址',
        areas: [
          {receiveName: 'wl', receiveMobile: '18888888888', provinceName: '山西', cityName: '太原', address: '小店'},
          {receiveName: 'wl', receiveMobile: '18888888888', provinceName: '山西', cityName: '太原', address: 'jiancaop'},
          {receiveName: 'wl', receiveMobile: '18888888888', provinceName: '山西', cityName: '太原', address: '尖草坪'},
        ],
        params: {
          id: '',
          isDefault: false
        }
      }
    },
    methods: {
      getData(){
        var _this = this;
        this.userAreas(function (res) {
          if (res.statusCode == 200) {
            _this.areas = res.data
            _this.defaultValue = '没有默认地址';
            _this.areas.forEach(function (item, index) {
              if (item.isDefault) {
                _this.defaultValue = index;
              }
            })
          } else if (res.statusCode == 401) {
            sessionStorage.setItem('backUrl', _this.$route.path)
            alert(res.message)
            _this.$router.push('/')
          } else {
            alert(res.message)
          }
        })
      },
      defaultAreaChange(id, type){
        var _this = this;
        this.params.id = id;
        if (type == 1) {
          this.params.isDefault = true;
        } else {
          this.params.isDefault = false;
        }
        this.areaSave(this.params, function (res) {
          if (res.statusCode == 200) {
            _this.getData();
          } else if (res.statusCode == 401) {
            sessionStorage.setItem('backUrl', _this.$route.path)
            alert(res.message)
            _this.$router.push('/')
          } else {
            alert(res.message)
          }
        })
      },
      edit(area){
        if (area == '新增') {
          this.$router.replace('/personal/area/setting/新增')
        } else {
          this.$router.replace('/personal/area/setting/' + JSON.stringify(area))
        }
      },
      del(id){
        if (confirm('确认删除？')) {
          var _this = this;
          this.areaDel(id, function (res) {
            if (res.statusCode == 200) {
              _this.getData();
            } else if (res.statusCode == 401) {
              sessionStorage.setItem('backUrl', _this.$route.path)
              alert(res.message)
              _this.$router.push('/')
            } else {
              alert(res.message)
            }
          })
        }
      },
      selectArea(area){
        if (this.$route.params.index != '不选择') {
          this.$store.commit('areaSave', {
            areaSelected: area,
            index: this.$route.params.index
          })
          this.$router.back();
        }
      }
    },
    created(){
//      this.getData();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
