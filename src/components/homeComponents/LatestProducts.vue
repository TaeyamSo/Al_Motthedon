<template>
  <div>
    <div class="mainName">
      <h1>Latest Products</h1>
      <img src="../../assets/Icons/ALMOTTHEDON COMPANY Logo (3)1.png" alt="Company Logo" />
    </div>

    <div class="container">
      <div id="product-carousel" class="carousel slide">
        <div class="carousel-indicators">
          <button
            v-for="(item, index) in totalSlides"
            :key="index"
            type="button"
            data-bs-target="#product-carousel"
            :data-bs-slide-to="index"
            :class="{ active: index === 0 }"
            aria-label="Slide {{ index + 1 }}"
          ></button>
        </div>
        <div class="carousel-inner">
          <div
            v-for="(group, index) in groupedProducts"
            :key="index"
            class="carousel-item"
            :class="{ active: index === 0 }"
          >
            <div class="box">
              <div class="mini-box" v-for="product in group" :key="product.id">
                <div class="imgContainer">
                  <img :src="product.image" :alt="product.title" />
                </div>
                <h2>{{ product.title.substring(0, 15) }}</h2>
                <h3>AED {{ product.price }}</h3>
                <button @click="goToProductDetail(product.id)">See More</button>
                <!--on click opens ProductDetail page and sends the id prop to it-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// here we are fetching the latest products but we are assigning every
// 3 products in one array and the pushing it in the chunks variabe
// we are doing this because there are 3 products every slide
export default {
  name: 'LatestProducts',
  data() {
    return {
      products: []
    }
  },
  computed: {
    totalSlides() {
      return Math.ceil(this.products.length / 3) // 3 products per slide
    },
    groupedProducts() {
      const chunks = []
      for (let i = 0; i < this.products.length; i += 3) {
        //looping all products to be pushed to chunks
        chunks.push(this.products.slice(i, i + 3))
      }
      return chunks
    }
  },
  created() {
    this.fetchProducts()
  },
  methods: {
    fetchProducts() {
      //fetching 15 products only , because there are 5 slide , 3 products for each slide =>3 * 5 = 15 products
      fetch('https://fakestoreapi.com/products?limit=15')
        .then((res) => res.json())
        .then((json) => {
          this.products = json //products now have all the data from API
        })
        .catch((error) => console.error('Error fetching products:', error))
    },

    goToProductDetail(id) {
      //passing the id parameter to "ProductDetail" component.
      this.$router.push({ name: 'ProductDetail', params: { id } })
    }
  }
}
</script>

<style scoped>
* {
  font-family: 'Roboto Flex', sans-serif;
}
.mainName {
  position: relative;
  margin: 80px 0 40px 0;
  text-align: center;
}
.mainName h1 {
  color: var(--white);
  margin: 0;
  text-transform: uppercase;
}
.mainName img {
  width: 250px;
  position: absolute;
  top: 20px;
  left: calc(50% - 110px);
  transform: translateX(-50%);
}

.box {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
}
.box .mini-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  transition: 0.3s;
}
.box .mini-box:hover {
  margin-top: -15px;
}
.box .mini-box h2 {
  font-size: 25px;
  color: white;
}
.box .mini-box h3 {
  font-size: 20px;
  color: var(--yellow);
}
.box .mini-box img {
  width: 350px;
  height: 300px;
  transition: 0.3s;
}

.box .mini-box button {
  padding: 5px 60px;
  background-color: transparent;
  color: white;
  border: 1px solid var(--yellow);
  transition: 0.3s;
}

.box .mini-box button:hover {
  background-color: var(--yellow);
}
#product-carousel {
  padding-bottom: 100px;
}
.carousel-indicators {
  bottom: 30px;
}
.carousel-indicators [data-bs-target] {
  background-color: var(--yellow);
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.imgContainer {
  overflow: hidden;
  border: 2px solid var(--yellow);
  position: relative;
}
.imgContainer::after{
  content:'';
  background: url(../../assets/Icons/heart_10826871.png);
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
  position: absolute;
  top: 10px;
  right: 10px;
}
.imgContainer::before {
  content: '';
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
.imgContainer:hover img {
  transform: rotate(5deg) scale(1.1);
}
.imgContainer img {
  width: 100%;
  height: 250px;
  transition: 0.3s;
}
.imgContainer:hover .productImg {
  transform: rotate(5deg) scale(1.1);
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

@media (max-width: 992px) {
  .box .mini-box img {
    width: 250px;
    height: 200px;
  }
}
</style>
