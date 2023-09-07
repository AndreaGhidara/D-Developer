<script>
import { store } from '../data/store'
import axios from 'axios';
import LittleCard from '../customComponentt/LittleCard.vue';

export default {
    name: "AppDevList",
    components: {
        LittleCard,
    },
    data() {
        return {
            store,
            valutations: []
        }
    },
    methods: {

    },
    mounted() {
        store.getDevs();
    },
}
</script>

<template >
    <div class="gradient-background ">

        <div class="container-fluid py-5 bg_allpage">

            <div class="row">

                <div class="col-10 mx-auto text-center">

                    <h1 class="text-light">Elenco Dev</h1>

                    <div class="col-10 mx-auto">

                        <!--si vede per mezzo secondo durante il collegamento dei dati -->
                        <h3 v-if="store.Loading">Caricamento in corso dei dati</h3>

                        <!-- nel caso ci siano errori -->
                        <h3 v-if="store.LoadingError" class="text-danger"> {{ store.LoadingError }} </h3>

                    </div>

                </div>
            </div>
            <div class="container">
                <div class="row justify-content-center">
                <template v-for="dev in store.devFiltred" :key="dev">
                    <div class="col-lg-3 col-sm-6 col-12 p-3">
                        <LittleCard :user="dev" class="m-auto"/>
                    </div>
                </template>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use'../style/variable.scss' as*;

.gradient-background {
    background: linear-gradient(147deg, #000000, #8f7777);
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

.bg_allpage {
    background-image: url(/solo_onda.png);
    background-position: 100% 50%;
    background-size: 120vw 70vh;
    background-repeat: no-repeat;
    background-attachment: fixed;
}

.my_card {

    position: relative;
    width: 190px;
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-filtredDevs: center;
    border-radius: 10%;

    p {
        text-align: center;
        font-size: 0.80rem;
        margin: 0 !important;

    }

    .my_border {

        border-color: $my_primary !important;
    }

    img {

        width: 50%;
        top: 10%;
        left: 25%;

    }

    .position {
        position: absolute;
        z-index: 99;
    }

    div.position {
        word-wrap: break-word;
        max-width: 150px;
        left: 10%;
    }

    a {

        color: white;
    }
}

.my_card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(160deg, $my_8, $my_secondary);
    border-radius: 10%;

}



.my_card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(160deg, $my_8, $my_secondary);
    filter: blur(5px);
    border-radius: 10%;
}

.my_card b {
    position: absolute;
    inset: 6px;
    background: rgba(0, 0, 0, 0.1);
    z-index: 2;
    border-radius: 10%;
}

.my_card .content {
    position: absolute;
    z-index: 3;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-filtredDevs: center;
    transform: scale(0);
    transition: 0.5s;
}

.my_card:hover .content {
    transform: scale(1);
    bottom: 25px;
}</style>
