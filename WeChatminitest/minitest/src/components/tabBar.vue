<template>
  <div class="footer">
    <div v-for="(item,index) in tabMenu" :key="item.code" :class="{active:index === currentIndex}" @click="handleClick(index)">
      {{item}}
    </div>
  </div>
</template>
<script>
import store from '../vuex/store'
export default {
  data () {
    return {
      tabMenu: ['首页', '到店', '我的'],
      isChecked: false
    }
  },
  computed: {
    currentIndex () {
      return store.state.currentIndex
    }
  },
  methods: {
    handleClick (index) {
      store.commit('eqindex', index)
    },
    tabHome () {
      const url = '/pages/home/main'
      wx.switchTab({url})
      console.log(url)
    },
    tabArr () {
      const url = '/pages/arrival/main'
      wx.switchTab({url})
      // wx.reLaunch({
      //   url
      // })
    },
    tabMine () {
      const url = '/pages/mine/main'
      wx.switchTab({url})
    }
  },
  watch: {
    currentIndex () {
      if (this.currentIndex === 0) {
        this.tabHome()
      } else if (this.currentIndex === 1) {
        this.tabArr()
      } else if (this.currentIndex === 2) {
        this.tabMine()
      }
    }
  }

}
</script>

<style scoped>
@import '../Style/layout.css';
  .footer{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-evenly;
    height: 100rpx;
  }
  .footer>div{
    flex: 1;
    height: 100rpx;
    background: rgb(124, 123, 123);
    border-left: solid 1rpx #000;
    box-sizing: content-box;
    text-align: center;
    line-height: 100rpx;
  }
  .active{
    color: orange;
  }
</style>