<template>
  <div class="card"
    <p class="card">
      {{text}}
    </p>
    <swiper :optops="swiperOption" class="swiper-menu">
      <swiper-slide><img src="~assets/img/home.png" alt=""/></swiper-slide>
      <swiper-slide><img src="~assets/img/home_1.png" alt=""/></swiper-slide>
      <swiper-slide><img src="~assets/img/home_3.png" alt=""/></swiper-slide>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
