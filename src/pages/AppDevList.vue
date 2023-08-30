<script>
import { store } from '../data/store'

export default {
    name:"AppDevList",
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
        store.getDev();
    },
}
</script>

<template>
   
    <div class="container">
        <div class="row">
            <div class="col-12">

                <h1>Elenco Dev</h1>
                
                <div class="col-10 mx-auto">
                    
                    <!--si vede per mezzo secondo durante il collegamento dei dati -->
                    <h3 v-if="store.Loading">Caricamento in corso dei dati</h3>

                    <!-- nel caso ci siano errori -->  
                    <h3 v-if="store.LoadingError" class="text-danger"> {{ store.LoadingError }} </h3>

                </div>

            </div>

        </div>
        <div class="row justify-content-around flex-wrap">

            <template v-for="item in store.ListDev">

                <template v-if="item.name.toLowerCase().includes(store.FilterText)">

                    <div class="col-5 card">

                        <div class="card-header">
                           
                            <h4>
                            {{ item.name }},{{ item.surname }}
                            </h4>

                        </div>
                        <div class="card-body">
                            <div class="col-3 mx-auto">

                                <template v-if="item.img_path == '' || item.img_path == null">

                                    <img src="https://picsum.photos/300/300?random" alt="">

                                </template>

                                <template v-else>

                                    <img :src="item.img_path" alt="">

                                </template>

                            </div>

                        </div>
                        
                        
                       
                    </div>
                    

                </template>

            </template>

        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
