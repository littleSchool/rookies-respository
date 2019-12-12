<template>
  <div class="home">
    <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000">
    <block v-for="(item, index) in items" :index="index" :key="key">
        <swiper-item>
            <image :src="item.url" class="slide-image" mode="aspectFill"/>
        </swiper-item>
    </block>
</swiper>
<div class="feature">
    <div class="feature-item" v-for="(item,index) in features" @click="featureClick(index)">
    <img src="/static/images/timg.jpeg" alt="">
    <span>{{item.title}}</span>
  </div>
  </div>

<div class="tab-control">
    <!-- if you click the first tab ,index =0, -->
    <div v-for="(item,index) in title" @click="tabClick(index)" class="tab-control-item" :class="{active:index === currentIndex}">
      <span>{{item}}</span> 
    </div>
  </div>   
  </div>
</template>

<script>
export default {
  name:"Home",
  data(){
    return{
      features:[{
        title:'皮卡丘'
      },
      { 
        title:'皮卡丘'
      },
      {
        title:'皮卡丘'
      },
      {
        title:'皮卡丘'
      }],
      currentIndex:0,
      items:[
      {id:1,url:"/static/images/home.png" },
      {id:2,url:"/static/images/home_1.png"},
      {id:3,url:"/static/images/home_3.png"}],
    title:['經典','爆款','流行'],
    }
  },
  methods: {
     featureClick(index){
      //跳轉到對應到頁面
      let url ='/pages/detail/main'
      console.log(index);
      // wx.switchTab({url})
      wx.navigateTo({url})
    }
  },
    tabClick(index){
      this.currentIndex = index
    }


}
</script>

<style scoped>
.home{
  margin-top:2rpx;
  width: 100%;
  position: relative;
}
.slide-image{
  width: 100%;
  height: 100%;
}
.feature{
  height: 100%;
  width:100%;
  display: flex;
  flex-direction:row;
  padding: 6rpx;
  text-align: center
  
}
.feature-item{
  flex:1;
  flex-direction:column;
}
.feature img{
  width: 170rpx;
  height: 170rpx;
  border-radius: 100%;
  position: relative;
}
.feature span{
  font-size:30rpx;
  justify-content: center;
 
}



.tab-control{
  display: flex;
  text-align: center;
  font-size: 35rpx;
  background-color: #ffffff;
  
  top:15rpx;
  margin-top: 1rpx;
}
.tab-control-item{
  flex:1;
  line-height: 88rpx;
  height: 88rpx;
}
.active{
  color:red;
    
}
.active span{
border-bottom: 4rpx solid red
}



</style>