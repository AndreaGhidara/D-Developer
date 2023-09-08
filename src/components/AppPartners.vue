<script>

export default{
    name:"AppPartners",
    data(){

    }
}

</script>

<template>
<div class="container py-4 bg_circle mb-3">

    <div class="row">
        
        <div class="col-md-8 col-12 m-auto text-center bg_orangeOpa p-5">
            
            <h4>Hanno collaborato con noi</h4>
            
            <div class="row text-center">
                <div class="col-md-6 col-12 py-3">
                    <img src="/logoBool.png" alt="" class="img-fluid">
                </div>
                <div class="col-md-6 col-12 py-3">
                    <p>loghi altri progetti</p>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<style lang="scss" scoped>

@use'../style/variable.scss' as*;

.bg_orangeOpa{
    background-color: $my_new_color_3;
}
.bg_circle {
    background-image: url(../assets/img_home/cerchioAzz.png);
    background-repeat: no-repeat;
    background-size: 15vw;
    background-position: 90% 90%;
}
</style>