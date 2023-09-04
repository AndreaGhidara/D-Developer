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
    <div>
        <form class="w-100">
            <div class="row m-0">
                <div class="col-12 p-0">
                    <h4 class="ps-4">Linguaggi:</h4>
                </div>
            </div>
            <div class="row m-0 mx-3 rounded-2">
                <template v-for="item in store.ListLanguages" :key="item">
                    <div class="col-6 col-md-3">
                        <LittleCheck :languageObj="item" />
                    </div>
                </template>
            </div>
            <div class="row m-0">
                <div class="col-12 col-lg-6 p-3">
                    <div class="p-3 rounded-2">
                        <LittleRadio />
                    </div>
                </div>
                <div class="col-12 col-lg-6 d-flex justify-content-center align-items-center p-3">
                    <div class="p-3 bg-black rounded-2">
                        <LittleStars />
                    </div>
                </div>
            </div>
            <div class="row pb-3">
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
