<script>

import { store } from '../data/store';
import AppJumbo from '../component_AppSingleDev/AppJumbo.vue';
import AppSectionLeft from '../component_AppSingleDev/AppSectionLeft.vue';
import AppSectionRight from '../component_AppSingleDev/AppSectionRight.vue';
import AppCarosel from '../component_AppSingleDev/AppCarosel.vue';
import AppReviewValutation from '../component_AppSingleDev/AppReviewValutation.vue';
import AppSectionMessage from '../component_AppSingleDev/AppSectionMessage.vue';

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
    
        <div class="container-fluid ">

            <!--top jumbo  -->
            <AppJumbo />

        </div>

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

                <!-- inizio dropdown recensione e valutazione-->
                <p class="d-inline-flex gap-1">

                    <button class="button" type="button" data-bs-toggle="collapse" data-bs-target="#review" aria-expanded="false" aria-controls="review">
                        <span class="text">Lascia una recensione</span>
                        <div class="wave"></div>
                    </button>

                </p>
                <div class="collapse" id="review">
                    <div class="card card-body border-0">

                        <!-- componente per recensione e valutazione -->
                        <AppReviewValutation/>

                    </div>
                </div>
                <!-- fine dropdown recensione e valutazione -->

                <!-- inizio dropdown messaggi-->
                <p class="d-inline-flex gap-1">

                    <button class="button" type="button" data-bs-toggle="collapse" data-bs-target="#messages" aria-expanded="false" aria-controls="messages">
                        <span class="text">Manda un messaggio</span>
                        <div class="wave"></div>
                    </button>

                </p>
                <div class="collapse" id="messages">
                    <div class="card card-body border-0">
                    
                        <!--componente x messaggio -->
                        <AppSectionMessage />
                    
                    </div>
                </div>
                <!-- inizio dropdown messaggi-->
                
               
            </div>

        </div>
        <!-- finish card rew -->

        <!-- carosello recensioni -->
        <AppCarosel :array="store.Dev.review"/>

</template>

<style lang="scss" scoped>
@use'../style/variable.scss' as*;


.my_img-up{
    background-image: url(../assets/img_home/prima_onda.png);
    background-size: auto;
}


</style>