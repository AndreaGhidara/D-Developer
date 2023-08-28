<script>
import LittleSerch from './LittleSerch.vue';

export default {
    name: 'AppSearch',
    components: {
        LittleSerch,
    },
    data() {
        return {
            isSearchVisible: false,
        };
    },
    methods: {
        toggleSearch() {
            this.isSearchVisible = !this.isSearchVisible;

            if (this.isSearchVisible) {
                this.$nextTick(() => {
                    this.$refs.searchInput.focus();
                });
            }
        },
    },
};

</script>

<template>
    <div class="header">
        <!-- ... Altri elementi nell'header ... -->
        <div class="container-fluid bg-warning">
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
                        <div class="d-flex justify-content-end">
                            <button class="search-toggle bg-transparent" @click="toggleSearch">
                                <img class="icon" src="src/assets/icon/search.png" alt="">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Bottone per attivare/disattivare la ricerca -->
        <!-- <div class="d-flex justify-content-end">
            <button class="search-toggle bg-transparent" @click="toggleSearch">
                <img class="icon" src="src/assets/icon/search.png" alt="">
            </button>
        </div> -->

        <!-- Input per la ricerca -->
        <div class="w-100 h-50" :class="['search-input', { show: isSearchVisible }]">
            <!-- <input ref="searchInput" type="search"> -->
            <LittleSerch />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.search-input {
    display: none;
    /* Imposta l'input di ricerca inizialmente nascosto */
}

.search-input.show {
    display: block;
    /* Mostra l'input di ricerca quando la classe show è presente */
}

.icon {
    width: 20px;
}

.search-toggle {
    border: none;
    padding: 0.5rem;
}

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

.serchbar {
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
}</style>
