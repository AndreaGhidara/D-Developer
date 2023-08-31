<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

import {store} from './data/store'

export default {
  components: {
    AppHeader,
    AppFooter,
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

  <AppFooter />

</template>

<style lang="scss" >
 @use'./style/variable.scss' as*;
</style>
