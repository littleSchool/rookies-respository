<template>
  <div @click="clickHandle" class="content">
    <div class="main">
        test
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
    }
  },

  components: {
    card,
    tabBar
  },

  methods: {

  },

  created () {

  },
  mounted () {

  }
}
</script>

<style scoped>
@import '../../Style/layout.css';
</style>
