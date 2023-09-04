<script>
import { store } from '../data/store'

export default {
    name:'LittleButton',
    components: {

    },
    data() {
        return {
            store,
        }
    },
    props:{
    text: String,
    },
    methods: {

    },
    mounted() {

    },
}
</script>

<template>
    <div>
        <div @click="store.serchAdvanced()" class="btn">
            {{text}}
        </div>
        <!-- <div @click="store.dati(store.serchLanguage,store.serchAverage,store.serchStars)" class="btn">
            {{text}}
        </div> -->
    </div>
</template>

<style lang="scss" scoped>
.btn {
    outline: none;
    display: inline-block;
    border: 1px solid #fff;
    padding: .8rem 2rem;
    border-radius: 5px;
    background: transparent;
    color: #fff;
    font-size: 1rem;
    transition: .3s;
    cursor: pointer;
    position: relative;
}

.btn::before {
    content: '';
    position: absolute;
    left: 5px;
    top: 5px;
    border-top: 2px solid #fff;
    border-left: 2px solid #fff;
    width: 0px;
    height: 0px;
    opacity: 0;
    transition: .3s;
}

.btn::after {
    content: '';
    position: absolute;
    right: 5px;
    bottom: 5px;
    border-bottom: 2px solid #fff;
    border-right: 2px solid #fff;
    width: 0px;
    height: 0px;
    opacity: 0;
    transition: .3s;
}

.btn:hover {
    box-shadow: 4px 4px 10px rgb(184, 184, 184);
    transform: translateY(-5px);
}

.btn:hover::after,
.btn:hover::before {
    height: 20px;
    width: 20px;
    opacity: 1;
}
</style>
