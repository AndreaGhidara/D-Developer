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
        <h1>Review:</h1>
        <div class="radio-buttons">
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
        </div>
    </div>
</template>

<style lang="scss" scoped>
.radio-buttons {
    display: flex;
    flex-direction: column;
    color: white;
}

.radio-button {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
}

.radio-button input[type="radio"] {
    display: none;
}

.radio-circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #aaa;
    position: relative;
    margin-right: 10px;
}

.radio-circle::before {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #ddd;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: all 0.2s ease-in-out;
}

.radio-button input[type="radio"]:checked+.radio-circle::before {
    transform: translate(-50%, -50%) scale(1);
}

.radio-button:nth-of-type(1) input[type="radio"]:checked+.radio-circle::before {
    background-color: #ff6600;
}

.radio-button:nth-of-type(2) input[type="radio"]:checked+.radio-circle::before {
    background-color: #ffffff;
}

.radio-button:nth-of-type(3) input[type="radio"]:checked+.radio-circle::before {
    background-color: #26be00;
}

.radio-label {
    font-size: 16px;
    font-weight: bold;
}

.radio-button:hover .radio-circle {
    border-color: #555;
}

.radio-button:hover input[type="radio"]:checked+.radio-circle::before {
    background-color: #555;
}
</style>
