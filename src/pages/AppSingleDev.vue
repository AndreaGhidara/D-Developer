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
        
    },
    
}
</script>

<template>

    <section class="container-fluid bg_allpage gradient-background_container">

            <!-- card center -->
                <div class="row mb-auto">
                    <!-- jumbo img bg user -->
                    <div class="col-12 my_height p-0 relative">
                        <img v-if="store.Dev.bg_dev == '' || store.Dev.bg_dev == null" src="https://picsum.photos/1200/720?random" class="img-fluid" alt="{{ store.Dev.name }},{{ store.Dev.surname }}">
                        
                        <img v-else :src="store.Dev.bg_dev" class="img-fluid" alt="{{ store.Dev.name }},{{ store.Dev.surname }}">
                        <div class="absolute my_Size">
                            <!-- img -->
                            
                            <img v-if="store.Dev.img_path == '' || store.Dev.img_path == null" src="https://picsum.photos/300/300?random" class="img-fluid start rounded-circle border my_border border-5" alt="{{ store.Dev.name }},{{ store.Dev.surname }}">
                            
                            <img v-else :src="store.Dev.img_path" class="img-fluid rounded-start rounded-circle border my_border border-5" alt="{{ store.Dev.name }},{{ store.Dev.surname }}">
                        </div>
                    </div>
                </div>

                <!-- col big -->
                <div class="container">
                    <div class="row">
                        <!-- left side -->
                        <div class="col-4 p-3 mt-5 gradient-background rounded align-self-start">
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
                        <div class="col-7 offset-1 p-3 mt-5 gradient-background rounded">

                            
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
            <div class="container">

                <div class="row py-5">
                    <div class="col-7 gradient-background rounded p-3">
                        <div class="col-11 mx-auto fw-bold">
                            <h2>Contattami</h2>
                        </div>
                        
                        <div class="col-12 d-flex justify-content-around">
                            <div class="my-2 col-5">
                                <label for="exampleFormControlInput1" class="form-label fw-bold">Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name">
                            </div>
                                
                            <div class="my-2 col-5">
                                <label for="exampleFormControlInput1" class="form-label fw-bold">Surname</label>
                                <input type="tetx" class="form-control" id="exampleFormControlInput1" placeholder="Surname">
                            </div> 
                        </div>
                        
                        <div class="col-11 mx-auto">

                            <div class="my-2">
                                <label for="exampleFormControlInput1" class="form-label fw-bold">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                            </div>

                        </div>      
                        
                        <div class="col-11 mx-auto">
                            <div class="my-2">
                                <label for="exampleFormControlTextarea1" class="form-label fw-bold">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Add message.."></textarea>
                            </div>
                        </div>
                        
                        <div class="col-1 my-2 mx-auto">

                            <button type="submit" class="btn btn-primary">Invia</button>

                        </div>

                    </div>
                <!-- finish card message -->

                <!-- section rew -->
                    <div class="col-4 offset-1 p-3 gradient-background rounded">
                        
                        <!-- <div class="col-12 d-flex flex-wrap mx-auto card px-2"> -->

                            <div class="col-11 mx-auto fw-bold">
                                <h2>Lascia una recensione</h2>
                            </div>
                            
                            <div class="col-12 d-flex justify-content-around p-3">
                                <div class="my-2 col-5">
                                    <label for="exampleFormControlInput1" class="form-label fw-bold">Name</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name">
                                </div>
                                    
                                <div class="my-2 col-5">
                                    <label for="exampleFormControlInput1" class="form-label fw-bold">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                                </div>
                            </div>
                        
                            <div class="col-11 mx-auto">
                                <div class="my-2">
                                    <label for="exampleFormControlTextarea1" class="form-label fw-bold">Commento</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Add comment.."></textarea>
                                </div>
                            </div>
                            
                            <div class="col-1 my-2 m-auto">

                                <button type="submit" class="btn btn-primary">Invia</button>

                            </div>
                            
                        <!-- </div> -->

                    </div>
                </div>

        </div>
            <!-- finish card rew -->

            <!-- carousel for rew -->
            <div class="container p-5">
                <div class="row">
                    <h4>Recensioni</h4>
                    <template v-for="(reviews, c) in store.Dev.review">
                        <div class="col-3 p-5 mx-1 gradient-background h-550 text-center rounded">
                            <h6>{{ reviews.name }}</h6>
                            <small>{{ reviews.email }}</small>
                            <p>{{ reviews.review }}</p>
                        </div>
                    </template>
                </div>
            </div>
            <!-- finish carousel for rew -->

    </section>

</template>

<style lang="scss" scoped>
@use'../style/variable.scss' as*;

*{
    color: white;
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
    position: relative;
}
.absolute{
    position: relative;
    bottom: 350px;
    left: 10%;
}

.my_height{
    height: 400px;
    img{
        width: 100%;
        max-height: 100%;
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