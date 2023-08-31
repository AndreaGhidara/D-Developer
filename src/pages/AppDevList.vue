<script>
import { store } from '../data/store'
import axios from 'axios';

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
        store.getDevs();
    },
}
</script>

<template>
   
    <div class="container">
        <div class="row">
            <div class="col-12" >

                <h1>Elenco Dev</h1>
                
                <div class="col-10 mx-auto">
                    
                    <!--si vede per mezzo secondo durante il collegamento dei dati -->
                    <h3 v-if="store.Loading">Caricamento in corso dei dati</h3>

                    <!-- nel caso ci siano errori -->  
                    <h3 v-if="store.LoadingError" class="text-danger"> {{ store.LoadingError }} </h3>

                </div>

            </div>

        </div>
        
        <!-- users -->
            <div v-for="item in store.ListDev" class="row justify-content-around flex-wrap">
                <template v-if="item.name.toLowerCase().includes(store.FilterText)">
                    <div class="card mb-3 h-300 rounded-5 border-1 p-0" style="max-width: 1300px;">
                        <div class="row g-0">

                            <!-- immagine -->
                            <div class="col-md-4 d-flex align-items-center justify-content-center ">

                                <img v-if="item.img_path == '' || item.img_path == null" src="https://picsum.photos/300/300?random" class="img-fluid start rounded-circle border border-5" alt="{{ item.name }},{{ item.surname }}">
                                
                                <img v-else :src="item.img_path" class="img-fluid rounded-start rounded-circle border border-5" alt="{{ item.name }},{{ item.surname }}">

                            </div>

                            <!-- dati -->
                            <div class="col-md-4">
                                <div class="card-body">
                                    <h2 class="card-title">{{ item.name }},{{ item.surname }}</h2>
                                    <p class="card-text"><small class="text-body-secondary">{{item.date_of_birth}}</small></p>
                                    <p class="card-text"><small class="text-body-secondary"><span class="fw-semibold">Email:</span> {{item.email}}</small></p>
                                    <p class="card-text"><small class="text-body-secondary"><span class="fw-semibold">Numero di telefono:</span> {{item.phone_number}}</small></p>
                                    <p class="card-text"><small class="text-body-secondary"><span class="fw-semibold">Partita IVA:</span> {{item.vat_number}}</small></p>

                                    <p class="card-text"><span class="fw-semibold">Bio:</span> {{item.bio}}</p>
                                    <p class="card-text"><span class="fw-semibold">Soft skill:</span> {{item.soft_skill}}</p>
                                    <!-- <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> -->
                                </div>
                            </div>

                            <!-- links -->
                            <div class="col-md-4 d-flex flex">
                                <div class="card-body">
                                    <h2 class="card-title">Link Utili</h2>
                                    <p><span class="fw-semibold">GitHub:</span> <a class="card-text"> {{item.github_link}}</a></p>
                                    <p><span class="fw-semibold">Linkedin:</span> <a class="card-text"> {{item.linkedin_link}}</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </div>

            <!-- <div class="row">
                <div class="col d-flex justify-content-center align-items-center">
                    <a @click="store.getDevsPage(store.devsCurrentPage - 1)" class="text-light btn btn-primary me-2">Previous page</a>
                    <a @click="store.getDevsPage(pageNumber)" v-for="pageNumber in store.devsTotalPages"
                        class="text-light  btn btn-primary me-2">{{ pageNumber }}</a>
                    <a @click="store.getDevsPage(store.devsCurrentPage + 1)" class="text-light btn btn-primary">Next page</a>
                </div>
            </div> -->
    </div>
</template>

<style lang="scss" scoped>

</style>
