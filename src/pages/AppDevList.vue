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
            valutations: []
        }
    },
    methods: {
        calculateAverage(valutations) {
            if (valutations.length === 0) {
                return 0; // Evita divisione per zero
            }

            const sum = valutations.reduce((total, valutation) => total + valutation.valutation, 0);
            const average = sum / valutations.length;
            return Math.ceil(average); // Arrotonda la media per eccesso
        }
    },
    mounted() {
        store.getDevs();
    },
}
</script>

<template >
   
    <section class="container-fluid bg-dark">
        <div class="row">
            <div class="col-10 mx-auto text-center" >

                <h1 class="text-light">Elenco Dev</h1>
                
                <div class="col-10 mx-auto">
                    
                    <!--si vede per mezzo secondo durante il collegamento dei dati -->
                    <h3 v-if="store.Loading">Caricamento in corso dei dati</h3>

                    <!-- nel caso ci siano errori -->  
                    <h3 v-if="store.LoadingError" class="text-danger"> {{ store.LoadingError }} </h3>

                </div>

            </div>

        </div>
        
        <div class="row ">
            <div class="col-10 d-flex justify-content-around flex-wrap mx-auto">

                <template v-for="item in store.ListDev" >

                        <!-- mostra risultati della ricerca per nome o per linguaggio -->
                        <template v-if="item.name.toLowerCase().includes(store.FilterText) && store.selectedLanguages.length === 0 || store.selectedLanguages.includes(item.programming_languages[0].language)">

                                <!-- card singola user -->
                                <div class="my_card  m-3">
                                    <b></b>
                                    <div>

                                        <!-- immagine profilo -->
                                        <img v-if="item.img_path == '' || item.img_path == null" src="https://picsum.photos/300/300?random" class="img-fluid start rounded-circle border my_border border-5 position" alt="{{ item.name }},{{ item.surname }}">
                                        <img v-else :src="item.img_path" class="img-fluid rounded-start rounded-circle border my_border border-5 position" alt="{{ item.name }},{{ item.surname }}">

                                        <!-- testo -->
                                        <p class="text-light position justify-content-center">{{ item.name }}<br>

                                            <!-- linguaggi -->
                                            <span v-for="language in item.programming_languages">{{ language.language }}<br></span><br>

                                            <!-- tutte le valutazioni (nascoste)-->
                                            <span class="visually-hidden" v-for="valutation in item.valutations" :key="valutation.id">{{ valutation.valutation }}<br></span>
                                            
                                            <!-- media valutazioni -->
                                            <p> {{ calculateAverage(item.valutations) }}</p>
                                        </p>

                                    </div>

                                    <div class="content">

                                        <!-- porta al profilo  -->
                                        <router-link :to="{name:'single-dev', params: {id: item.id}}"> link</router-link>

                                    </div>
                                </div>
                            
                        </template>
                        
                        


                </template>

            </div>

        </div>

    </section>
</template>

<style lang="scss" scoped>
@use'../style/variable.scss' as*;
.my_card {
  
  position: relative;
  width: 190px;
  height: 254px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
}
.my_border{
    
    border-color: $my_primary !important;
}


.my_card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(315deg, $my_8,$my_primary);
  border-radius: 10%;
  
}
img{
    
    width: 50%;
    top:10%;
    left: 25%;
}
.position{
    position:absolute;
    z-index: 99;
}
p.position{
    word-wrap: break-word;
    max-width: 150px;
    left: 10%;
}

.my_card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(315deg,$my_primary,$my_8);
  filter: blur(5px);
  border-radius: 10%;
}

.my_card b {
  position: absolute;
  inset: 6px;
  background: rgba(0, 0, 0, 0.2);
  z-index: 2;
  border-radius: 10%;
}

.my_card .content {
  position: absolute;
  z-index: 3;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scale(0);
  transition: 0.5s;
}

.my_card:hover .content {
  transform: scale(1);
  bottom: 25px;
}

.content .title {
  position: relative;
  color: #fff;
  font-weight: 500;
  line-height: 1em;
  font-size: 1em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
}

.content .title span {
  font-weight: 300;
  font-size: 0.70em;
}

</style>
