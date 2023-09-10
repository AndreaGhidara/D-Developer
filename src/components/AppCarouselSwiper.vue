<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default {
    name: 'AppCarouselSwiper',
    data() {
        return {

        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Navigation, Autoplay],
        };
    },
}
</script>

<template>
    <div class="my-5 w-100 p-0 m-0">
        <swiper :scrollbar="{
            hide: true,
        }" :modules="modules" :loop="true" class="mySwiper">
            <swiper-slide>
                <div class="containerImgCarouselSlide position-relative">
                    <img src="public/carousel-slide-1.png" alt="img">
                    <h1 class="textSlide1 ">Affidati alla nostra rete</h1>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="containerImgCarouselSlide position-relative">
                    <img src="public/carousel-slide-2.png" alt="img">
                    <h1 class="textSlide2 ">Raggiungi i tuoi obbiettivi</h1>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="containerImgCarouselSlide position-relative">
                    <img src="public/carousel-slide-3.png" alt="img">
                    <h1 class="textSlide3 ">Comodamente ovunque tu sia</h1>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<style lang="scss" scoped>
@use'../style/variable.scss' as*;

#app {
    height: 100%;
}

html,
body {
    position: relative;
    height: 100%;
}

body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
}

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

// .containerImgCarouselSlide{
//     position: relative;

//     .textSlide{
//         position: absolute;

//     }
// }

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.swiper {
    margin-left: auto;
    margin-right: auto;
}

.textSlide1{
    position: absolute;
    top: 164px;
    right: 284px;
}
.textSlide2{
    position: absolute;
    top: 183px;
    right: 352px;
}
.textSlide3{
    position: absolute;
    top: 165px;
    right: 227px;
}
</style>