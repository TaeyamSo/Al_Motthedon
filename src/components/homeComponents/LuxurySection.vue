<template>
  <div class="main">
    <div class="textContainer">
      <h2>LUXURY JEWLERY COLLECTION</h2>
    </div>
    <div class="container">
      <div class="imgContainer">
        <img
          src="../../assets/Images/portrait-young-woman-with-earrings-with-gems-isolated.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="container">
      <div class="textBox">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe earum sint, officia
          provident natus corrupti magni culpa atque delectus, quas, consequatur fugit dolorem odit
          minima aspernatur itaque. Expedita, voluptatibus!
        </p>
        <button>More</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LuxurySection'
}
</script>

<style scoped>
*{
  font-family: "Roboto Flex", sans-serif;
}
.main {
  padding-top: 100px;
  height: 80vh;
}
.main .textContainer {
  width: 100%;
  background-color: var(--yellow);
  padding: 40px 0;
  position: relative;
}
.main .textContainer h2 {
  position: absolute;
  left: calc(50%);
  top: 50%;
  transform: translate(0, -50%);
}
.container {
  position: relative;
}
.imgContainer {
  width: fit-content;
  position: absolute;
  top: -172px;
}

.imgContainer img {
  width: 350px;
}

.textBox {
  width: 50%;
  overflow: hidden;
  position: absolute;
  right: 0;
}

.textBox p {
  color: var(--white);
  margin-top: 20px;
  line-height: 30px;
  font-size: 16px;
}

.textBox button {
  margin-top: 50px;
  padding: 5px 100px;
  background-color: transparent;
  color: white;
  border: 1px solid var(--yellow);
  transition: 0.3s;
}
.textBox button:hover{
  background-color: var(--yellow);
}
@media (max-width:992px) {
 .imgContainer{
  display: none;
 }
 .main .textContainer h2{
  transform: translate(-50%,-50%);
  font-size: 20px;
 }
 .textBox{
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
 }
 .textBox button{
  padding: 5px 50px;
 }
 .main{
  height: 95vh;
 }
}
</style>
