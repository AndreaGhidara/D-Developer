<script>

export default {
    name: "AppCarosel",
    props: {
        array: Array,
    },
    data() {
        return {
            
        }
    }
}

</script>

<template>
    <div class="container p-5">
        <h4>Recensioni</h4>
        <div class="row my_overflow_x flex-nowrap">
            <template v-for="(reviews, c) in array">
                <div class="col-md-3 col-12 p-5 mx-1 gradient-background h-550 text-center rounded my_overflow_y">
                    <h6>{{ reviews.name }}</h6>
                    <small>{{ reviews.email }}</small>
                    <p class="">{{ reviews.review }}</p>
                </div>
            </template>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.my_overflow_x {
    overflow-x: auto;
    overflow-y: hidden;
}

.my_overflow_y {
    overflow-y: auto;
}


.h-550 {
    height: 300px;
}
</style>