<script>
import { store } from '../data/store'

import LittleCard from '../customComponentt/LittleCard.vue';

export default {
    name: "AppDevList",
    components: {
        LittleCard,
    },
    data() {
        return {
            store,
         
        }
    },
    methods: {

    },
    mounted() {
        store.getDevs();
    },
}
</script>

<template >
    <div>

        <div class="container-fluid py-5">

            <div class="row">

                <div class="col-10 mx-auto text-center">

                    <h1 >Elenco Dev</h1>

                    <div class="col-10 mx-auto">

                        <!--si vede per mezzo secondo durante il collegamento dei dati -->
                        <h3 v-if="store.Loading">Caricamento in corso dei dati</h3>

                        <!-- nel caso ci siano errori -->
                        <h3 v-if="store.LoadingError" class="text-danger"> {{ store.LoadingError }} </h3>

                    </div>

                </div>
            </div>
            <div class="container">
                <div class="row justify-content-center">
                <template v-for="dev in store.devFiltred" :key="dev">
                    <div class="col-lg-3 col-sm-6 col-12 p-3">
                        <LittleCard :user="dev" class="m-auto"/>
                    </div>
                </template>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use'../style/variable.scss' as*;



</style>
