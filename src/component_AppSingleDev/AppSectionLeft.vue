<script>

import { store } from '../data/store';

export default {
    name: "AppSectionLeft",
    data() {
        return {
            store,
        }
    },
    methods: {
        getImageForLanguage(language) {
            return `/iconLanguage/${language}.png`; // Utilizza il percorso relativo a `public`
        },
    },
    beforeMount() {
        this.store.average(store.Dev.valutations);
    },
    mounted() {
        this.store.getValutation();
    }
}

</script>

<template>
    <!-- name surname -->
    <div class="w-100">
        <!-- Nome e Cognome -->
        <div>
            <h3>{{ store.Dev.name }} {{ store.Dev.surname }}</h3>
        </div>
        <!-- Bio -->
        <div>
            <p>{{ store.Dev.bio }}</p>
        </div>
        <!-- Skill -->
        <div>
            <p>
                <b>Soft skill: </b>{{ store.Dev.soft_skill }}
            </p>
        </div>

        <div>
            <h5>Skills</h5><br>
            <div>
                <div class="col d-flex justify-content-star flex-wrap z-3">
                    <template v-for="item in store.Dev.programming_languages" :key="item">

                        <img :src="getImageForLanguage(item.language)" alt="Icona del linguaggio di programmazione"
                            class="object-fit-cover m-2" width="50" height="50" />

                    </template>
                </div>
            </div>
        </div>

        <div class="">
            <h5>Media voti</h5>
            <p v-if="this.store.Tempo">
                Caricamento dei dati
            </p>
            <div class="d-flex">
                <template v-for="voto in store.Stars" :key="voto">
                    <div v-if="this.store.average(store.Dev.valutations) >= voto">
                        <span class="fa fa-star checked"></span>
                    </div>
                    <div v-else>
                        <i class="fa-regular fa-star"></i>
                    </div>
                </template>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use'../style/variable.scss' as*;

.checked {
    color: orange;
}

.skills {
    display: flex;
    color: $my_new_color_1;
    border: 1px solid $my_new_color_1;
    width: auto;
    font-weight: 800;
}
</style>