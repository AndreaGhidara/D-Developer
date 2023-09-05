<script>
import { store } from '../data/store'

export default {
    name: 'LittleCheck',
    components: {

    },
    data() {
        return {
            store
        };
    },
    props: {
        user: Object,
    },
    methods: {
        getLength() { }
    },
    mounted() {
        store.getLanguages();
    },
};

</script>

<template>
    <div class="card">
        <b class="text-white">
            <div>
                <img class="img-fluid object-fit-cover" src="public/img_home/img_1.png" alt="">
            </div>
            <div class="name">
                {{ user.name }}
            </div>
            <ul class="languages">
                <tamplate v-for="language in user.programming_languages" :key="language">
                    <li>
                        {{ language.language }}
                    </li>
                </tamplate>
            </ul>
            <div class="info flex-column">
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <p class="m-0">review</p>
                    <span class="review">{{ user.review.length }}</span>
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <p class="m-0">stars</p>
                    <span class="stars">{{ store.calculateAverage(user.valutations) }}</span>
                </div>
            </div>
        </b>
        <div class="content">
            <ul class="sci">
                <li class="me-5">
                    <router-link :to="{ name: 'single-dev', params: { id: user.id } }">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                            viewBox="0 0 192 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z" />
                        </svg>
                    </router-link>
                </li>
                <li>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                            viewBox="0 0 496 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <svg class="fa-brands fa-git-hub" width="24" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512">
                            <path
                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                            </path>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
b {
    width: 100px;
    height: 100px;

    img {
        width: 100px;
        height: 100px;
    }
}

.languages {
    width: 200px;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;


    li {
        background-color: black;
        border-radius: 20px;
        font-size: 10px;
        padding: 0 5px;
        margin: 2px 2px;
    }
}

.card {
    position: relative;
    width: 190px;
    height: 254px;
    background: #f00;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    .info {
        display: flex;
        justify-content: center;
        background-color: #dca13cc0;
        border-radius: 5px;
        width: 60px;
        position: absolute;
        top: 0;
        right: -71px;
    }
}

.card:hover {
    -webkit-box-shadow: 1px 3px 34px 0px #000000;
    -moz-box-shadow: 1px 3px 34px 0px #000000;
    -o-box-shadow: 1px 3px 34px 0px #000000;
    box-shadow: 1px 3px 34px 0px #000000;
}

.card::after:hover {
    filter: blur(20px);
}

.card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(315deg, #f49c03, #ffc400);
    border-radius: 10px;
}

.card::after {
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(315deg, #f49c03, #ffc400);
    filter: blur(10px);
    border-radius: 10px;
}

.card b {
    position: absolute;
    inset: 5px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2;
    border-radius: 10px;
}

.card img {
    z-index: 3;
    scale: 0.8;
    transition: 0.5s;
    border-radius: 10px;
}

.card:hover img {
    scale: 0.9;
    opacity: 0.9;
}

.card .content {
    position: absolute;
    z-index: 3;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: scale(0);
    transition: 0.5s;
    border-radius: 50px;
}

.card:hover .content {
    transform: scale(1);
    bottom: 0;
}

.content .title {
    position: relative;
    color: #fff;
    font-weight: 500;
    line-height: 1em;
    font-size: 1em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-align: center;

}

.content .title span {
    font-weight: 300;
    font-size: 0.70em;
}

.content .sci {
    position: relative;
    right: 15px;
    bottom: -8px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 5px;
}

.sci li {
    list-style: none;
}

.sci li .fa-brands {
    width: 14px;
}

.sci li a {
    position: relative;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.5);
    background: rgba(0, 0, 0, 0.2);
    fill: currentColor;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    transition: 0.5s;
}

.sci li a:hover {
    fill: currentColor;
    color: rgba(255, 255, 255, 1);
}
</style>
