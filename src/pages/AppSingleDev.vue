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

    <section>
        <div class="col-10 mx-auto">

            <!--si vede per mezzo secondo durante il collegamento dei dati -->
            <h3 v-if="store.Loading">Caricamento in corso dei dati</h3>

            <!-- nel caso ci siano errori -->
            <h3 v-if="store.LoadingError" class="text-danger"> {{ store.LoadingError }} </h3>
            
        </div>
    </section>

    <section class="container-fluid">

            <!-- card center -->
                <div class="row mb-auto">
                    <!-- jumbo img bg user -->
                    <div class="col-4 relative my_Size">
                        
                        <!-- img -->
                        
                        <img v-if="store.Dev.img_path" :src="this.store.imgApi + store.Dev.img_path" class="rounded-circe my_ratio my_object img-fluid border border-2 border-light" alt="{{ store.Dev.name }},{{ store.Dev.surname }}">
                        
                        <img v-else src="https://picsum.photos/300/300?random" class="img-fluid rounded-circle border border-2 border-light" alt="{{ store.Dev.name }},{{ store.Dev.surname }}">
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
                        <div class="col-md-4 col-12 p-3 mb-2 rounded-5 align-self-start shadow">
                            <!-- name surname -->
                                <div class="text-center">
                                    <div>
                                        <h3>{{ store.Dev.name }} {{ store.Dev.surname }}</h3>
                                    </div>
                                    
                                    
                                    
                                </div>
                                
                                <div class="row mt-4">
                                    <div class="col">
                                        <p class="text-center">{{ store.Dev.bio }}</p>
                                    </div>
                                </div>  
                                
                                <div class="row mt-4">
                                    <div class="col ">
                                        <p > <b>Soft skill: </b>{{ store.Dev.soft_skill}}</p>
                                    </div>
                                </div>
                                
                                <!-- media voti con stars -->
                                
                                <div class="row mt-4">
                                    <div class="col">
                                        <div class="row">
                                            <h5>Skills</h5><br>
                                        </div>
                                        <div class="row">
                                            <div class="col d-flex">
                                                <p class="skills rouded rounded-pill px-2 fw-semibold me-3" v-for="item in store.Dev.programming_languages">
                                                    {{ item.language }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="row mt-4">
                                    <div class="col">
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
                                
                            </div>
                            
                            <!-- right side -->
                            <div class="col-12 col-md-7 offset-md-1 p-3 rounded-5 shadow">
                                
                                <h4 class="fw-bold">
                                    Informazioni
                                </h4>
                                
                                <div class="row row-cols-1 row-cols-xl-3 row-cols-lg-2 ">
                                    
                                    <div class="col">
                                        <p class="me-2 text-secondary"><b>Data di nascita: </b></p>
                                        <p class="me-3 fw-medium">{{ store.Dev.date_of_birth}}</p>
                                    </div>
                                    <div class="col">
                                        <p class="me-2 text-secondary"><b>Num: </b></p>
                                        <p class="me-3 fw-medium">{{ store.Dev.phone_number}}</p>
                                    </div>
                                    <div class="col">
                                        <p class="me-2 text-secondary"><b>P.iva: </b></p>
                                        <p class="me-3 fw-medium">{{ store.Dev.vat_number }}</p>
                                    </div>
                                    
                                    <div class="col">
                                        <p class="me-2 text-secondary"><b>P.iva: </b></p>
                                        <p class="me-3 fw-medium">{{ store.Dev.vat_number }}</p>
                                    </div>
                                    <div class="col">
                                        <p class="me-2 text-secondary"><b>Indirizzo: </b></p>
                                        <p class="me-3 fw-medium">{{ store.Dev.address }}</p>
                                    </div>
                                    <div class="col">
                                        <p class="me-2 text-secondary"><b>Email: </b></p>
                                        <p class="me-3 fw-medium text-wrap">{{ store.Dev.email }}</p>
                                    </div>
                                    
                                </div>

                                <!-- links -->

                                <div class="row row-cols-6">
                                    <div class="col">
                                        <a :href="store.Dev.cv" target="_blank"><i class="fa-regular fa-file-pdf"></i></a>
                                    </div>
                                    <div class="col">
                                        <a :href="store.Dev.linkedin_link" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                                    </div>
                                    <div class="col">
                                        <a :href="store.Dev.github_link " target="_blank"><i class="fa-brands fa-github"></i></a>
                                    </div>
                                </div>
              
                            </div>                      
                    </div>
                <!-- finish big col -->
                
            <!-- finish card -->
                </div>

            <!-- RECENSIONI -->
            <div class="container">
                <div class="row">
                    <div class="col-12 d-flex flex-column">
                        <p>
                            <button class="col-12 btn btn-primary shadow" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                RECENSIONE
                            </button>
                        </p>
                        <div class="collapse" id="collapseExample">

                            <!-- contenuto nascosto -->
                            <div class="col-12 py-md-5 py-2 px-5 mt-4 rounded rounded-5">
                                
                                <form method="post">
                
                                <!-- <div class="col-12 d-flex flex-wrap mx-auto card px-2"> -->
                
                                    <div class="col-12 mx-auto fw-bold">
                                        <h2 >Lascia una recensione</h2>
                                    </div>
                                    
                                    <div class="col-12 d-flex flex-wrap">
                                        <div class="my-2 col-12 me-auto">
                                            <label for="exampleFormControlInput1" class="form-label fw-bold text-secondary">Nome</label>
                                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nome" v-model="this.store.newReview.name">
                                        </div>
                                            
                                        <div class="my-2 col-12">
                                            <label  for="exampleFormControlInput1" class="form-label fw-bold text-secondary">Indirizzo Email</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Inserisci la tua email" v-model="this.store.newReview.email">
                                        </div>
                                    </div>
                                
                                    <div class="col-12 mx-auto">
                                        <div class="my-2">
                                            <label  for="exampleFormControlTextarea1" class="form-label fw-bold text-secondary">Scrivi Recensione</label>
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Aggiungi una recensione.." v-model="this.store.newReview.review"></textarea>
                                        </div>
                                    </div>
                                    
                                    <div class="col-auto my-2">
                                                
                                        <button class="button mx-auto" @click="store.postReview()">
                                <span class="text">INVIA</span>
                                <div class="wave"></div>
                                </button>
                                                    </div>
                
                                </form>   
                
                                <!--valutation index -->
                                    <h2>Valuta la tua esperienza</h2>
                                    <form>
                                    
                                        <select class="form-select" v-model="this.store.newValutation.valutation_id">
                                            <option disabled value>Select opinion</option>
                                            <template v-for="item in this.store.ListValutation">
                                                <option :id="item.id" :value="item.id">{{ item.valutation_name }}</option>
                                            </template>
                                        </select>
                                       
                                        <button class="button my-2 mx-auto" @click="store.postValutation()">
                                    <span class="text">INVIA</span>
                                            <div class="wave"></div>
                                        </button>
                                    </form>
                    
                            <!-- valutation finish -->
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div> 

            <!-- CONTATTAMI -->
            <div class="container">
                <div class="row">
                    <div class="col-12 d-flex flex-column">
                        <p>
                            <button class="col-12 btn btn-primary shadow" type="button" data-bs-toggle="collapse" data-bs-target="#messaggi" aria-expanded="false" aria-controls="messaggi">
                                CONTATTAMI
                            </button>
                        </p>
                        <div class="collapse" id="messaggi">

                        <!-- contenuto nascosto -->
                            <div class=" col-12 rounded rounded-5 p-5 ">
                                <form method="post">
                                    <div class="col-12 mx-auto fw-bold">
                                        <h2>Contattami</h2>
                                    </div>
                                    
                                    <div class="col-12 d-flex flex-wrap">
                                        <div class="my-2 col-12 col-md-4 me-auto">
                                            <label for="exampleFormControlInput1" class="form-label fw-bold text-secondary">Nome</label>
                                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nome" v-model="this.store.newComment.name">
                                        </div>
                                            
                                        <div class="my-2 col-12 col-md-4">
                                            <label for="exampleFormControlInput1" class="form-label fw-bold text-secondary">Cognome</label>
                                            <input type="tetx" class="form-control" id="exampleFormControlInput1" placeholder="Cognome" v-model="this.store.newComment.surname">
                                        </div> 
                                    </div>
                                    
                                    <div class="col-12 mx-auto">
                
                                        <div class="my-2">
                                            <label for="exampleFormControlInput1" class="form-label fw-bold text-secondary">Indirizzo Email</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Inserisci indirizzo mail" v-model="this.store.newComment.email">
                                        </div>
                
                                    </div>      
                                    
                                    <div class="col-12 mx-auto">
                                        <div class="my-2">
                                            <label for="exampleFormControlTextarea1" class="form-label fw-bold text-secondary">Messaggio</label>
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Lascia un messaggio.." v-model="this.store.newComment.text"></textarea>
                                        </div>
                                    </div>
                                    
                                    <div class="col-auto my-2">
                                                        <button class="button mx-auto" @click="store.postMessage()">
                                    <span class="text">INVIA</span>
                                    <div class="wave"></div>
                                </button>
                                                    </div>
                
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div> 

            <!-- section message -->
            <div class="container rounded px-5 mt-4">

                <div class="row py-md-5 py-2">

                <!-- section rew -->
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

h3,h4,h2{
    color: #40B4FF;
}

.my_primary{
    color: #40B4FF;
}

.skills{
    display: flex;
    color: #40B4FF;
    border: 1px solid #40B4FF;
    width: auto;
}

input,textarea,select,option{
    border: none;
    border-bottom: 1px solid #FCB457;
    border-radius: 0;
    outline: none;
    box-shadow: none!important
}



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
    max-width: 250px;
    max-height: 250px;
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
    top: 220px;
    left: 22%;
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


</style>