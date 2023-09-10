<script>
import { store } from '../data/store'

export default {
    name: 'LittleRadio',
    components: {

    },
    data() {
        return {
            store,
        };
    },
    methods: {
    },
};

</script>

<template>
    <div>
        <!-- <div class="radio-buttons">
            <label class="radio-button">
                <input type="radio" name="optionReview" value="<10" v-model="store.serchAverage">
                <div class="radio-circle"></div>
                <span class="radio-label">&#60;10</span>
            </label>
            <label class="radio-button">
                <input type="radio" name="optionReview" value="10>50" v-model="store.serchAverage">
                <div class="radio-circle"></div>
                <span class="radio-label">10 - 50 </span>
            </label>
            <label class="radio-button">
                <input type="radio" name="optionReview" value=">50" v-model="store.serchAverage">
                <div class="radio-circle"></div>
                <span class="radio-label">&#62;50 </span>
            </label>
        </div> -->
        <div class="radio-inputs coverGlass">
            <label class="radio">
                <input type="radio" name="radio" checked="">
                <span class="name"> &#60; 10</span>
            </label>
            <label class="radio">
                <input type="radio" name="radio">
                <span class="name">10 | 50</span>
            </label>

            <label class="radio">
                <input type="radio" name="radio">
                <span class="name"> &#62; 50 </span>
            </label>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.radio-inputs {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    border-radius: 0.5rem;
    box-sizing: border-box;
    box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
    padding: 0.25rem;
    width: 200px;
    font-size: 14px;
}

.radio-inputs .radio {
    flex: 1 1 auto;
    text-align: center;
}

.radio-inputs .radio input {
    display: none;
}

.radio-inputs .radio .name {
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    border: none;
    padding: .5rem 0;
    color: rgba(51, 65, 85, 1);
    transition: all .15s ease-in-out;
}

.radio-inputs .radio input:checked+.name {
    background-color: #fff;
    font-weight: 600;
}
</style>
