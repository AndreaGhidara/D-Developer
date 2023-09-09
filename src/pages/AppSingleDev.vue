<script>

import { store } from '../data/store';
import AppJumbo from '../component_AppSingleDev/AppJumbo.vue';
import AppSectionLeft from '../component_AppSingleDev/AppSectionLeft.vue';
import AppSectionRight from '../component_AppSingleDev/AppSectionRight.vue';
import AppCarosel from '../component_AppSingleDev/AppCarosel.vue';
export default {
    name: "AppSingleDev",
   
    components: {
        AppJumbo,
        AppSectionLeft,
        AppSectionRight,
        AppCarosel
    },
    data() {
        return {
            store,

        }
    },
    methods: {


    },
    beforeMount() {
        store.getDev(this.$route.params.id);

    },
    mounted() {

        // this.store.average(store.Dev.valutations);
        this.store.getValutation();

    },

}
</script>

<template>
    
    <section class="container-fluid ">

        <!--top jumbo  -->
        <AppJumbo />

        <!-- conntainer big for section left e right -->
        <div class="container-fluid my_img-up">
            
            <div class="container rounded px-5">
                
                <div class="row py-5">

                    <!-- left side -->
                    <AppSectionLeft/>

                    <!-- right side -->
                    <AppSectionRight/>
                    
                </div>
                
            </div>

        </div>

        <!-- section message -->
        <div class="container rounded px-5 mt-4">

            <div class="row py-md-5 py-2">

                <!-- section recensione piu -->
                <div class="col-md-7 col-12 py-md-5 py-2 px-5 mt-4 mt-md-0 gradient-background rounded">

                    <form method="post">

                        <!-- <div class="col-12 d-flex flex-wrap mx-auto card px-2"> -->

                        <div class="col-12 mx-auto fw-bold">
                            <h2>Lascia una recensione</h2>
                        </div>

                        <div class="col-12 d-flex flex-wrap">
                            <div class="my-2 col-12 me-auto">
                                <label for="exampleFormControlInput1" class="form-label fw-bold">Nome</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nome"
                                    v-model="this.store.newReview.name">
                            </div>

                            <div class="my-2 col-12">
                                <label for="exampleFormControlInput1" class="form-label fw-bold">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1"
                                    placeholder="Inserisci la tua email" v-model="this.store.newReview.email">
                            </div>
                        </div>

                        <div class="col-12 mx-auto">
                            <div class="my-2">
                                <label for="exampleFormControlTextarea1" class="form-label fw-bold">Scrivi
                                    Recensione</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                    placeholder="Aggiungi una recensione.."
                                    v-model="this.store.newReview.review"></textarea>
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
                            <option disabled value>Vota</option>
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


                <!-- messaggio -->
                <div class="col-md-4 offset-md-1 col-12 gradient-background rounded p-5">
                    <form method="post">
                        <div class="col-12 mx-auto fw-bold">
                            <h2>Contattami</h2>
                        </div>

                        <div class="col-12 d-flex flex-wrap">
                            <div class="my-2 col-12 col-md-4 me-auto">
                                <label for="exampleFormControlInput1" class="form-label fw-bold">Nome</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nome"
                                    v-model="this.store.newComment.name">
                            </div>

                            <div class="my-2 col-12 col-md-4">
                                <label for="exampleFormControlInput1" class="form-label fw-bold">Cognome</label>
                                <input type="tetx" class="form-control" id="exampleFormControlInput1" placeholder="Cognome"
                                    v-model="this.store.newComment.surname">
                            </div>
                        </div>

                        <div class="col-12 mx-auto">

                            <div class="my-2">
                                <label for="exampleFormControlInput1" class="form-label fw-bold">Indirizzo Email</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1"
                                    placeholder="Inserisci indirizzo mail" v-model="this.store.newComment.email">
                            </div>

                        </div>

                        <div class="col-12 mx-auto">
                            <div class="my-2">
                                <label for="exampleFormControlTextarea1" class="form-label fw-bold">Messaggio</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                    placeholder="Lascia un messaggio.." v-model="this.store.newComment.text"></textarea>
                            </div>
                        </div>

                        <div class="col-2 mt-5 mx-auto">

                            <button type="button" @click="store.postMessage()" class="btn btn-primary">Invia</button>

                        </div>

                    </form>
                </div>
                <!-- finish card message -->
            </div>

        </div>
        <!-- finish card rew -->

        <!-- carosello recensioni -->
        <AppCarosel :array="store.Dev.review"/>

    </section>
</template>

<style lang="scss" scoped>
@use'../style/variable.scss' as*;


.my_img-up{
    background-image: url(../assets/img_home/prima_onda.png);
    background-size: auto;
}


</style>