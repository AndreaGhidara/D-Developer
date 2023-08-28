<script>

import axios from 'axios';
import { store } from '../data/store';
import AppSearch from '../customComponentt/AppSearch.vue';

export default {
    name: "AppHeader",
    components: {
        AppSearch,
    },
    data() {
        return {
            store
        }
    },
    methods: {
    },
    mounted() {
    }
}
</script>

<template>
    <!-- <div class="container-fluid bg-warning">
        <div class="container text-center">
            <div class="row d-flex align-items-center">
                <div class="col">
                    <img class="logo" src="../../public/logo.png" alt="">
                </div>
                <div class="col d-flex justify-content-start">
                    home
                </div>
                <div class="col d-flex justify-content-end">
                    <div class="mx-2">
                        <a href="">
                            <img class="menuIcon" src="src/assets/icon/menu.png" alt="">
                        </a>
                    </div>
                    <div>
                        <div class="dropdown">
                                <img class="icon" src="src/assets/icon/search.png" alt="">
                            <ul class="dropdown-menu w-1">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    
    <AppSearch />
</template>

<style lang="scss" scoped>
.header {
    background-color: green;
}

.logo {
    width: 10rem;
}

.menuIcon {
    width: 1rem;
}

.icon {
    width: 1rem;
}

.serchbar{
    height: 2rem;
}

.container-input {
    position: relative;
}

.input {
    width: 150px;
    padding: 10px 0px 10px 40px;
    border-radius: 9999px;
    border: solid 1px #333;
    transition: all .2s ease-in-out;
    outline: none;
    opacity: 0.8;
}

.container-input svg {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translate(0, -50%);
}

.input:focus {
    opacity: 1;
    width: 250px;
}
</style>
