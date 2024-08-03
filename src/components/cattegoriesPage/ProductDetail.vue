<template>

    <!--   note !!  :   not all functions are complete because the API is fake  -->


  <div class="main">
    <div class="container">
      <div class="imgBox"><img class="productImg" :src="product.image" alt="Product Image" /></div>
      <div class="textBox">
        <h2>{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <div class="addtocart">
          <p class="price">Price: AED {{ product.price }}</p>
          <button class="addButton" @click="this.addToCart(id)">Add To Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  props: ['id'],
  data() {
    return {
      product: ''
    }
  },
  created() {
    this.fetchProductDetails(this.id)
    console.log(this.id)
  },
  methods: {
    fetchProductDetails(id) {   //fetching a product with the id 
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok')
          }
          return res.json()
        })
        .then((json) => {
          this.product = json // set product data
        })
        .catch((error) => {
          console.error('There was a problem with the fetch operation:', error)
        })
    },
    addToCart(id) {   //updating the cart 
      fetch('https://fakestoreapi.com/carts/7', {
        method: 'PATCH',
        headers: {
          
        },
        body: JSON.stringify({
          products: [{ productId: id, quantity: 1 }]
        })
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok')
          }
          return res.json()
        })
        .then((json) => {
          console.log(json)
        })
        .catch((error) => {
          console.error('There was a problem with the fetch operation:', error)
        })
    }
  }
}
</script>

<style scoped>
* {
  font-family: 'Roboto Flex', sans-serif;
}
.main {
  margin: 100px 0;
}
.main .container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.imgBox {
  width: 500px;
  height: 500px;
  overflow: hidden;
}

.imgBox .productImg {
  width: 100%;
  height: 100%;
}

.textBox {
  width: 500px;
  color: white;
}

.addtocart {
  display: flex;
  justify-content: space-between;
}
.addtocart .addButton {
  padding: 5px 60px;
  background-color: transparent;
  color: white;
  border: 1px solid var(--yellow);
  transition: 0.3s;
}
.addtocart .addButton:hover{
  background-color: var(--yellow);
}
.addtocart .price {
  font-size: 18px;
  color: var(--yellow);
}

@media (max-width:1200px) {
  .imgBox{
    width: 300px;
    height: 300px;
}
}

@media (max-width:992px) {
  .imgBox{
    width: 200px;
    height: 200px;
}
.main .container{
  gap: 50px;
}
.addtocart .addButton{
  padding: 5px 20px;
}

}

</style>
