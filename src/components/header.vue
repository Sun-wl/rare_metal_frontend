<template>
  <div class="header-box" :style="styleNew">
    <div class="header">
      <div class="header-main">
        <text class="header-title" @click="_centerClick($event)">{{title}}</text>
      </div>
      <div class="header-left">
        <img @click="_leftClick($event)" v-if="leftItem.icon" :src="leftItem.icon" :name="leftItem.icon" style="width:45px; height:45px; color: #fff;">
        <span @click="_leftClick($event)" v-if="leftItem.text" class="header-text">{{leftItem.text}}</span>
        <slot name="left"></slot>
      </div>
      <div class="header-right">
        <icon @click="_rightClick($event)" v-if="rightItem.icon||rightItem.icons"
              :name="rightItem.icon||rightItem.icons" size="45px"
              color="#ffffff" class="pdl10"></icon>
        <text @click="_rightClick($event)" v-if="rightItem.text" class="header-text">{{rightItem.text}}
        </text>
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  var defaultItem = {
    icon: '',
    text: ''
  };
  module.exports = {
    props: {
      styleEx: {},
      title: {
        type: String,
        default: ''
      },
      leftItem: {
        type: Object,
        default: function () {
          return defaultItem
        }
      },
      rightItem: {
        type: Object,
        default: function () {
          return defaultItem
        }
      }
    },
    data: function () {
      return {
        height: '60px',
        style: {'background-color': '#f2aa24'},
        styleNew: {}
      }
    },
    methods: {
      _leftClick: function ($event) {
        this.$emit('leftClick', $event);
      },
      _rightClick: function ($event) {
        this.$emit('rightClick', $event);
      },
      _centerClick: function ($event) {
        this.$emit('centerClick', $event);
      }
    },
    created: function () {
      this.styleNew = Object.assign({}, this.style, this.styleEx, {'height': this.height});
    }
  }
</script>
