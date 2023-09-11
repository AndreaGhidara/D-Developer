<script>

import { store } from '../data/store';

export default {
    name: "AppJumbo",
    data() {
        return {
            store,
        }
    }
}


</script>

<template>
    <!-- jumbo -->
    <div class="w-100 m-0 bg-warning">
        <div class="bgProfile">

            <template v-if="store.Dev.bg_dev">
                <img class="coverProfile img-fluid" :src="this.store.imgApi + store.Dev.bg_dev"
                    alt="{{ store.Dev.name }},{{ store.Dev.surname }}">
            </template>
            <template v-else>
                <img class="coverProfile img-fluid" src="https://picsum.photos/1200/720?random"
                    alt="{{ store.Dev.name }},{{ store.Dev.surname }}">
            </template>
            <div class="imgProfile rounded-2">
                <img v-if="store.Dev.img_path" :src="this.store.imgApi + store.Dev.img_path" class=""
                    alt="{{ store.Dev.name }},{{ store.Dev.surname }}">

                <img v-else src="https://picsum.photos/300/300?random" class=""
                    alt="{{ store.Dev.name }},{{ store.Dev.surname }}">

            </div>
        </div>
        <!-- <div class="bg-warning w-100">
            <div class="imgProfileContainer">
                <img v-if="store.Dev.bg_dev" :src="this.store.imgApi + store.Dev.bg_dev" class="img-fluid my_object "
                    alt="{{ store.Dev.name }},{{ store.Dev.surname }}">

                <img v-else src="https://picsum.photos/1200/720?random" class="img-fluid"
                    alt="{{ store.Dev.name }},{{ store.Dev.surname }}">
            </div>
        </div> -->

        <!-- <div class=" my_Size">
            <div class="">

            <img v-if="store.Dev.bg_dev" :src="this.store.imgApi + store.Dev.bg_dev" class="img-fluid my_object "
                alt="{{ store.Dev.name }},{{ store.Dev.surname }}">

            <img v-else src="https://picsum.photos/1200/720?random" class="img-fluid"
                alt="{{ store.Dev.name }},{{ store.Dev.surname }}">

            </div>
            <div class="col-4 my_Size">

            <img v-if="store.Dev.img_path" :src="this.store.imgApi + store.Dev.img_path"
                class="rounded-circe my_ratio my_object img-fluid border rounded-circle border-2 border-light"
                alt="{{ store.Dev.name }},{{ store.Dev.surname }}">

            <img v-else src="https://picsum.photos/300/300?random"
                class="imgProfile rounded-circe my_ratio my_object img-fluid border rounded-circle border-2 border-light"
                alt="{{ store.Dev.name }},{{ store.Dev.surname }}">

        </div> -->
        <!-- img user -->



        <!-- bg user -->

        <!-- <div class="col-12 my_height p-0">

            <img v-if="store.Dev.bg_dev" :src="this.store.imgApi + store.Dev.bg_dev" class="img-fluid my_object "
                alt="{{ store.Dev.name }},{{ store.Dev.surname }}">

            <img v-else src="https://picsum.photos/1200/720?random" class="img-fluid"
                alt="{{ store.Dev.name }},{{ store.Dev.surname }}">

            <div class="col-4 my_Size">

                <img v-if="store.Dev.img_path" :src="this.store.imgApi + store.Dev.img_path"
                    class="rounded-circe my_ratio my_object img-fluid border rounded-circle border-2 border-light"
                    alt="{{ store.Dev.name }},{{ store.Dev.surname }}">

                <img v-else src="https://picsum.photos/300/300?random"
                    class="imgProfile rounded-circe my_ratio my_object img-fluid border rounded-circle border-2 border-light"
                    alt="{{ store.Dev.name }},{{ store.Dev.surname }}">

            </div>
        </div> -->

    </div>
</template>

<style lang="scss" scoped>
@use'../style/variable.scss' as*;

.bgProfile {
    position: relative;
    width: 100%;
    max-height: 10rem;
    img{
        object-fit: cover;
    }

    .coverProfile {
        width: 100%;
        height: 10rem;
    }

    .imgProfile {
        img {
            width: 8rem;
            height: 8rem;
            position: absolute;
            left: 50%;
            top: 100%;
            transform: translate(-50%, -50%);
            object-fit: cover;
            border-radius: 1rem;
        }
    }

}


// .imgProfile {
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
//     max-height: 300px;
// }

// .my_Size {
//     max-width: 250px;
//     max-height: 250px;
// }


// .my_ratio {
//     aspect-ratio: 1;

// }

// .my_object {
//     object-fit: cover;
// }

// .my_height {
//     max-height: 400px;

//     img {
//         width: 100%;
//         max-height: 100%;
//         // object-fit: cover;
//     }
// }
</style>