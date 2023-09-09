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
    <div class="col-md-7 col-12 py-md-5 py-2 px-5 mt-4 mt-md-0 gradient-background rounded">

        <form method="post">

            <div class="col-12 mx-auto fw-bold">
                <h2>Lascia una recensione</h2>
            </div>

            <div class="col-12 d-flex flex-wrap">
                <div class="my-2 col-12 me-auto">
                    <label for="exampleFormControlInput1" class="form-label fw-bold">Nome</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nome"
                        v-model="this.store.newReview.name">
                </div>

                <div class="my-2 col-12">
                    <label for="exampleFormControlInput1" class="form-label fw-bold">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1"
                        placeholder="Inserisci la tua email" v-model="this.store.newReview.email">
                </div>
            </div>

            <div class="col-12 mx-auto">
                <div class="my-2">
                    <label for="exampleFormControlTextarea1" class="form-label fw-bold">Scrivi
                        Recensione</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                        placeholder="Aggiungi una recensione.." v-model="this.store.newReview.review"></textarea>
                </div>
            </div>

            <div class="col-2 offset-5 my-2 mx-auto">

                <button type="button" class="btn btn-primary" @click="store.postReview()">Invia</button>

            </div>

        </form>
       

        <!--valutation index -->

        <h2>Valuta la tua esperienza</h2>
        <form>

            <select class="form-select" v-model="this.store.newValutation.valutation_id">
                <option disabled value>Vota</option>
                <template v-for="item in this.store.ListValutation">
                    <option :id="item.id" :value="item.id">{{ item.valutation_name }}</option>
                </template>


            </select>

            <button type="button" @click="store.postValutation()" class="btn btn-primary my-3">
                Invia
            </button>
        </form>


        <!-- valutation finish -->
    </div>
</template>

<style lang="scss" scoped></style>