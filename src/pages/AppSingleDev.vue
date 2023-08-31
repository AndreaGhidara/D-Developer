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

    <section class="container-fluid gradient-background_container">

        <div class="row">

            <!-- card center -->
            <div class="col-10 mx-auto my-5">

                <!-- jumbo img bg user -->
                <div class="col-12 my_height">
                    <img v-if="store.Dev.bg_dev == '' || store.Dev.bg_dev == null" src="https://picsum.photos/1200/720?random" class="img-fluid" alt="{{ store.Dev.name }},{{ store.Dev.surname }}">
                                
                    <img v-else :src="store.Dev.bg_dev" class="img-fluid " alt="{{ store.Dev.name }},{{ store.Dev.surname }}">
                </div>

                <!-- col big -->
                <div class="d-flex col-12 flex-wrap gradient-background">

                    <!-- left side -->
                    <div class="col-6 d-flex flex-column align-content-center flex-wrap py-2">
                        
                        <!-- img -->
                        <div>

                            <img v-if="store.Dev.img_path == '' || store.Dev.img_path == null" src="https://picsum.photos/300/300?random" class="img-fluid start rounded-circle border my_border border-5 position" alt="{{ store.Dev.name }},{{ store.Dev.surname }}">
                                
                            <img v-else :src="store.Dev.img_path" class="img-fluid rounded-start rounded-circle border my_border border-5 position" alt="{{ store.Dev.name }},{{ store.Dev.surname }}">

                        </div>

                        <!-- name surname -->
                        <div class="text-center">

                            <h3>{{ store.Dev.name }} {{ store.Dev.surname }}</h3>

                        </div>
                        
                        <!-- link -->
                        <div class="col d-flex  justify-content-around">

                            <a :href="store.Dev.github_link " target="_blank"><i class="fa-brands fa-github"></i></a>
                            
                            <a :href="store.Dev.linkedin_link" target="_blank"><i class="fa-brands fa-linkedin"></i></a>

                            <a :href="store.Dev.cv" target="_blank">CV</a>
                                                    
                        </div>
                            

                    </div>

                    <!-- right side -->
                    <div class="col-6 flex-column text-center py-2">

                        <div>
                            <p><b>Anno: </b>{{ store.Dev.date_of_birth }}</p>
                        </div>

                        <div>
                            <p><b>Indirizzo: </b>{{ store.Dev.address }}</p>
                        </div>

                        <div>
                            <p><b>Num: </b>{{ store.Dev.phone_number}}</p>
                        </div>

                        <div>
                            <p><b>P.iva: </b> {{ store.Dev.vat_number }}</p>
                        </div>

                        <div>
                            
                            <p><b>Email: </b>{{ store.Dev.email }}</p>

                        </div>
                       
                        <div>
                            <p><b>Bio: </b>{{ store.Dev.bio }}</p>
                        </div>
                        
                        <div>
                            <p> <b>Soft skill: </b>{{ store.Dev.soft_skill}}</p>
                        </div>
                        
                    </div>

                </div>
                <!-- finish big col -->

            </div>
            <!-- finish card -->

        </div>

    </section>

</template>

<style lang="scss" scoped>
@use'../style/variable.scss' as*;
.my_height{
    height: 200px;
    img{
        width: 100%;
        height: 100%;
       object-fit: cover;
    }
}
a{
    font-size: 2rem;
    text-decoration: none;
    color: $my_7 ;
}
.my_border{
    border-color: $my_primary !important;
}

.gradient-background {
  background: linear-gradient(180deg,#ff6600,#ffffa1);
  background-size: 120% 120%;
  animation: gradient-animation 20s ease infinite;
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.gradient-background_container {
  background: linear-gradient(162deg,#000000,#8f7777);
  background-size: 120% 120%;
  animation: gradient-animation 20s ease infinite;
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

</style>