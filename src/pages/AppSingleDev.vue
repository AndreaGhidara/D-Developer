<script>
import { store } from '../data/store'
import axios from 'axios';

export default {
    name:"AppSingleDev",
    components: {
        
    },
    data() {
        return {
            store,
        }
    },
    methods: {
    
    },
    mounted() {
        store.getDev(this.$route.params.id);
    },
}
</script>

<template>
    
</template>

<style lang="scss" scoped>

</style>