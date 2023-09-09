<script>
import { store } from '../data/store';
export default {
    name: "AppSectionRight",
    data() {
        return {
            store
        }
    }
}

</script>

<template>

    <div class="col-12 col-md-7 offset-md-1 p-3 rounded-5 shadow bg-white text-center">

        <h4 class="fw-bold">
            Informazioni
        </h4>

        <div class="row row-cols-1 row-cols-xl-3 row-cols-lg-2 ">

            <div class="col">
                <p class="me-2 text-secondary"><b>Data di nascita: </b></p>
                <p class="me-3 fw-medium">{{ store.Dev.date_of_birth }}</p>
            </div>
            <div class="col">
                <p class="me-2 text-secondary"><b>Num: </b></p>
                <p class="me-3 fw-medium">{{ store.Dev.phone_number }}</p>
            </div>
            <div class="col">
                <p class="me-2 text-secondary"><b>P.iva: </b></p>
                <p class="me-3 fw-medium">{{ store.Dev.vat_number }}</p>
            </div>

            <div class="col">
                <p class="me-2 text-secondary"><b>Indirizzo: </b></p>
                <p class="me-3 fw-medium">{{ store.Dev.address }}</p>
            </div>
            <div class="col">
                <p class="me-2 text-secondary"><b>Email: </b></p>
                <p class="me-3 fw-medium text-wrap">{{ store.Dev.email }}</p>
            </div>

        </div>

        <!-- links -->
        <div class="row row-cols-6 justify-content-center my-5">
            <div class="col">
                <a :href="store.Dev.cv" target="_blank"><i class="fa-regular fa-file-pdf"></i></a>
            </div>
            <div class="col">
                <a :href="store.Dev.linkedin_link" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            </div>
            <div class="col">
                <a :href="store.Dev.github_link" target="_blank"><i class="fa-brands fa-github"></i></a>
            </div>
        </div>
    </div>


</template>

<style lang="scss" scoped>
@use'../style/variable.scss' as*;

i{
    color: $my_new_color_1;
    font-size: 2rem;
}

</style>