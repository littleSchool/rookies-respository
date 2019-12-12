import Vue from 'vue'
import Home from './Home.vue'


Vue.config.productionTip = false
Home.myType = 'home'


const home = new Vue(Home)
home.$mount()