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
        <swiper :initialSlide='5' :speed='300'  :spaceBetween="30" :centeredSlides="true" :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
        }" :pagination="{
    clickable: true,
}" :navigation="true" :modules="modules" class="mySwiper">
            <swiper-slide >
                <div class="">
                    <img src="src/assets/img_home/carouselSlide-1.png" alt="img">
                </div>
            </swiper-slide>
            <swiper-slide>
                <img src="src/assets/img_home/carouselSlide-2.png" alt="img">
            </swiper-slide>
            <swiper-slide>
                <img src="src/assets/img_home/carouselSlide-3.png" alt="img">
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
</style>