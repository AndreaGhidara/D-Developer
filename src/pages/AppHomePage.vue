<script>
import { store } from '../data/store'
import TopDevs from '../components/TopDevs.vue'
import { Carousel } from 'bootstrap';
import Carousels from '../components/Carousels.vue';
import AppSectionTop from '../components/AppSectionTop.vue';
import SectionTwoCard from '../components/SectionTwoCard.vue';
import Register from '../components/Register.vue';
import AppPartners from '../components/AppPartners.vue';
import AppCarouselSwiper from '../components/AppCarouselSwiper.vue';
import AppText from '../components/AppText.vue';


export default {
    components: {
    TopDevs,
    Carousel,
    Carousels,
    AppSectionTop,
    SectionTwoCard,
    Register,
    AppPartners,
    AppCarouselSwiper,
    AppText,

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
    

    <div class="container-fluid hidden p-0">
            
        <!-- carosel -->
        <div class="d-none d-md-block">
            <AppCarouselSwiper />
        </div>
        <div class="d-md-none mt-5">
            <Carousels/>
        </div>

        <AppText />
            
        <!-- section top -->
            
        <AppSectionTop/>

        <!-- devs -->
            
        <TopDevs/>
        
        <!-- section two card -->

        <SectionTwoCard/>

        <!-- register -->

        <Register/>

        <!-- partners -->

        <AppPartners/>

    </div>

    
</template>

<style lang="scss" scoped>

@use'../style/variable.scss' as*;

.hidden{
    overflow-x: hidden;
}
</style>
