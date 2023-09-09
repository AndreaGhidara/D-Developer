<script>

import { store } from '../data/store';

export default{
    name:"AppJumbo",
   
    data(){
        return{
            store,
        }
    }
}


</script>

<template>
    
    <!-- jumbo -->
    <div class="row mb-auto">    

        <!-- img user -->

        <div class="col-4 relative my_Size">
                                       
            <img v-if="store.Dev.img_path" :src="this.store.imgApi + store.Dev.img_path" class="rounded-circe my_ratio my_object img-fluid border rounded-circle border-2 border-light" alt="{{ store.Dev.name }},{{ store.Dev.surname }}">
                            
            <img v-else src="https://picsum.photos/300/300?random" class="rounded-circe my_ratio my_object img-fluid border rounded-circle border-2 border-light" alt="{{ store.Dev.name }},{{ store.Dev.surname }}">

        </div>
        
        <!-- bg user -->              
        
        <div class="col-12 my_height p-0">

            <img v-if="store.Dev.bg_dev" :src="this.store.imgApi + store.Dev.bg_dev" class="img-fluid my_object " alt="{{ store.Dev.name }},{{ store.Dev.surname }}">
                            
            <img v-else src="https://picsum.photos/1200/720?random" class="img-fluid" alt="{{ store.Dev.name }},{{ store.Dev.surname }}">

        </div>
    
    </div>

</template>

<style lang="scss" scoped>
@use'../style/variable.scss' as*;
.relative{
    position: absolute;
    top: 220px;
    left: 22%;
    max-height: 300px;
}
.my_Size {
    max-width: 250px;
    max-height: 250px;
}


.my_ratio{
    aspect-ratio: 1;
   
}
.my_object{
     object-fit: cover;
}
.my_height{
    max-height: 400px;
    img{
        width: 100%;
        max-height: 100%;
        // object-fit: cover;
    }
}
</style>