<script>
import AppHeader from './components/AppHeader.vue';

import {store} from './data/store'

export default {
  components: {
    AppHeader,
},
  data() {
    return {
      store,
      loading: false,
    }
  },
  methods: {
    
  },
  mounted() {
    
  },
}
</script>

<template>
  <!-- Component -->
  <AppHeader />
  <!-- Router -->
  <router-view>
    
  </router-view>
</template>

<style lang="scss" scoped>
  h1{
    background-color: red;
  }
</style>
