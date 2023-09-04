<script>
import { store } from '../data/store'
import TopDevs from '../components/TopDevs.vue'
import { Carousel } from 'bootstrap';
import Carousels from '../components/Carousels.vue';

export default {
    components: {
    TopDevs,
    Carousel,
    Carousels
},
    data() {
        return {
            store,
        }
    },
    methods: {

    },
    mounted() {

    },
}
</script>

<template>
    <div class="gradient-background">

        <div class="container-fluid py-5 bg_allpage">
            <!-- carosel -->
            
            <Carousels/>
            
            <!-- devs -->
            
        <TopDevs/>
        
        <!-- introduzione -->
            <div class="container ">
            <div class="row">
                <div class="col-4 offset-1 my_bg text-center p-5 text-white rounded">
                    <p>Realizza il sito dei tuoi sogni con i nostri esperi web developer! Siamo qui per trasformare la tua visione in una presenza online straordinaria. Con competenza e creatività. costruiremo insieme il tuo successo sul web.</p>
                </div>
                <div class="col-4 offset-2 my_bg rounded">
                    
                    <!-- immagine -->
                    
                </div>
            </div>
            <div class="row py-5">
                <div class="col-4 m-auto rounded-5 text-center text-white bg_blackOpa p-5">
                    <h5>Vuoi diventare uno dei nostri professionisti?</h5>
                    <button class="btn orange">Registrati</button>
                </div>
            </div>
            <div class="row">
                <div class="col-8 m-auto text-center bg_orangeOpa py-5">
                    <h4>Hanno collaborato con noi</h4>
                    <div class="row text-center">
                        <div class="col-6 py-3">
                            <img src="/logoBool.png" alt="" class="img-fluid">
                        </div>
                        <div class="col-6 py-3">
                            <p>loghi altri progetti</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
    <!-- <div>
        <h1>App Home Page</h1>
        <a class="btn btn-primary" href="/dev-list">
            DevList
        </a>
    </div> -->
</template>

<style lang="scss" scoped>

@use'../style/variable.scss' as*;

.my_bg {
    background-color: $my_primary;
}
.h-500{
    height: 550px;
    background-color: blue;
}

.bg_allpage {
    background-image: url(/manobg.png), url(/manoreversebg.png), url(/solo_onda.png), url(/solo_ondareverse.png);
    background-position: 0% 110%, 100% -10%, 0% 100%, 100% 0%;
    background-size: 50vh, 50vh, 120vw 50vh, 120vw 50vh;
    background-repeat: no-repeat;
}

.gradient-background {
  background: linear-gradient(147deg,#000000,#8f7777);
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

.orange {
    background-color: $my_primary;
}

.bg_blackOpa {
    background-color: #00000080;
}

.bg_orangeOpa{
    background-color: #ff660080;
}
</style>
