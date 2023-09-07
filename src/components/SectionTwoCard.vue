<script>

export default{
    name:"SectionTwoCard",
    data(){

    }
}

</script>

<template>

    <div id="chi_siamo" class="row bg_allpage py-5">
        
        <div  class="col-lg-4 offset-lg-1 col-12 my_bg text-center p-5 text-white rounded">
            <p>Realizza il sito dei tuoi sogni con i nostri esperti web developer! Siamo qui per trasformare la tua visione in una presenza online straordinaria. Con competenza e creatività, costruiremo insieme il tuo successo sul web.</p>
        </div>
            
        <div class="col-md-4 offset-md-2 col-12 d-none d-lg-block">
                        
            <img src="../assets/img_home/img_mini.png" alt="" class="img-fluid rounded">
                        
        </div>
    </div>


</template>


<style lang="scss" scoped>
@use'../style/variable.scss' as*;

.my_bg {
    background-color: $my_primary;
}

.bg_allpage {
    background-image:url(../assets/img_home/secondaonda.png);
    // background-position:  180%;
    // background-repeat: repeat;
    border: 2px solid black;
   
}

</style>