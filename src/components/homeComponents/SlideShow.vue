<template>
    <div class="container">
    <div id="carousel" class="carousel slide ">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carousel" data-bs-slide-to="4" aria-label="Slide 5"></button>

        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../../assets/Images/Header 1.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../../assets/Images/Header 3.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../../assets/Images/Header 1.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../../assets/Images/Header 3.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../../assets/Images/Header 1.jpg" class="d-block w-100" alt="...">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "SlideShow"
}
</script>

<style scoped>

.carousel{
    overflow: visible;
}
.carousel-indicators{
    margin-bottom: -40px;
}
.carousel-indicators [data-bs-target]{
    background-color: var(--yellow) ;
    width: 10px;
    height: 10px;
    border-radius: 50%;
}
.carousel-inner .carousel-item{
    filter: brightness(0.5);
}
.carousel-inner .active:hover{
    transform: scale(1.1);
    transition: 0.3s;
    
}



  

</style>