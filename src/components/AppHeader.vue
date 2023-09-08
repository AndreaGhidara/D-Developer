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
            isSearchVisible: false,
            navLinkRouter:[
                {
                    label: "Search",
                    name:"devlist"
                },
                {
                    label:"Home",
                    name:"home"
                }
            ],
            navLinkPageHome:[
                {
                    label : "Developer",
                    link : "#top_dev"
                },
                {
                    label : "Chi siamo",
                    link : "#chi_siamo"
                },
                {
                    label : "Contatti",
                    link : "#contatti"
                },
                



            ]
        };
    },
    methods: {
        toggleSearch() {
            this.isSearchVisible = !this.isSearchVisible;

            if (this.isSearchVisible) {
                this.$nextTick(() => {
                    this.$refs.searchInput;
                });
            }
        },
    },
    mounted() {
    }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div class="containerCustom container-sm d-flex">
            <!-- LOGO SITO -->
            <a class="navbar-brand" href="#">
                <img class="logo" src="/d.png" alt="">
            </a>
            <!-- Bottone OFCanvas -->
            <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <!-- Link and OfCanvas Menu -->
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        
                        <li class="nav-item">
                            <router-link :to="{name: navLinkRouter[1].name}" class="nav-link active" aria-current="page">
                                {{ navLinkRouter[1].label }}
                            </router-link>
                        </li>
                        
                        <li v-for="item in navLinkPageHome" class="nav-item"><a :href="item.link" class="nav-link">{{ item.label }}</a></li>
                        
                    </ul>
                </div>
            </div>
            <div class="d-flex justify-content-end">
                    
                <router-link class="search-toggle btn bg-transparent" @click="toggleSearch" :to="{name: navLinkRouter[0].name}">
                <img class="icon" src="src/assets/icon/search.png" alt="">
                </router-link>
                
            </div>
        </div>
    </nav>
    <div class="serchBox w-100 h-50 gradient-background" :class="['search-input', { show: isSearchVisible }]">
        <AppSearch  @click="toggleSearch"/>
    </div>
</template>

<style lang="scss" scoped>
//Container
.containerCustom {
    width: 1500px;
    margin: 0 auto;
}

.search-input {
    display: none;
    /* Imposta l'input di ricerca inizialmente nascosto */
}

.search-input.show {
    display: block;
    /* Mostra l'input di ricerca quando la classe show è presente */
}

.icon {
    width: 1.5rem;
}

.logo {
    width: 3rem;
}

.btn:focus,
.btn:active {
    outline: none !important;
    box-shadow: none;
}
</style>