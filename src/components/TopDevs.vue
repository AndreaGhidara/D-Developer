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
                <div class="col-12 text-center pb-5">
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
                    <!-- fine in caso di errore -->
                </div>
            </div>
            <div class="row row-cols-2 row-cols-md-4 g4 pb-4">
                <!-- cards dei top devs -->
                <div v-for="item in store.ListDevPage" class="col">

                    <!-- nuova card index -->

                    <div class="card">
                        
                        <img v-if="item.img_path" src="{{ item.img_path }}" class="image" alt="{{item.name}}">
                        <img v-else src="https://picsum.photos/300/300?random" class="image" alt="{{item.name}}">

                        <div class="card-info">
                            <h4> {{item.name}} </h4>
                            <h5> {{ item.surname }} </h5>
                        </div>
                        
                        <router-link :to="{name:'single-dev', params: {id: item.id}}" class="button">Info</router-link>
                    </div>

                    <!-- finish nuova card -->

                </div>         
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use'../style/variable.scss' as*;


.card {
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
    background: linear-gradient(40deg, rgba(246,108,104,1) 0%, rgba(255,129,108,1) 50%, rgba(252,176,69,1) 100%);
    border-radius: 50%;
    position: relative;
    overflow: hidden;
  }
  
  .card::before {
    content: "";
    width: 350px;
    height: 150px;
    position: absolute;
    top: 0;
    transition: all 0.5s ease;
  }
  
  .card * {
    z-index: 1;
  }
  
  .image {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 2px solid $my_10;
    margin-top: 30px;
    transition: all 0.5s ease;
  }
  
  .card-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    transition: all 0.5s ease;
  }
  
  .card-info h4 {
    font-weight: 600;
    font-size: 24px;
    color: $my_text_dark ;
    margin-top: 15px;
    line-height: 5px;
  }
  
  .card-info h5 {
    color: rgba(0, 0, 0, 0.5);
  }
  
  .button {
    text-decoration: none;
    background-color: $my_primary;
    color: $my_10;
    padding: 5px 20px;
    border-radius: 5px;
    border: 1px solid $my_10;
    transition: all 0.5s ease;
    margin-top: 10px
  }
  
  .card:hover::before {
    width: 400px;
    height: 400px;
  }
  
  .card:hover .card-info {
    transform: translate(0%,+10%);
  }
  
  .card:hover .image {
    transform: scale(1.5) translate(-0%,-10%);
  }
  
  .button:hover {
    background-color: $my_new_color_2;
    transform: scale(1.1);
  }

</style>
