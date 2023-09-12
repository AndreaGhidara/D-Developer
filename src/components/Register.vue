<script>

export default{
    name:"Resgister",
    data(){
        return{
            
        }
    },
}

</script>

<template>
    <div class="container py-5 bg_circle mt-3">

        <div class="row">
        
            <div class="col-md-6 col-9 m-auto rounded-2 text-center my_bg p-md-5 p-3">
            
                <h5 class="mb-3">Vuoi diventare uno dei nostri professionisti?</h5>
            
                <div>
                    <button class="button m-auto">
                    <a href="http://127.0.0.1:8000/register" class="text">
                        REGISTRATI
                    </a>
                        <div class="wave"></div>
                    </button>
                </div>
            </div>
    
        </div>
    </div>
    
</template>

<style lang="scss" scoped>

@use'../style/variable.scss' as*;

.my_bg{
    background: linear-gradient(40deg, rgba(246, 108, 104, 1) 0%, rgba(255, 129, 108, 1) 50%, rgba(252, 176, 69, 1) 100%);
}

.bg_circle {
    background-image: url(../assets/img_home/cerchioAzz.png);
    background-repeat: no-repeat;
    background-size: 10vw;
    background-position: 20% 50%;
}
</style>