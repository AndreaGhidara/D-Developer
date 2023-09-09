<script>

import { store } from '../data/store';

export default{
    name:"AppSectionLeft",
    data(){
        return{
            store
        }
    },
    beforeMount(){
        this.store.average(store.Dev.valutations);
    },
    mounted(){
       
        // this.store.getValutation();
    }
}

</script>

<template>
    

<div class="col-md-4 col-12 p-3 mb-2 rounded-5 align-self-start shadow bg-white text-center">

<!-- name surname -->
    <div class="text-center">
        <div>
            <h3>{{ store.Dev.name }} {{ store.Dev.surname }}</h3>
        </div>
    </div>
    
<!-- bio -->
    <div class="row mt-4">
        <div class="col">
            <p class="text-center">{{ store.Dev.bio }}</p>
        </div>
    </div>  

<!-- soft skill -->
    <div class="row mt-4">
        <div class="col ">
            <p > <b>Soft skill: </b>{{ store.Dev.soft_skill}}</p>
        </div>
    </div>
    
<!-- linguaggi di programmazione -->
    <div class="row mt-4">
        <div class="col">
            <div class="row">
                <h5>Skills</h5><br>
            </div>
            <div class="row">
                <div class="col d-flex justify-content-center">
                    <p class="skills rouded rounded-pill px-2 fw-semibold me-3" v-for="item in store.Dev.programming_languages">
                        {{ item.language }}
                    </p>
                </div>
            </div>
        </div>
    </div>

<!-- media voti con stars -->
    <div class="row mt-4">
        <div class="col">
            <h5>Media voti</h5>
            
            <p v-if="this.store.Tempo">
                Caricamento dei dati
            </p>
            
            <span v-for="voto in store.Stars">
                <template v-if="this.store.average(store.Dev.valutations) >= voto">
                    <i class="fa-solid fa-star"></i>
                </template>
                <template v-else>
                    <i class="fa-regular fa-star"></i>
                </template>
            </span>
        </div>
        
    </div>
        
</div>

</template>

<style lang="scss" scoped>
@use'../style/variable.scss' as*;

.skills{
    display: flex;
    color: $my_primary;
    border: 1px solid $my_primary;
    width: auto;
}
</style>