<script setup>
import ProductsGen from '@/components/cattegoriesPage/ProductsGen.vue' //import the component that displays the products
</script>

<template>
  <div>
    <div class="categoryName">
      <div class="special-heading">
        <h1>ELECTRONICS</h1>
      </div>
    </div>

    <div class="container">
      <div class="productsBox">   <!--Here we are looping the products-gen component and passing the product props to it-->
        <products-gen 
          v-for="product in elecProducts" 
          :key="product.id"
          :image="product.image"
          :title="product.title"
          :price="product.price"
          :description="product.description"
          :id="product.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: { ProductsGen },
  name: 'ElectronicsCat',
  data() {
    return {
      elecProducts: []   //"elec" is for "Electronics"
    }
  },
  created() {
    this.fetchProducts()
  },
  methods: {
    fetchProducts() {    //fetching all the products from a specifc category 
      fetch('https://fakestoreapi.com/products/category/electronics')
        .then((res) => res.json())
        .then((json) => {
          this.elecProducts = json   //all data from api is now in elecProducts
        })
        .catch((error) => console.error('Error fetching products:', error))
    }
  }
}
</script>

<style scoped>
.categoryName {
  text-align: center;
  color: var(--yellow);
  margin-bottom: 100px;
}

.productsBox {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-bottom: 100px;

}


.special-heading {
  text-align: center;
  cursor: default;
}

.special-heading h1 {
  display: inline-block;
  padding: 10px 20px;
  border: 2px solid var(--yellow);
  color: var(--yellow);
  text-transform: uppercase;
  position: relative;
  animation-delay: .4s;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  z-index: 1;
}

.special-heading h1::before {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--yellow);
  left: -30px;
  top: 50%;
  transform: translateY(-50%);
  z-index: -1;
  /* animation-name: left-circle; */
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

.special-heading h1::after {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--yellow);
  right: -30px;
  top: 50%;
  transform: translateY(-50%);
  z-index: -1;
  /* animation-name: right-circle; */
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

.special-heading h1:hover {
  animation-name: color-border;
}

.special-heading h1:hover::after {
  animation-name: right-circle;
}

.special-heading h1:hover::before {
  animation-name: left-circle;
}

@keyframes color-border {
  100% {
    color: white;
    border-color: transparent;
}
  }

@keyframes left-circle {
  30% {
    left: 0px;
    border-radius: 0;
}

100% {
    left: 0;
    border-radius: 0;
    width: 100%;
    height: 100%;
}
}

@keyframes right-circle {
  30% {
    right: 0px;
    border-radius: 0;
}
100% {
    right: 0;
    border-radius: 0;
    width: 100%;
    height: 100%;
}
}
</style>
