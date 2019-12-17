<template>
  <div @click="clickHandle" class="content">
    <div class="main">
        <div class="userinfo" @click="bindViewTap">
          <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />

          <div class="userinfo-nickname">
            <card :text="userInfo.nickName"></card>
            <card :text="userInfo.province"></card>
          </div>
        </div>
      <i-button v-if="!userInfo.nickName" open-type="getUserInfo" @getuserinfo="authSetUser" type="primary">
            授权登录
        </i-button>
        <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>
        <a href="/pages/testpage/main" class="counter">去往test页面</a>
    </div>


    <tab-Bar />
  </div>
</template>

<script>
import card from '@/components/card'
import tabBar from '@/components/tabBar'

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {

      }
    }
  },

  components: {
    card,
    tabBar
  },

  methods: {
    bindViewTap () {
      // const url = '../logs/main'
      // if (mpvuePlatform === 'wx') {
      //   mpvue.switchTab({ url })
      // } else {
      //   mpvue.navigateTo({ url })
      // }
    },
    clickHandle (ev) {
      // console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },
    authSetUser (e) {
      this.userInfo = e.mp.detail.userInfo
    },
    getUserInfo () {
      // 调用登录接口
      var _this = this
      wx.getUserInfo({// 当已授权getUserInfo时
        success (res) {
          console.log('1111')
          _this.userInfo = res.userInfo
        },
        fail (err) {
          console.log(err)
        }
      })
    }

  },

  created () {
    // let app = getApp()
  },
  mounted () {
    wx.login({
      success (res) {
        console.log('logined')
        if (res.code) {
          // 这里可以把code传给后台，后台用此获取openid及session_key
        }
      }
    })
  }
}
</script>

<style scoped>
@import '../../Style/layout.css';
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}

</style>
