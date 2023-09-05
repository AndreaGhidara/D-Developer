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

 * {
  scrollbar-width: auto;
  scrollbar-color: ColorPrimary;
}

*::-webkit-scrollbar {
  width: 20px;
}

*::-webkit-scrollbar-track {
  background: #ffffff;
}

*::-webkit-scrollbar-thumb {
  background-color: #ef6f31;
  border-radius: 10px;
  border: 3px solid #ffffff;
}
</style>
