<template>
  <div>
    <div class="product">
      <div class="imgContainer" @click="goToProductDetail(id)">  <!--on click opens ProductDetail page and sends the id prop to it-->
        <img class="productImg" :src="image" alt="" />
      </div>
      <h2 class="productTitle">{{ title.substring(0, 15) + '...' }}</h2>
      <p class="productPrice">AED {{ price }}</p>
      <button class="addCart" @click="goToProductDetail(id)">Add To Cart</button> <!--on click opens ProductDetail page and sends the id prop to it-->
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'image', 'title', 'price', 'description'],
  name: 'ProductGen',
  data() {
    return {
      details: false
    }
  },
  methods: {
    goToProductDetail(id) {    //passing the id parameter to "ProductDetail" component.
      this.$router.push({ name: 'ProductDetail', params: { id } })
    }
  }
}
</script>

<style scoped>
* {
  font-family: 'Roboto Flex', sans-serif;
}
.product {
  text-align: center;
  padding-bottom: 20px;
}
.imgContainer {
  width: 100%;
  height: 250px;
  overflow: hidden;
  border: 2px solid var(--yellow);
  position: relative;
}
.imgContainer::before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #e0e0e0b1;
  transition: 0.3s;
  z-index: 2;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
}
.imgContainer:hover::before {
  animation-name: img-box;
}
.imgContainer .productImg {
  width: 100%;
  height: 250px;
  transition: 0.3s;
}
.imgContainer:hover  .productImg{
  transform: rotate(5deg) scale(1.1);
}
.productTitle {
  color: var(--white);
}
.productPrice,
.productDescription {
  color: var(--yellow);
}
.addCart {
  padding: 5px 60px;
  background-color: transparent;
  color: white;
  border: 1px solid var(--yellow);
  transition: 0.3s;
}
.addCart:hover{
  background-color: var(--yellow);
}

@keyframes img-box {
  50% {
    width: 100%;
    height: 100%;
}
100% {
    width: 100%;
    height: 100%;
    background-color: transparent;
}
}
</style>