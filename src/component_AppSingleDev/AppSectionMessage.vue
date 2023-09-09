<script>
import { store } from '../data/store';
export default {
    name: "AppSectionMessage",
    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <div class="col-12 p-5">
        <form method="post">
            <div class="col-12 mx-auto fw-bold">
                <h2>Contattami</h2>
            </div>

            <div class="col-12 d-flex flex-wrap">
                <div class="my-2 col-12 col-md-4 me-auto">
                    <label for="exampleFormControlInput1" class="text-secondary form-label fw-bold">Nome</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nome"
                        v-model="this.store.newComment.name">
                </div>

                <div class="my-2 col-12 col-md-4">
                    <label for="exampleFormControlInput1" class="text-secondary form-label fw-bold">Cognome</label>
                    <input type="tetx" class="form-control" id="exampleFormControlInput1" placeholder="Cognome"
                        v-model="this.store.newComment.surname">
                </div>
            </div>

            <div class="col-12 mx-auto">

                <div class="my-2">
                    <label for="exampleFormControlInput1" class="text-secondary form-label fw-bold">Indirizzo Email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1"
                        placeholder="Inserisci indirizzo mail" v-model="this.store.newComment.email">
                </div>

            </div>

            <div class="col-12 mx-auto">
                <div class="my-2">
                    <label for="exampleFormControlTextarea1" class="text-secondary form-label fw-bold">Messaggio</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                        placeholder="Lascia un messaggio.." v-model="this.store.newComment.text"></textarea>
                </div>
            </div>

            <div class="col-2 mt-5 mx-auto">

                <button type="button" @click="store.postMessage()" class="button">
                    <span class="text">Invia</span>
                    <div class="wave"></div>
                </button>

            </div>

        </form>
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