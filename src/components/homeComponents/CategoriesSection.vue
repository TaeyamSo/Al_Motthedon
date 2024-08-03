<template>
  <div class="main">
    <div class="container">
      <div class="mainBox">
        <div class="box">
          <div class="textBox">
            <h2>CATEGORIES</h2>
          </div>
          <div class="cardContainer">
            <div class="cards">
              <RouterLink
               style="text-decoration: none;color:var(--white)"
               to="/electronics">
               ELECTRONICS
              </RouterLink>
            </div>
            <div class="cards">
              <RouterLink
               style="text-decoration: none;color:var(--white)"
               to="/jewlery">
              JEWLERY
              </RouterLink>
            </div>
            <div class="cards">
              <RouterLink
               style="text-decoration: none;color:var(--white)"
               to="/menclothing">
              MEN CLOTHING
             </RouterLink>
            </div>
            <div class="cards">
              <RouterLink
               style="text-decoration: none;color:var(--white)"
               to="/womenclothing">WOMEN CLOTHING
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoriesSection'
}
</script>

<style scoped>
.mainBox {
  background-image: url(../../assets/Images/Header2.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 50px 0 100px 0;

  margin-bottom: 100px;
}
.mainBox::before {
  content: '';
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.721);
  position: absolute;
}

.textBox {
  position: relative;
  z-index: 5;
  text-align: center;
  color: white;
}

.textBox h2 {
  color: var(--yellow);
  font-size: 3rem;
}
.cardContainer {
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 5;
  flex-wrap: wrap;
}
.cards {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 225px;
  height: 150px;
  background-color: rgb(243 213 72 / 60%);
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: 0.3s;
}
.cards:hover{
  background-color: rgba(253, 214, 40, 0.6);
}
@media (max-width: 992px) {
  .mainBox {
    background-image: none;
  }
  .mainBox::before {
    display: none;
  }
  .mainBox {
    margin-bottom: 0;
  }
}
</style>
