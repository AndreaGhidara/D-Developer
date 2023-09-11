<script>
import { store } from '../data/store';
export default {
    name: "AppReviewValutation",
    data() {
        return {
            store
        }
    },
    mounted() {
        this.store.getValutation();
    }
}

</script>

<template>
<div class="row">
    <div class="col-12 py-2 px-5 mt-4">

        <form method="post">

            <div class="col-12 mx-auto fw-bold">
                <h2>Lascia una recensione</h2>
            </div>

            <div class="col-12 d-flex flex-wrap">
                <div class="my-2 col-12 me-auto">
                    <label for="exampleFormControlInput1" class="text-secondary form-label fw-bold">Nome</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nome"
                        v-model="this.store.newReview.name">
                </div>

                <div class="my-2 col-12">
                    <label for="exampleFormControlInput1" class="text-secondary form-label fw-bold">Indirizo Email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1"
                        placeholder="Inserisci la tua email" v-model="this.store.newReview.email">
                </div>
            </div>

            <div class="col-12 mx-auto">
                <div class="my-2">
                    <label for="exampleFormControlTextarea1" class="text-secondary form-label fw-bold">Scrivi
                        Recensione</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                        placeholder="Aggiungi una recensione.." v-model="this.store.newReview.review"></textarea>
                </div>
            </div>

            <div class="col-2 offset-5 my-2 mx-auto">

                <button type="button" class="button" @click="store.postReview()">
                    <span class="text">Invia</span>
                    <div class="wave"></div>
                </button>

            </div>

        </form>

        <!--valutation index -->

        <h2>Valuta la tua esperienza</h2>
        <form>

            <select class="form-select" v-model="this.store.newValutation.valutation_id">
                <option disabled value>Vota</option>
                <template v-for="item in this.store.ListValutation" :key="item">
                    <option :id="item.id" :value="item.id">{{ item.valutation_name }}</option>
                </template>
            </select>

            <div class="col-2 offset-5 my-2 mx-auto">
                <button type="button" @click="store.postValutation()" class="button my-3">
                    <span class="text">Invia</span>
                    <div class="wave"></div>
                </button>
            </div>

        </form>


        <!-- valutation finish -->
    </div>
</div>
</template>

<style lang="scss" scoped>

    input,textarea,select,option{
        border: none;
        border-bottom: 1px solid #FCB457;
        border-radius: 0;
        outline: none;
        box-shadow: none!important
    }

    h2{
        color: #40B4FF;
    }

</style>