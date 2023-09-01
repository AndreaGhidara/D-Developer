<script>
import { store } from '../data/store'

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
    beforeMount(){
        store.getDev(this.$route.params.id);
    },
    mounted() {

        
       this.store.average(store.Dev.valutations);
        
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
                    <div class="col-6 d-flex flex-column align-content-center flex-wrap py-2 my-3">
                        
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
                        <div class="col d-flex align-items-center justify-content-around">

                            <a :href="store.Dev.github_link " target="_blank"><i class="fa-brands fa-github"></i></a>
                            
                            <a :href="store.Dev.linkedin_link" target="_blank"><i class="fa-brands fa-linkedin"></i></a>

                            <a :href="store.Dev.cv" target="_blank"><img src="../assets/icon/CV.png" class="icon" alt="icona_cv"></a>
                                                    
                        </div>
                            

                    </div>

                    <!-- right side -->
                    <div class="col-6 flex-column text-center my-3 py-2">

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
                        <div>
                            <h5>Liguaggi usati:</h5>
                            <p v-for="item in store.Dev.programming_languages">
                                {{ item.language }}
                            </p>
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
                
                </div>
                <!-- finish big col -->

            </div>
            <!-- finish card -->


            <!-- section message -->
            <div class="col-12">
                
                <div class="col-8 d-flex flex-wrap mx-auto my-3 card px-2 gradient-background">

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

            </div>
            <!-- finish card message -->

             <!-- section rew -->
             <div class="col-12">
                
                <div class="col-8 d-flex flex-wrap mx-auto my-3 card px-2 gradient-background">

                    <div class="col-11 mx-auto fw-bold">
                        <h2>Lascia una recensione</h2>
                    </div>
                    
                    <div class="col-12 d-flex justify-content-around">
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
                    
                    <div class="col-1 my-2 mx-auto">

                        <button type="submit" class="btn btn-primary">Invia</button>

                    </div>
                    
                </div>

            </div>
            <!-- finish card rew -->

            <!-- carousel for rew -->
            <div>

            </div>
            <!-- finish carousel for rew -->
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
img.icon{
    width: 2.5rem;
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