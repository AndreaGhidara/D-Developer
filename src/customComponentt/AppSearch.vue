<script>
import { store } from '../data/store'

import LittleSerch from './LittleSerch.vue';
import LittleCheck from './LittleCheck.vue';
import LittleButton from './LittleButton.vue'
import LittleRadio from './LittleRadio.vue';
import LittleStars from './LittleStars.vue';


export default {
    name: 'AppSearch',
    components: {
        LittleSerch,
        LittleCheck,
        LittleButton,
        LittleRadio,
        LittleStars,

    },
    data() {
        return {
            store,
        };
    },
    beforeMounted() {
    },
    mounted() {
        store.getLanguages();
        store.getDevs();
        store.serchAdvanced()
    },
};

</script>
    
<template>
    <div class="gradient-background container p-0 rounded-2">
        <form class="w-100 p-3">
            <div class="row d-flex justify-content-start m-0 py-2">
                <div class="d-inline-flex p-0">
                    <h4 class="p-2 coverGlass">Linguaggi:</h4>
                </div>
            </div>
            <div class="row m-0 coverGlass rounded-2">
                <template v-for="item in store.ListLanguages" :key="item">
                    <div class="col-12 col-sm-6 col-md-3 d-flex justify-content-start">
                        <LittleCheck :languageObj="item" />
                    </div>
                </template>
            </div>
            <div class="row m-0">
                <div class="col-12 col-md-6 py-3 px-0">
                    <div class="text-start ">
                        <p class="d-inline-flex coverGlass p-2">Recensioni</p>
                    </div>
                    <div class="rounded-2">
                        <LittleRadio />
                    </div>
                </div>
                <div class="col-12 col-md-6 d-flex flex-column align-items-end justify-content-between p-0 py-3">
                    <p class="coverGlass p-2 m-0">
                        Valutazioni
                    </p>
                    <div class="p-2 mt-3 coverGlass rounded-2 d-inline-flex ">
                        <LittleStars />
                    </div>
                </div>
            </div>
            <div class="row m-0 pb-3">
                <div class="col d-flex justify-content-center mt-5">
                    <LittleButton text='Search' />
                </div>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>

.radio-buttons {
    display: flex;
    flex-direction: column;
    color: white;
}

.radio-button {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
}

.radio-button input[type="radio"] {
    display: none;
}

.radio-circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #aaa;
    position: relative;
    margin-right: 10px;
}

.radio-circle::before {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #ddd;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: all 0.2s ease-in-out;
}

.radio-button input[type="radio"]:checked+.radio-circle::before {
    transform: translate(-50%, -50%) scale(1);
}

.radio-button:nth-of-type(1) input[type="radio"]:checked+.radio-circle::before {
    background-color: #ff6600;
}

.radio-button:nth-of-type(2) input[type="radio"]:checked+.radio-circle::before {
    background-color: #ffffff;
}

.radio-button:nth-of-type(3) input[type="radio"]:checked+.radio-circle::before {
    background-color: #26be00;
}

.radio-label {
    font-size: 16px;
    font-weight: bold;
}

.radio-button:hover .radio-circle {
    border-color: #555;
}

.radio-button:hover input[type="radio"]:checked+.radio-circle::before {
    background-color: #555;
}
</style>
