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
        languageObj: Object,
    },
    methods: {
    },
    mounted() {

    },
};

</script>

<template>
    <label class="d-flex align-items-center p-1 my-1" :for='languageObj.id'>
        <input :id='languageObj.id' :value='languageObj.language' class="input" type="checkbox"
                v-model="store.serchLanguage">
        <span class="custom-checkbox"></span>
        <p class="m-0 ps-2">
            {{ languageObj.language }}
        </p>
    </label>
</template>

<style lang="scss" scoped>
/* Hide the default checkbox */
.input[type="checkbox"] {
    display: none;
}


/* Style for the custom checkbox */
.custom-checkbox {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid #333;
    border-radius: 4px;
    position: relative;
    cursor: pointer;
}

/* Style for the custom checkmark */
.custom-checkbox::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: #44aaff;;
    border-radius: 2px;
    opacity: 0;
}

/* Show the checkmark when checkbox is checked */
.input[type="checkbox"]:checked+.custom-checkbox::after {
    opacity: 1;
}
</style>
