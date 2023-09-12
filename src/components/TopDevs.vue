<script>
import { store } from '../data/store'

export default {
  name: "TopDevs",
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
  <div id="top_dev" class="container-fluid pt-md-5">
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
    </div>
    <div class="row px-2 justify-content-between">
      <!-- Cards dei top devs desktop e tablet -->
      <template v-for="item in store.ListDevPage" :key="item">

        <!-- nuova card index -->
        <div class="col-lg-3 col-sm-6 col-12 p-3 d-none d-sm-block">

          <div class="card mx-auto">

            <img v-if="item.img_path" src="{{ item.img_path }}" class="image" alt="{{item.name}}">
            <img v-else src="https://picsum.photos/300/300?random" class="image" alt="{{item.name}}">

            <div class="card-info">
              <h4> {{ item.name }} </h4>
              <h5> {{ item.surname }} </h5>
              <div>
                <div class="d-flex">
                <template v-for="voto in store.Stars" :key="voto">
                    <div v-if="this.store.average(item.valutations) >= voto">
                        <span class="fa fa-star checked text-warning"></span>
                    </div>
                    <div v-else>
                        <i class="fa-regular fa-star text-warning"></i>
                    </div>
                </template>
            </div>
              </div>
            </div>
            <button class="button mt-2">
              <router-link :to="{ name: 'single-dev', params: { id: item.id } }"
                class="text z-2 text-decoration-none">INFO</router-link>
              <div class="wave"></div>
            </button>
          </div>
        </div>
        <!-- finish cards TopDevs desktop e tablet -->

        <!-- Cards dei top devs telefono -->
        <div class="col-6 p-2 d-sm-none">

          <div class="card-client mx-auto">
            <div class="user-picture">
              <img v-if="item.img_path" src="{{ item.img_path }}" class="image" alt="{{item.name}}">
              <img v-else src="https://picsum.photos/300/300?random" class="image" alt="{{item.name}}">
            </div>
            <p class="name-client">  {{ item.name }} 
              <span>{{ item.surname }}
              </span>
            </p>
            <div>
              <div class="d-flex">
            </div>
            </div>
            <button class="button mx-auto my-1 p-1">
              <router-link :to="{ name: 'single-dev', params: { id: item.id } }"
                class="text z-2 text-decoration-none">INFO</router-link>
              <div class="wave"></div>
            </button>
          </div>
        </div>

        <!-- Fine cards dei top devs telefono -->
      </template>

    </div>
  </div>
</template>

<style lang="scss" scoped>
@use'../style/variable.scss' as*;

// Card per desktop e tablet
.card {
  max-width: 300px;
  max-height: 300px;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  // gap: 10px;
  background: linear-gradient(40deg, rgba(246, 108, 104, 1) 0%, rgba(255, 129, 108, 1) 50%, rgba(252, 176, 69, 1) 100%);
  border-radius: 10%;
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
  max-width: 90px;
  max-height: 90px;
  border-radius: 50%;
  border: 2px solid $my_10;
  margin-top: 10px;
  transition: all 0.5s ease;
}

.card-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s ease;
}

.card-info h5 {
  font-weight: 600;
  color: $my_text_dark ;
  margin-top: 5px;
  line-height: 5px;
}


.card:hover::before {
  max-width: 400px;
  max-height: 400px;
}

.card:hover .card-info {
  transform: translate(0%, +10%);
}

.card:hover .image {
  transform: scale(1.5) translate(-0%, -10%);
}

// Fine card per desktop e tablet

// Card per telefono
.card-client {
  background: linear-gradient(40deg, rgba(246, 108, 104, 1) 0%, rgba(255, 129, 108, 1) 50%, rgba(252, 176, 69, 1) 100%);
  max-width: 13rem;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 10px;
  padding-right: 10px;
  box-shadow: 0 6px 10px rgba(207, 212, 222, 1);
  border-radius: 10px;
  text-align: center;
  color: #fff;
  transition: all 0.3s ease;
}

.user-picture {
  overflow: hidden;
  object-fit: cover;
  max-width: 5rem;
  max-height: 5rem;
  border: 2px solid white;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.name-client {
  margin-top: 5px;
  font-weight: 600;
  font-size: 18px;
}

.name-client span {
  display: block;
  font-weight: 200;
}

// Fine card per telefono
</style>
