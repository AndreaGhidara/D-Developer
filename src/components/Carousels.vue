<script>
export default {
  name: 'Carousels'
}
</script>

<template>
<div class="container-fluid bg-primary pt-5">
  <div class="container">
    <div class="row h-550">
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="true">
        <div class="carousel-inner ">
          <div class="carousel-item active ">
            <!-- <img src="..." class="d-block w-100" alt="..."> -->
            <div class="bg-danger h-550"></div>
          </div>
          <div class="carousel-item">
            <!-- <img src="..." class="d-block w-100" alt="..."> -->
            <div class="bg-success h-550"></div>

          </div>
          <div class="carousel-item">
            <!-- <img src="..." class="d-block w-100" alt="..."> -->
            <div class="bg-warning h-550"></div>

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
</div>


</template>

<style scoped>

.h-550{
  /* height: 550px; */
  height: calc(100vh - 190.55px);
}

</style>