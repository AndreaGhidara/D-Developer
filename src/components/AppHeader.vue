<script>

import axios from 'axios';
import { store } from '../data/store';
import AppSearch from '../customComponentt/AppSearch.vue';
import AppNavbar from '../component_AppSingleDev/AppNavbar.vue';

export default {
    name: "AppHeader",
    components: {
        AppSearch,
        AppNavbar,
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
    <AppNavbar />
</template>

<style lang="scss" scoped>
//Container

</style>