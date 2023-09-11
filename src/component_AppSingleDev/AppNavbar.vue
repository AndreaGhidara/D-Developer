<script>

export default {
    name: 'AppNavbar',
    components: {


    },
    data() {
        return {
            isSearchVisible: false,
            navLinkRouter: [
                {
                    label: "Search",
                    name: "devlist"
                },
            ],
            navLinkPageHome: [
                {
                    label: "Developer",
                    page:"home",
                    link: "#top_dev"
                },
                {
                    label: "Chi siamo",
                    page:"home",
                    link: "#chi_siamo"
                },
                {
                    label: "Contatti",
                    page:"home",
                    link: "#contatti"
                },
            ]
        };
    },
    beforeMounted() {
    },
    mounted() {

    },
};

</script>
    
<template>
    <nav class="mask text-black">
        <img class="logo" src="/src/assets/duckLogoGoldpng.png" alt="img">
        <router-link to="/home">
            D-Developer
        </router-link>
        <ul class="list">
            <template v-for="item in navLinkPageHome" :key="item">
                <li>
                    <!-- <router-link :to="{ name: item.page, hash: item.link }">{{item.label}}</router-link> -->

                    <a :href="item.link" class="nav-link">{{ item.label }}</a>
                </li>
            </template>
            <li>
                <a href="http://127.0.0.1:8000/register">
                    Registrazione
                </a>
            </li>
        </ul>
        <button class="search">
            <router-link to="/devlist">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                    viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
            </router-link>
        </button>
    </nav>
</template>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
}

.logo {
    width: 50px;
    height: 50px;
    z-index: 1000;
}

nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 16px 20px 30px 20px;
    display: flex;
    align-items: center;
    transition: 0.3s ease-out;
    backdrop-filter: blur(8px) brightness(1.2);
    -webkit-backdrop-filter: blur(8px) brightness(1.2);
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 16px;
    z-index: 999;

    &.mask {
        top: 0px;
        mask-image: linear-gradient(black 70%, transparent);
        -webkit-mask-image: linear-gradient(black 70%, transparent);
    }

    &.mask-pattern {
        top: 300px;
        mask-image: url("data:image/svg+xml, %3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12.21 10.57%27%3E%3Cpath fill=%27%23ffffff%27 d=%27M6.1 0h6.11L9.16 5.29 6.1 10.57 3.05 5.29 0 0h6.1z%27/%3E%3C/svg%3E"), linear-gradient(black calc(100% - 30px), transparent calc(100% - 30px));
        mask-size: auto 30px, 100% 100%;
        mask-repeat: repeat-x, no-repeat;
        mask-position: left bottom, top left;

        -webkit-mask-image: url("data:image/svg+xml, %3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12.21 10.57%27%3E%3Cpath fill=%27%23ffffff%27 d=%27M6.1 0h6.11L9.16 5.29 6.1 10.57 3.05 5.29 0 0h6.1z%27/%3E%3C/svg%3E"), linear-gradient(black calc(100% - 30px), transparent calc(100% - 30px));
        -webkit-mask-size: auto 30px, 100% 100%;
        -webkit-mask-repeat: repeat-x, no-repeat;
        -webkit-mask-position: left bottom, top left;
    }

    @media (min-width: 640px) {
        padding: 16px 50px 30px 50px;
    }
}

nav.is-hidden {
    transform: translateY(-100%);
}

a {
    color: inherit;
    text-decoration: none;

    &:hover,
    &:focus {
        text-decoration: underline;
    }
}

.list {
    list-style-type: none;
    margin-left: auto;
    display: none;

    @media (min-width: 640px) {
        display: flex;
    }

    li {
        margin-left: 20px;
    }
}

.search {
    display: inline-block;
    padding: 0;
    font-size: 0;
    background: none;
    border: none;
    margin-left: auto;
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, .5));

    @media (min-width: 640px) {
        margin-left: 20px;
    }
}

.menu {
    display: inline-block;
    padding: 0;
    font-size: 0;
    background: none;
    border: none;
    margin-left: 20px;
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, .5));

    &::before {
        content: url("data:image/svg+xml, %3Csvg%20xmlns=%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox=%270%200%2024.8%2018.92%27%20width=%2724.8%27%20height=%2718.92%27%3E%3Cpath%20d=%27M23.8,9.46H1m22.8,8.46H1M23.8,1H1%27%20fill=%27none%27%20stroke=%27%23fff%27%20stroke-linecap=%27round%27%20stroke-width=%272%27%2F%3E%3C%2Fsvg%3E")
    }

    @media (min-width: 640px) {
        display: none;
    }
}
</style>
