import Vue from 'vue'
import router from '../router'

var baseUrl = ''
if (window.location.host.indexOf("localhost") >= 0) {
  baseUrl = 'http://192.168.31.201:4061/'
}
function fetch(opt, callback) {
  return new Promise(function (resolve, reject) {
    Vue.http({
      url: opt.url,
      method: opt.method,
      params: opt.params,
      headers: opt.headers
    }).then(function (res) {
      if (res.status == 200) {
        resolve(res.data);
        callback(res.data)
      } else {
        reject(res);
        alert('当前网络连接错误')
      }
    }, function (res) {
      reject(res);
      alert('当前网络连接错误')
    });
  })
}

function getRequest(opt, callback) {
  var opts = {
    url: baseUrl + opt.url,
    method: "GET",
    params: opt.params,
    headers:{}
  }
  if(!opt.noTicket){
    opts.headers.ticket = localStorage.getItem('ticket');
  }
  return fetch(opts, callback)
}

function postRequest(opt, callback) {

  var opts = {
    url: baseUrl + opt.url,
    method: "POST",
    params: opt.params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  if(!opt.noTicket){
    opts.headers.ticket = localStorage.getItem('ticket');
  }
  return fetch(opts, callback)
}

var user = {
  commonUrl:'api/member/',
  login:function (mobile, passWord) {
    var opt = {
      url:user.commonUrl + 'login',
      params:{
        mobile:mobile,
        passWord:passWord
      },
      noTicket:true
    }
    return postRequest(opt, function (res) {
      if (res.statusCode == 200) {
        localStorage.setItem('ticket', res.data.ticket)
        router.replace(sessionStorage.getItem('backUrl'))
      } else {
        alert(res.message)
      }
    })
  },
  register:function (params) {
    var opt = {
      url:user.commonUrl + 'register',
      params:{
        'entity.mobile': params.mobile,
        'entity.password': params.password,
        'captcheCode': params.captcheCode,
        'entity.companyName': params.companyName,
        'entity.realName': params.realName
      },
      noTicket:true
    }
    return postRequest(opt, function (res) {
      if (res.statusCode == 200) {
        localStorage.setItem('ticket', res.data.ticket)
        router.replace(sessionStorage.getItem('backUrl'))
      } else {
        alert(res.message)
      }
    })
  },
  reset:function (params) {
    var opt = {
      url:user.commonUrl + 'update/password',
      params:{
        'mobile': params.mobile,
        'passWord': params.password,
        'captcha': params.captcha
      },
      noTicket:true
    }
    return postRequest(opt, function (res) {
      if (res.statusCode == 200) {
        localStorage.setItem('ticket', res.data.ticket)
        router.push('/')
      } else {
        alert(res.message)
      }
    })
  },
  info:function (callback) {
    var opt = {
      url:user.commonUrl + 'details'
    }
    return getRequest(opt, callback)
  },
  areas:function (callback) {
    var opt = {
      url:user.commonUrl + 'query/address'
    }
    return getRequest(opt, callback)
  },
  areaSave:function (params, callback) {
    var opt = {
      url:user.commonUrl + 'saveOrUpdateAddress',
      params:{
        'entity.id': params.id,
        'entity.provinceName': params.provinceName,
        'entity.cityName': params.cityName,
        'entity.address': params.address,
        'entity.receiveName': params.receiveName,
        'entity.receiveMobile': params.receiveMobile,
        'entity.isDefault': params.isDefault
      }
    }
    return postRequest(opt, callback)
  },
  areaDel:function (id,callback) {
    var opt = {
      url:user.commonUrl + 'address/delete/' + id
    }
    return getRequest(opt, callback)
  }
}
var product = {
  commonUrl:'api/product/',
  metalTypes:function (callback) {
    var opt = {
      url:'dictionary/list',
      params:{
        typeName:'metal_rare_type'
      },
      noTicket:true
    }
    return getRequest(opt, callback)
  },
  productList:function (type, callback) {
    var opt = {
      url:product.commonUrl + 'list/' + type,
      noTicket:true
    }
    return getRequest(opt, callback)
  },
  cartSave:function (params, callback) {
    var opt = {
      url:product.commonUrl + 'saveOrUpdate',
      params:{
        'entity.id': params.id,
        'entity.productId': params.productId,
        'entity.specificationId': params.specificationId,
        'entity.quantity': params.quantity
      }
    }
    return postRequest(opt, callback)
  },
  cartDel:function (id, callback) {
    var opt = {
      url:product.commonUrl + 'delete/' + id
    }
    return postRequest(opt, callback)
  }
}
var order = {
  commonUrl:'api/order/',
  orderList:function (type, callback) {
    var opt = {
      url:order.commonUrl + 'query/status',
      params:{
        type:type
      }
    }
    return getRequest(opt, callback)
  },
  orderSave:function (params, callback) {
    var opt = {
      url:order.commonUrl + 'save',
      params:{
        'shoppingIds': params.shoppingIds,
        'receiveAddress': params.receiveAddress,
        'receiveMobile': params.receiveMobile,
        'receiveName': params.receiveName,
        'remark': params.remark,
        'billingId': params.billingId,
        'premiumRate': params.premiumRate,
        'premium': params.premium
      }
    }
    return postRequest(opt, callback)
  },
  orderDetails:function (orderNo, callback) {
    var opt = {
      url:order.commonUrl + 'details/' + orderNo,
    }
    return getRequest(opt, callback)
  },
  orderLogistics:function (orderNo, callback) {
    var opt = {
      url:order.commonUrl + 'logistics/query/' + orderNo,
    }
    return getRequest(opt, callback)
  },
  orderDel:function (orderNo, callback) {
    var opt = {
      url:order.commonUrl + 'delete/' + orderNo,
    }
    return getRequest(opt, callback)
  }
}



var mixins = {
  data: function () {
    return {
      text: '获取'
    }
  },
  components: {
    'number-input':require("../components/numberInput.vue")
  },
  methods: {
    sendCode(type, phone){
      //发送验证码
      if (!/^1[345678]\d{9}$/.test(phone)) {
        alert("请输入正确的手机号")
        return
      }
      var c = 59;
      this.text = "60s";
      var _this = this;
      var t = setInterval(function () {
        _this.text = c + "s";
        if (c == 0) {
          clearInterval(t);
          c = 60;
          _this.text = '获取';
        }
        c--;
      }, 1000);
      this.$http.post(this.baseUrl + 'captcha/sendSMS', {
        mobile: phone,
        type: +type
      }, {emulateJSON: true}).then(function (res) {
        if (res.status != 200) {
          clearInterval(t);
          c = 60;
          this.text = '获取';
          alert('当前网络连接错误')
        } else {
          if (res.data.statusCode != 200) {
            clearInterval(t);
            c = 60;
            this.text = '获取';
            alert(res.data.message)
          }
        }

      }, function (res) {
        console.log(res)
        alert('当前网络连接错误')
        clearInterval(t);
        c = 60;
        this.text = '获取';
      });
    },
    //用户
    login(mobile, passWord){
      if (!mobile) {
        alert("请输入手机号")
        return
      }
      if (!/^1[345678]\d{9}$/.test(mobile)) {
        alert("请输入正确的手机号")
        return
      }
      if (!passWord) {
        alert("请输入密码")
        return
      }
      return user.login(mobile, passWord);
    },
    register(params){
      if (!params.mobile) {
        alert("请输入手机号")
        return
      }
      if (!/^1[345678]\d{9}$/.test(params.mobile)) {
        alert("请输入正确的手机号")
        return
      }
      if (!params.password) {
        alert("请输入密码")
        return
      }
      if (params.password.length < 6) {
        alert("密码至少六位")
        return
      }
      if (!params.captcheCode) {
        alert("请输入验证码")
        return
      }
      if (!params.companyName) {
        alert("请输入企业名称")
        return
      }
      if (!params.realName) {
        alert("请输入联系人")
        return
      }
      return user.register(params);
    },
    reset(params){
      if (!params.mobile) {
        alert("请输入手机号")
        return
      }
      if (!/^1[345678]\d{9}$/.test(params.mobile)) {
        alert("请输入正确的手机号")
        return
      }
      if (!params.password) {
        alert("请输入密码")
        return
      }
      if (params.password.length < 6) {
        alert("密码至少六位")
        return
      }
      if (!params.captcha) {
        alert("请输入验证码")
        return
      }
      return user.reset(params);
    },
    //企业信息
    userInfo(callback){
      //获取企业资料
      return user.info(callback);
    },
    userAreas(callback){
      //获取企业所有地址
      return user.areas(callback);
    },
    areaSave(params, callback){
      //新增或修改企业地址
      return user.areaSave(params, callback);
    },
    areaDel(id, callback){
      //删除企业地址
      return user.areaDel(id, callback);
    },
    //产品
    metalTypes(callback){
      //获取所有金属类型
      return product.metalTypes(callback);
    },
    productList(type, callback){
      //获取产品
      return product.productList(type, callback);
    },
    cartSave(params, callback){
      //新增或修改购物车商品
      return product.cartSave(params, callback);
    },
    cartDel(id, callback){
      //删除购物车商品
      return product.cartDel(id, callback);
    },
    //订单
    orderListGet(type, callback){
      //获取订单列表
      return order.orderList(type, callback)
    },
    orderSave(params, callback){
      //新增订单
      return order.orderSave(params, callback);
    },
    orderDetails(orderNo, callback){
      //获取订单详情
      return order.orderDetails(orderNo, callback);
    },
    orderLogistics(orderNo, callback){
      //获取订单物流信息
      return order.orderLogistics(orderNo, callback);
    },
    orderDel(orderNo, callback){
      //删除订单
      return order.orderDel(orderNo, callback);
    }
  },
  created(){

  }
}

export default mixins;

