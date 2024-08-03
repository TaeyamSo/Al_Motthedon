<template>


  <!--   note !!  :   not all functions are complete because the API is fake  -->


    <div class="main">
      <div class="container">
        <div class="productBox" v-if="item && Object.keys(item).length > 0">  <!--if there is no items in the cart dont render-->
          <div class="imgBox">
            <img class="productImg" :src="item.image" alt="Product Image" />
          </div>
          <div class="textBox">
            <h2 class="productTitle">{{ item.title.substring(0, 12) }}</h2>
          </div>
          <div class="quantity">
            <button @click="subQuantity" class="quantityButton sub">-</button> <!--Decreasing/Subtracting the qunatity-->
            <span>{{ quantity }}</span>
            <button @click="addQuantity" class="quantityButton add">+</button> <!--Increasing/Adding the quantity-->
          </div>
          <div class="price">
            <p class="productPrice">AED {{ (item.price * quantity).toFixed(2) }}</p>
            <button class="removeCart">Remove</button>   <!--Remove the item from cart  -->
          </div>
        </div>
        <hr style="color: var(--yellow); border-width: 2px" />
        <div class="total">
          <div class="totalBox">
            <div class="subtotalBox">
              <div class="subtotalItem">
                <h5>Sub-Total</h5>
                <p class="itemsTotal">{{ cartProducts.length }} item(s)</p>
              </div>
              <div class="totalPrice">AED {{ (item.price * quantity).toFixed(2) }}</div>
            </div>
            <button class="checkout">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MyCart',
    data() {
      return {
        cartProducts: [],
        item: {}, 
        quantity: 1
      };
    },
    created() {
      this.getCart();
    },
  
    methods: {
      getCart() {
        fetch('https://fakestoreapi.com/carts/7')
          .then((res) => res.json())
          .then((json) => {
            this.cartProducts = json.products;
            console.log(json.products);
            if (this.cartProducts.length > 0) {//here there must be a for loop to loop on all ids in cartProducts, thats is because the API is Fake
              this.fetchProductDetails(this.cartProducts[0].productId);
            }
          })
          .catch((error) => {
            console.error('Error fetching cart:', error);
          });
      },
      fetchProductDetails(id) {   //fetching a product with the id from the getcart()
        fetch(`https://fakestoreapi.com/products/${id}`)
          .then((res) => {
            if (!res.ok) {
              throw new Error('Network response was not ok');
            }
            return res.json();
          })
          .then((json) => {
            this.item = json; 
          })
          .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
          });
      },
      addQuantity() {
        this.quantity++;
      },
      subQuantity() {
        if (this.quantity > 1) {
          this.quantity--;
        }
      }
    }
  };
  </script>

<style scoped>
.main {
  min-height: 75vh;
}
.productBox {
  margin: 100px 0;
}
.productBox,
.quantity {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}
.imgBox {
  width: 200px;
  overflow: hidden;
}
.productImg {
  width: 100%;
}
.quantityButton {
  border-radius: 50%;
  background: transparent;
  border: 1px solid var(--yellow);
  color: var(--yellow);
  font-size: 25px;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.add {
  margin-left: 15px;
  transition: 0.3s;

}
.sub {
  margin-right: 15px;
  transition: 0.3s;
}
.price {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.total {
  display: flex;
  justify-content: end;
  color: var(--white);
}
.total .subtotalBox {
  display: flex;
  gap: 30px;
}
.totalPrice {
  margin: auto 0;
}
.checkout {
  padding: 5px 60px;
  background-color: transparent;
  color: white;
  border: 1px solid var(--yellow);
  transition: 0.3s;
}
.removeCart {
  padding: 5px 20px;
  background-color: transparent;
  color: white;
  border: 1px solid var(--yellow);
  transition: 0.3s;
}
.removeCart:hover,.checkout:hover{
  background-color:var(--yellow);
}

.add:hover,.sub:hover{
  background-color: var(--yellow);
  color: white;
}

@media (max-width:992px){
  .imgBox{
    width: 100px;
  }
  .productTitle{
    font-size: 20px;
  }

}
@media(max-width:576px){
  .productPrice{
    font-size: 14px;
  }
  .productTitle{
    font-size: 14px;
  }
  .removeCart{
    padding: 5px 2px;
    font-size: 14px;
  }
  .subtotalBox, .subtotalBox h5,.checkout{
    font-size: 14px;
  }
}
</style>
