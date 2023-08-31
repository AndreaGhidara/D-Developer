<script>
import { store } from '../data/store'

export default {
    name:"TopDevs",
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
        store.getDevsPage(1);
    },
}
</script>

<template>

<div class="container-fluid bg-primary pt-5">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-4 g4">
                
                <!-- cards dei top devs -->
                <div v-for="item in store.ListDevPage" class="col">
                    <div class="bg-transparent border-0 card h-100 text-center" style="width: 18rem;">
                        
                        <!-- immagine profilo -->
                        <img v-if="item.img_path" src="{{ item.img_path }}" class="card-img-top" alt="...">
                        <img v-else src="https://picsum.photos/300/300?random" class="img-fluid rounded-circle border border-5" alt="{{item.name}}">
                        
                        <!-- body -->
                        <div class="card-body">
                            <h5 class="card-title">{{item.name}} {{ item.surname }}</h5>
                            <!-- <router-link :to="{name:'single-dev', params: {id: item.id}}" class="text-black fs-5 fw-semibold text-decoration-none">{{ item.name }} {{ item.surname }}</router-link> -->
                            <!-- <a href="/devlist" class="text-black fs-5 fw-semibold text-decoration-none">{{item.name}} {{ item.surname }}</a> -->
                            <p class="card-text">{{item.bio}}</p>
                        </div>
                        <div class="card-footer bg-transparent border-top-0">
                            <!-- <a href="/devlist" class="btn btn-success">visualizza profilo</a> -->
                            <router-link :to="{name:'single-dev', params: {id: item.id}}" class="btn btn-success">Mostra altro</router-link>
                        </div>
                    </div>
                </div>
            
            </div>
            <div class="row">
                <div class="col d-flex justify-content-center align-item-center pt-5">

                    <!-- mostra tutti i devs -->

                    <a href="/devlist" class="btn btn-danger"> mostra tutti </a>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>



</style>