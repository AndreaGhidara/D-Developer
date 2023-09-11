<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/grid';
import 'swiper/css/pagination';
// import required modules
import { Grid, Pagination } from 'swiper/modules';

export default {
    name: "AppCarosel",
    props: {
        array: Array,
    },
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
            modules: [Grid, Pagination],
        };
    },
}

</script>

<template>
    <div class="containerSliderSwiper">
        <swiper :slidesPerView="1" :spaceBetween="10" :pagination="{
            clickable: true,
        }" :breakpoints="{
    '640': {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    '768': {
        slidesPerView: 4,
        spaceBetween: 40,
    },
    '1024': {
        slidesPerView: 5,
        spaceBetween: 50,
    },
}" :modules="modules" class="mySwiper">
            <template v-for="(reviews, c) in array" :key="reviews">
                <swiper-slide>
                    <div>
                        <h6>{{ reviews.name }}</h6>
                        <small>{{ reviews.email }}</small>
                        <p class="">{{ reviews.review }}</p>
                    </div>
                </swiper-slide>
            </template>
        </swiper>
    </div>
</template>

<style lang="scss" scoped>
.containerSliderSwiper {
    position: relative;
    height: 35rem;
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
</style>