<script>
import { store } from '../data/store'

export default {
    name:"TopDevs",
    components: {
        
    },
    data() {
        return {
            store,
        }
    },
    methods: {

    },
    mounted() {
        store.getDevsPage(1);
    },
}
</script>

<template>

<div id="top_dev" class="container-fluid pt-5">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center pb-5 text-white">
                    <h1>I nostri professionisti in evidenza</h1>

                    <!-- nel caso di errore -->
                    <section>
                        <div class="col-10 mx-auto">

                            <!--si vede per mezzo secondo durante il collegamento dei dati -->
                            <h3 v-if="store.Loading">Caricamento in corso dei dati</h3>

                            <!-- nel caso ci siano errori -->
                            <h3 v-if="store.LoadingError" class="text-danger"> {{ store.LoadingError }} </h3>

                        </div>
                    </section>
                </div>
            </div>
            <div class="row row-cols-2 row-cols-md-4 g4">
                <!-- cards dei top devs -->
                <div v-for="item in store.ListDevPage" class="col">
                    <div class="bg-transparent border-0 text-center">
                        <!-- immagine profilo -->
                        <div class="flip">
                            <div class="front">
                                <img v-if="item.img_path" src="{{ item.img_path }}" class="card-img-top" alt="...">
                                <img v-else src="https://picsum.photos/300/300?random" class="img-fluid rounded-circle border border-5" alt="{{item.name}}">
                            </div>
                            <div class="back rounded-circle border border-5 text-center py-5 px-3">
                                <h5>{{item.name}} {{ item.surname }}</h5>
                                <p class="text-truncate">{{item.bio}}</p>
                            </div>
                        </div>
                        <div class="py-3">
                            <button class="button mx-auto">
                                <span ><router-link :to="{name:'single-dev', params: {id: item.id}}" class="text text-decoration-none">Visualizza</router-link></span>
                                <div class="wave"></div>
                            </button>  
                        </div>
                    </div>
                </div>         
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use'../style/variable.scss' as*;
.orange {
    background-color: $my_primary;
}
.flip {
    position: relative;
    >.front,
    >.back {
        display: block;
        transition-timing-function: cubic-bezier(.175, .885, .32, 1.275);
        transition-duration: .5s;
        transition-property: transform, opacity;
    }
    >.front {
        transform: rotateY(0deg);
    }
    >.back {
        position: absolute;
        opacity: 0;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        transform: rotateY(-180deg);
    }
    &:hover {
        >.front {
            transform: rotateY(180deg);
        }
        >.back {
            opacity: 1;
            transform: rotateY(0deg);
        }
    }
}

.flip {
    position: relative;
    display: inline-block;
    >.front,
    >.back {
      display: block;
      color: white;
      background-size: cover!important;
      background-position: center!important;
      background: $my_primary;
      border-radius: 50%;
    }
}

</style>