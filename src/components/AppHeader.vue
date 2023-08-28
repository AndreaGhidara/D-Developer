<script>

import axios from 'axios';
import { store } from '../data/store';

export default {
    name: "AppHeader",
    components: {

    },
    data(){
        return {
            store
        }
    },
    methods:{
    },
    mounted(){
    }
}
</script>

<template>
    <div class="container-fluid bg-warning">
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    <h1 class="header">Header</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .header{
        background-color: green;
    }
</style>
