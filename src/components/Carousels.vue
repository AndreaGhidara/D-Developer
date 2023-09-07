<script>

export default {
  name: 'Carousels',
  data(){
    return{
      imgActive: "src/assets/img_home/img_1.png",
      linkImg:[
        {
          src:"src/assets/img_home/img_2.png"
        },
        {
          src:"src/assets/img_home/img_3.png",
        },  
      ]
    }
  }
}
</script>

<template>
<div class="container-fluid">
  
    <div class="row h-650">
      <div id="carouselExampleAutoplaying" class="carousel slide col-12" data-bs-ride="true">
        <div class="carousel-inner ">
          <div class="carousel-item active ">
            <div class="h-650">
              <img :src="imgActive" class="img-fluid" alt="...">
            </div>
          </div>
          <div class="carousel-item" v-for="item in linkImg">
            <div class="h-650">
              <img :src="item.src" alt="" class="img-fluid" >
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

</div>


</template>

<style lang="scss" scoped>

@use'../style/variable.scss' as*;
.container-fluid{
  padding: 0 !important;
  margin: 0 !important;
}


</style>