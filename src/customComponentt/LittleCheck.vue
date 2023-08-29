<script>

export default {
    name: 'LittleCheck',
    components: {

    },
    data() {
        return {

        };
    },
    props:{
    label: String,
    },
    methods: {
    },
};

</script>

<template>
    <div class="checkbox-wrapper">
        <input id="check1-61" class="check" type="checkbox">
        <label class="label" for="check1-61">
            <svg viewBox="0 0 95 95" height="45" width="45">
                <rect fill="none" stroke="black" height="50" width="50" y="20" x="30"></rect>
                <g transform="translate(0,-952.36222)">
                    <path class="path1" fill="none" stroke-width="3" stroke="black"
                        d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4"></path>
                </g>
            </svg>
            <span>{{ label }}</span>
        </label>
    </div>
</template>

<style lang="scss" scoped>
.checkbox-wrapper input[type="checkbox"] {
    visibility: hidden;
    display: none;
}

.checkbox-wrapper *,
.checkbox-wrapper ::after,
.checkbox-wrapper ::before {
    box-sizing: border-box;
}

.checkbox-wrapper {
    position: relative;
    display: block;
    overflow: hidden;
}

.checkbox-wrapper .check {
    width: 50px;
    height: 50px;
    position: absolute;
    opacity: 0;
}

.checkbox-wrapper .label svg {
    vertical-align: middle;
}

.checkbox-wrapper .path1 {
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
    transition: .5s stroke-dashoffset;
    opacity: 0;
}

.checkbox-wrapper .check:checked+label svg g path {
    stroke-dashoffset: 0;
    opacity: 1;
}
</style>
