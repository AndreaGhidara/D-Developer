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
    <div class="p-3 rounded-5 shadow bg-white text-center mt-5">

        <h4 class="fw-bold">
            Informazioni
        </h4>
        <div class="row row-cols-1 row-cols-lg-2 align-items-center justify-content-center">

            <div class="col p-0">
                <p class="m-0 text-secondary"><b>Data di nascita: </b></p>
                <p class=" fw-medium">{{ store.Dev.date_of_birth }}</p>
                <hr>
            </div>
            <div class="col p-0">
                <p class="m-0 text-secondary"><b>Num: </b></p>
                <p class=" fw-medium">{{ store.Dev.phone_number }}</p>
                <hr>
            </div>
            <div class="col p-0">
                <p class="m-0 text-secondary"><b>P.iva: </b></p>
                <p class=" fw-medium">{{ store.Dev.vat_number }}</p>
                <hr>
            </div>
            <div class="col p-0">
                <p class="m-0 text-secondary"><b>Email: </b></p>
                <p class=" fw-medium text-wrap">{{ store.Dev.email }}</p>
                <hr>
            </div>
            <div class="col p-0">
                <p class="m-0 text-secondary"><b>Indirizzo: </b></p>
                <p class=" fw-medium">{{ store.Dev.address }}</p>
                <hr>
            </div>

        </div>

        <!-- links -->
        <div class="row row-cols-1 row-cols-sm-3 align-items-center justify-content-center my-5">
            <div class="col d-flex justify-content-end justify-content-sm-start">
                <a :href="store.Dev.linkedin_link" target="_blank">
                    <button class="SocialBtnCustom">
                        <span class="svgSocialContainer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" height="1.6em" fill="white">
                                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                            </svg>
                        </span>
                        <span class="bgSocialIcon"></span>
                    </button>
                </a>
            </div>
            <div class="col d-flex justify-content-center">
                <a :href="store.Dev.cv" target="_blank">
                    <div class="btnDownloadProfile" data-tooltip="Size: 20Mb">
                        <div class="btnDownloadProfile-wrapper">
                            <div class="textBtnDownloadProfile">Download CV</div>
                            <span class="iconBtnDownloadProfile">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em"
                                    height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17">
                                    </path>
                                </svg>
                            </span>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col d-flex justify-content-end">
                <a :href="store.Dev.github_link" target="_blank">
                    <button class="SocialBtnCustom">
                        <span class="svgSocialContainer ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"
                                height="1.6em"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z" />
                            </svg>
                        </span>
                        <span class="bgSocialIcon bgSocialIconGitHub"></span>
                    </button>
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use'../style/variable.scss' as*;

.SocialBtnCustom {
    z-index: 4;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    position: relative;
    /* overflow: hidden; */
    border-radius: 7px;
    cursor: pointer;
    transition: all .3s;
    padding: 0;
}

.svgSocialContainer {
    z-index: 3;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    backdrop-filter: blur(0px);
    letter-spacing: 0.8px;
    border-radius: 7px;
    transition: all .3s;
    fill: white;
}

.bgSocialIcon {
    padding: 0 !important;
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: #0077b5;
    z-index: -1;
    border-radius: 10px;
    pointer-events: none;
    transition: all .3s;
}

.SocialBtnCustom {
    &:hover {
        .bgSocialIcon {
            transform: rotate(35deg);
            transform-origin: bottom;
        }

        .bgSocialIconGitHub {
            transform: rotate(-35deg);
            transform-origin: bottom;
        }

        .svgSocialContainer {
            background-color: rgba(156, 156, 156, 0.466);
            backdrop-filter: blur(4px);
        }
    }
}

.bgSocialIconGitHub {
    background-color: #181818;
}

/////////////////////////////////////////////////////////
/// Download BTN

.btnDownloadProfile {
    --width: 120px;
    --height: 35px;
    --tooltip-height: 35px;
    --tooltip-width: 90px;
    --gap-between-tooltip-to-button: 18px;
    --button-color: #44aaff;
    --tooltip-color: #fff;
    width: var(--width);
    height: var(--height);
    background: var(--button-color);
    position: relative;
    text-align: center;
    border-radius: 0.45em;
    font-family: "Arial";
    transition: background 0.3s;
}

.btnDownloadProfile::before {
    position: absolute;
    content: attr(data-tooltip);
    width: var(--tooltip-width);
    height: var(--tooltip-height);
    background-color: var(--tooltip-color);
    font-size: 0.9rem;
    color: #111;
    border-radius: .25em;
    line-height: var(--tooltip-height);
    bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) + 10px);
    left: calc(50% - var(--tooltip-width) / 2);
}

.btnDownloadProfile::after {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: var(--tooltip-color);
    left: calc(50% - 10px);
    bottom: calc(100% + var(--gap-between-tooltip-to-button) - 10px);
}

.btnDownloadProfile::after,
.btnDownloadProfile::before {
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s;
}

.textBtnDownloadProfile {
    display: flex;
    align-items: center;
    justify-content: center;
}

.btnDownloadProfile-wrapper,
.textBtnDownloadProfile,
.iconBtnDownloadProfile {
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    color: #fff;
}

.textBtnDownloadProfile {
    top: 0
}

.textBtnDownloadProfile,
.iconBtnDownloadProfile {
    transition: top 0.5s;
}

.iconBtnDownloadProfile {
    color: #fff;
    top: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.iconBtnDownloadProfile svg {
    width: 24px;
    height: 24px;
}

.btnDownloadProfile:hover {
    background: #feab5c;
}

.btnDownloadProfile:hover .textBtnDownloadProfile {
    top: -100%;
}

.btnDownloadProfile:hover .iconBtnDownloadProfile {
    top: 0;
}

/* .btnDownloadProfile:hover:before,.btnDownloadProfile:hover:after {
    opacity: 1;
    visibility: visible;
  } */

.btnDownloadProfile:hover:after {
    bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) - 20px);
}

.btnDownloadProfile:hover:before {
    bottom: calc(var(--height) + var(--gap-between-tooltip-to-button));
}

// i {
//     color: $my_new_color_1;
//     font-size: 2rem;
// }
</style>