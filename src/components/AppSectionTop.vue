<script>

export default{
    name:"AppSectionTop",
    data(){

    }
}

</script>

<template>

<div class="container-fluid bg_allpage py-5">
    <div id="" class="row py-5">
        <div class="col-md-2 bg_square py-5">

        </div>
        <div class="col-md-4 py-md-5 py-5">    
            <img src="../assets/img_home/AppSectionTop.webp" alt="" class="img-fluid rounded px-5">
        </div>
        <div  class="col-lg-4 col-12 text-center px-5 my-auto text-white rounded">
            <p>La nostra azienda valorizza profondamente i suoi sviluppatori, garantendo un ambiente di lavoro che promuove il rispetto e l'autonomia. Forniamo spazi creativi, supporto costante e opportunità di crescita professionale, dimostrando il nostro impegno verso il benessere e lo sviluppo dei nostri talenti tecnici.</p>
        </div>
        <div class="col-md-2 bg_circle py-5">

        </div>
    </div>
</div>

    

</template>

<style lang="scss" scoped>

.bg_allpage{
    background-image: url(../assets/img_home/prima_onda.png);
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
}

.bg_circle {
    background-image: url(../assets/img_home/cerchioPuntinato.png);
    background-repeat: no-repeat;
    filter: brightness(100) contrast(1);
    background-size: 50%;
    background-position: 0% 20%;
}

.bg_square {
    background-image: url(../assets/img_home/quadrato.png);
    background-repeat: no-repeat;
    filter: brightness(100) contrast(1);
    background-size: 50%;
    background-position: 100% 80%;
}
</style>