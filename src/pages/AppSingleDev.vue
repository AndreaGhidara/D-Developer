<script>

import { store } from '../data/store';
import AppJumbo from '../component_AppSingleDev/AppJumbo.vue';
import AppSectionLeft from '../component_AppSingleDev/AppSectionLeft.vue';
import AppSectionRight from '../component_AppSingleDev/AppSectionRight.vue';
import AppCarosel from '../component_AppSingleDev/AppCarosel.vue';
import AppSectionMessage from '../component_AppSingleDev/AppSectionMessage.vue';
import AppReviewValutation from '../component_AppSingleDev/AppReviewValutation.vue';

export default {
    name: "AppSingleDev",
    components: {
        AppJumbo,
        AppSectionLeft,
        AppSectionRight,
        AppCarosel,
        AppReviewValutation,
        AppSectionMessage
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
    <div class="container-fluid pt-5 mt-5 px-0">

        <!--top jumbo  -->
        <AppJumbo />

    </div>

    <!-- conntainer big for section left e right -->
    <div class="container-fluid my_img-up mt-5">

        <div class="container rounded">

            <div class="row py-5">

                <!-- left side -->
                <div class="col-12">
                    <AppSectionLeft />
                </div>

                <!-- right side -->
                <div class="col-12 d-flex justify-content-center ">
                    <AppSectionRight />
                </div>
            </div>
        </div>

    </div>


    
    <!-- section Message and REVIEW -->
    <div class="container rounded mt-4">
        
        <div class="d-flex justify-content-between gap-1">
            <!-- MESSAGGI -->
            <button class="button" type="button" data-bs-toggle="collapse" data-bs-target="#messages" aria-expanded="false"
            aria-controls="messages">
                <span class="text">Manda un messaggio</span>
                <div class="wave"></div>
            </button>
            <!-- RECENSIONI -->
            <button class="button" type="button" data-bs-toggle="collapse" data-bs-target="#review" aria-expanded="false"
            aria-controls="review">
            <span class="text">Lascia una recensione</span>
            <div class="wave"></div>
        </button>
    </div>
    
    <div class="row pt-3">
        <div class="co1-l2">
                <div class="collapse multi-collapse" id="messages">
                    <div class="card card-body">
                        <AppSectionMessage />
                    </div>
                </div>
            </div>
            <div class="col-12 py-3">
                <div class="collapse multi-collapse" id="review">
                    <div class="card card-body">
                        <AppReviewValutation />
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- carosello recensioni -->
    <div class="w-100">
        <AppCarosel :array="store.Dev.review" />
    </div>
    
    <!-- Alert -->

    <!-- mesaggi -->
    <div v-if="store.showPopupMessages" class="alert alert-success alert-dismissible popup fade show">
        Messaggio inviato con successo
        <button @click="store.closePopupMessages" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <!-- recensione -->
    <div v-if="store.showPopupReviews" class="alert alert-success alert-dismissible popup fade show">
        Recensione inviata con successo
        <button @click="store.closePopupReviews" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <!-- valutazione -->
    <div v-if="store.showPopupValutations" class="alert alert-success alert-dismissible popup fade show">
        Valutazione inviata con successo
        <button @click="store.closePopupValutations" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    
</template>

<style lang="scss" scoped>
@use'../style/variable.scss' as*;


.my_img-up {
    background-image: url(../assets/img_home/prima_onda.png);
    background-size: auto;
}

.popup {
  position: fixed;
  top: 90px;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: start;
  z-index: 999;
}

.btn-close:focus{
    box-shadow: none;
}
</style>