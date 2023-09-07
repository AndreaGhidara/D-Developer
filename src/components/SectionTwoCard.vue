<script>

export default{
    name:"SectionTwoCard",
    data(){

    }
}

</script>

<template>
<div class="container-fluid bg_allpage py-5">

    <div id="chi_siamo" class="row pt-5 mt-5">
        
        <div  class="col-lg-4 offset-lg-1 col-12 text-center p-5 text-white rounded my-auto">
            <p>Realizza il sito dei tuoi sogni con i nostri esperti web developer! Siamo qui per trasformare la tua visione in una presenza online straordinaria. Con competenza e creatività, costruiremo insieme il tuo successo sul web.</p>
        </div>
        
        <div class="col-md-4 offset-md-2 d-none d-lg-block mt-5">
            
            <img src="../assets/img_home/SectionTwoCard.jpg" alt="" class="img-fluid rounded">
            
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

</style>