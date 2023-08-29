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

    <!-- carosel -->

    <Carousels/>
    
    <!-- devs -->

    <TopDevs/>

    <!-- introduzione -->
    <div class="container-fluid bg-primary py-5">
        <div class="container ">
            <div class="row h-500">
                <div class="col bg-primary-subtle">
                    
                    <!-- testo -->

                </div>
                <div class="col">

                    <!-- immagine -->

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
.h-500{
    height: 550px;
    background-color: blue;
}

</style>
