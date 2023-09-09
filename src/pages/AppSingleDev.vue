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

                <!-- componente per recensione e valutazione -->

                <AppReviewValutation/>

                <!--componente x messaggio -->
                
                <AppSectionMessage />
               
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