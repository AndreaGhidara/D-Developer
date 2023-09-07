<script>

import { store } from '../data/store';

export default {
    name:"AppSingleDev",
    name: 'Carousels',
    components: {

    },
    data() {
        return {
            store,
           
        }
    },
    methods: {
        
       
    },
    beforeMount(){
        store.getDev(this.$route.params.id);
        
    },
    mounted() {

        this.store.average(store.Dev.valutations);
        this.store.getValutation();
    
    },
    
}
</script>

<template>

    <section class="container-fluid bg_allpage gradient-background_container">

            <!-- card center -->
                <div class="row mb-auto">
                    <!-- jumbo img bg user -->
                    <div class="col-4 relative my_Size">
                        
                        <!-- img -->
                        
                        <img v-if="store.Dev.img_path" :src="this.store.imgApi + store.Dev.img_path" class="rounded-circle border my_border border-5 my_ratio my_object img-fluid" alt="{{ store.Dev.name }},{{ store.Dev.surname }}">
                        
                        <img v-else src="https://picsum.photos/300/300?random" class="img-fluid rounded-circle border my_border border-5" alt="{{ store.Dev.name }},{{ store.Dev.surname }}">
                    </div>
                    <div class="col-12 my_height p-0">
                        <img v-if="store.Dev.bg_dev" :src="this.store.imgApi + store.Dev.bg_dev" class="img-fluid my_object " alt="{{ store.Dev.name }},{{ store.Dev.surname }}">
                        
                        <img v-else src="https://picsum.photos/1200/720?random" class="img-fluid" alt="{{ store.Dev.name }},{{ store.Dev.surname }}">
                    </div>
                </div>

                <!-- col big -->
                <div class="container rounded px-5">
                    <div class="row py-5">
                        <!-- left side -->
                        <div class="col-md-4 col-12 p-3 mb-2 gradient-background rounded align-self-start">
                            <!-- name surname -->
                                <div class="text-center">
                                    <div>
                                        <h3>{{ store.Dev.name }} {{ store.Dev.surname }}</h3>
                                        <small>{{ store.Dev.date_of_birth }}</small>
                                    </div>

                                    <a :href="store.Dev.github_link " target="_blank"><i class="fa-brands fa-github"></i></a>
                                    
                                    <a :href="store.Dev.linkedin_link" target="_blank"><i class="fa-brands fa-linkedin px-3"></i></a>

                                    <a :href="store.Dev.cv" target="_blank"><i class="fa-regular fa-file-pdf"></i></a>
                                </div>

                                <div>
                                <p><b>Indirizzo: </b>{{ store.Dev.address }}</p>
                                </div>  
                                
                                <div>
                                <p><b>Email: </b>{{ store.Dev.email }}</p>
                                </div>

                                <!-- media voti con stars -->
                                <div>
                                    <h5>Media voti</h5>
                                    
                                    <p v-if="this.store.Tempo">
                                    Caricamento dei dati
                                    </p>

                                    <span v-for="voto in store.Stars">
                                        <template v-if="this.store.average(store.Dev.valutations) >= voto">
                                            <i class="fa-solid fa-star"></i>
                                        </template>
                                        <template v-else>
                                            <i class="fa-regular fa-star"></i>
                                        </template>
                                    </span>

                                </div>

                                

                        </div>

                        <!-- right side -->
                        <div class="col-12 col-md-7 offset-md-1 p-3 gradient-background rounded">

                            
                            <div>
                                <p><b>Bio: </b>{{ store.Dev.bio }}</p>
                            </div>
                            
                            <div>
                                <p> <b>Soft skill: </b>{{ store.Dev.soft_skill}}</p>
                            </div>

                            <div>
                                <h5>Liguaggi usati:</h5>
                                <p v-for="item in store.Dev.programming_languages">
                                    {{ item.language }}
                                </p>
                            </div>
                            
                            <div>
                                <p><b>Num: </b>{{ store.Dev.phone_number}}</p>
                            </div>

                            <div>
                                <p><b>P.iva: </b> {{ store.Dev.vat_number }}</p>
                            </div>
                            
                        </div>                      
                    </div>
                <!-- finish big col -->

            <!-- finish card -->
                </div>

            <!-- section message -->
            <div class="container rounded px-5 mt-4">

                <div class="row py-md-5 py-2">

                <!-- section rew -->
                    <div class="col-md-7 col-12 py-md-5 py-2 px-5 mt-4 mt-md-0 gradient-background rounded">
                        
                        <form method="post">

                        <!-- <div class="col-12 d-flex flex-wrap mx-auto card px-2"> -->

                            <div class="col-12 mx-auto fw-bold">
                                <h2>Lascia una recensione</h2>
                            </div>
                            
                            <div class="col-12 d-flex flex-wrap">
                                <div class="my-2 col-12 me-auto">
                                    <label for="exampleFormControlInput1" class="form-label fw-bold">Nome</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nome" v-model="this.store.newReview.name">
                                </div>
                                    
                                <div class="my-2 col-12">
                                    <label for="exampleFormControlInput1" class="form-label fw-bold">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Inserisci la tua email" v-model="this.store.newReview.email">
                                </div>
                            </div>
                        
                            <div class="col-12 mx-auto">
                                <div class="my-2">
                                    <label for="exampleFormControlTextarea1" class="form-label fw-bold">Scrivi Recensione</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Aggiungi una recensione.." v-model="this.store.newReview.review"></textarea>
                                </div>
                            </div>
                            
                            <div class="col-2 offset-5 my-2 mx-auto">

                                <button type="button" class="btn btn-primary" @click="store.postReview()">Invia</button>

                            </div>

                        </form>   
                        <!-- </div> -->

                        <!--valutation index -->
                        <!-- <div class="col-12 rounded my-2 p-3 mx-auto"> -->
                            <h2>Valuta la tua esperienza</h2>
                            <form>
                            
                                <select class="form-select" v-model="this.store.newValutation.valutation_id">
                                    <option disabled value>Select opinion</option>
                                    <template v-for="item in this.store.ListValutation">
                                        <option :id="item.id" :value="item.id">{{ item.valutation_name }}</option>
                                    </template>
                                    
            
                                </select>
                               
                                <button type="button" @click="store.postValutation()" class="btn btn-primary my-3">
                                    Invia
                                </button>
                            </form>
            
                        <!-- </div> -->
                    <!-- valutation finish -->
                    </div>
                    <div class="col-md-4 offset-md-1 col-12 gradient-background rounded p-5">
                        <form method="post">
                            <div class="col-12 mx-auto fw-bold">
                                <h2>Contattami</h2>
                            </div>
                            
                            <div class="col-12 d-flex flex-wrap">
                                <div class="my-2 col-12 col-md-4 me-auto">
                                    <label for="exampleFormControlInput1" class="form-label fw-bold">Nome</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nome" v-model="this.store.newComment.name">
                                </div>
                                    
                                <div class="my-2 col-12 col-md-4">
                                    <label for="exampleFormControlInput1" class="form-label fw-bold">Cognome</label>
                                    <input type="tetx" class="form-control" id="exampleFormControlInput1" placeholder="Cognome" v-model="this.store.newComment.surname">
                                </div> 
                            </div>
                            
                            <div class="col-12 mx-auto">

                                <div class="my-2">
                                    <label for="exampleFormControlInput1" class="form-label fw-bold">Indirizzo Email</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Inserisci indirizzo mail" v-model="this.store.newComment.email">
                                </div>

                            </div>      
                            
                            <div class="col-12 mx-auto">
                                <div class="my-2">
                                    <label for="exampleFormControlTextarea1" class="form-label fw-bold">Messaggio</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Lascia un messaggio.." v-model="this.store.newComment.text"></textarea>
                                </div>
                            </div>
                            
                            <div class="col-2 mt-5 mx-auto">

                                <button  type="button" @click="store.postMessage()" class="btn btn-primary">Invia</button>

                            </div>

                        </form>
                    </div>
<!-- finish card message -->
                </div>

        </div>
            <!-- finish card rew -->


            <!-- carousel for rew -->
            <div class="container p-5">
                <h4>Recensioni</h4>
                <div class="row my_overflow_x flex-nowrap">
                    <template v-for="(reviews, c) in store.Dev.review">
                        <div class="col-md-3 col-12 p-5 mx-1 gradient-background h-550 text-center rounded my_overflow_y">
                            <h6>{{ reviews.name }}</h6>
                            <small>{{ reviews.email }}</small>
                            <p class="">{{ reviews.review }}</p>
                        </div>
                    </template>
                </div>
            </div>
            <!-- finish carousel for rew -->

    </section>

</template>

<style lang="scss" scoped>
@use'../style/variable.scss' as*;

.my_overflow_x {
    overflow-x: auto;
    overflow-y: hidden;
}

.my_overflow_y {
    overflow-y: auto;
}
.my_ratio{
    aspect-ratio: 1;
   
}
.my_object{
     object-fit: cover;
}
.my_Size {
    max-width: 300px;
    max-height: 300px;
}
.bg_allpage {
    background-position: 0% 100%, 100% 0%;
    background-image: url(/solo_onda.png), url(/solo_ondareverse.png), linear-gradient(162deg,#000000,#8f7777);
    background-position: 0% 100%, 100% 50%;
    background-size: 120vw 50vh, 120vw 50vh, 100% 100%;
    background-repeat: no-repeat;
}

.h-550{
    height: 300px;
}

.relative{
    position: absolute;
    top: 150px;
    left: 10%;
    max-height: 300px;
}

.my_height{
    max-height: 400px;
    img{
        width: 100%;
        max-height: 100%;
        // object-fit: cover;
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
img.icon{
    width: 2.5rem;
}
.gradient-background {
  background: #ff660088;
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