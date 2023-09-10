<script>

export default{
    name:"SectionTwoCard",
    data(){
        return{
            
        }
    },
}

</script>

<template>
<div class="container-fluid bg_allpage py-5">
    <div id="chi_siamo" class="row py-5 mt-5 mt-md-0">
        <div class="col-md-2 bg_circle py-5">
            
        </div>
        <div  class="col-md-4 col-12 text-center px-3 px-md-1 text-white rounded my-auto">
            <p class="m-auto">Realizza il sito dei tuoi sogni con i nostri esperti web developer! Siamo qui per trasformare la tua visione in una presenza online straordinaria. Con competenza e creatività, costruiremo insieme il tuo successo sul web.</p>
        </div>
        <div class="col-md-4 py-3 my-auto">
            
            <img src="../assets/img_home/SectionTwoCard.png" alt="" class="img-fluid rounded px-3 pt-lg-5 m-auto">
            
        </div>
        <div class="col-md-2 bg_square py-md-5 py-3">
            
        </div>
    </div>
</div>

</template>


<style lang="scss" scoped>
@use'../style/variable.scss' as*;

.bg_allpage {
    background-image:url(../assets/img_home/secondaonda.png);
    background-size: cover;
    background-repeat: no-repeat;
   
}

.bg_circle {
    background-image: url(../assets/img_home/cerchioPuntinato.png);
    background-repeat: no-repeat;
    filter: brightness(100) contrast(1);
    background-size: 50%;
    background-position: 100% 10%;
}

.bg_square {
    background-image: url(../assets/img_home/quadrato.png);
    background-repeat: no-repeat;
    filter: brightness(100) contrast(1);
    background-size: 50%;
    background-position: -10% 100%;
}
</style>