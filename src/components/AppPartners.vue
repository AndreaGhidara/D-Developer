<script>

export default {
    name: "AppPartners",
    data() {
        return {

        }
    },
}

</script>

<template>
    <div class="w-100 bg_circle ">

        <div class="row text-center bg_orangeOpa rounded-2 p-5">

            <h4 class="text-white">
                Hanno collaborato con noi
            </h4>

            <div class="row text-center">
                <div class="col-12 py-3">
                    <img src="/logoBool.png" alt="" class="img-fluid">
                </div>
                <div class="col-2 py-3">
                    <img src="/src/assets/img_home/BDoctors.png" alt="" class="partners">
                </div>
                <div class="col-2 py-3">
                    <img src="/src/assets/img_home/BoolB&B5.png" alt="" class="partners">
                </div>
                <div class="col-2 py-3">
                    <img src="/src/assets/img_home/BoolB&B6.png" alt="" class="partners">
                </div>
                <div class="col-2 py-3">
                    <img src="/src/assets/img_home/BoolMusic.png" alt="" class="partners">
                </div>
                <div class="col-2 py-3">
                    <img src="/src/assets/img_home/DeliveBoo.png" alt="" class="partners">
                </div>
                <div class="col-2 py-3">
                    <img src="/src/assets/img_home/myprofblack.png" alt="" class="partners">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use'../style/variable.scss' as*;

.bg_orangeOpa {
    background-color: $my_new_color_3;
}

.bg_circle {
    background-image: url(../assets/img_home/cerchioAzz.png);
    background-repeat: no-repeat;
    background-size: 15vw;
    background-position: 100% 90%;
}

.partners {
    width: 100px;

}
</style>