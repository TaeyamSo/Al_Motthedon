<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <footer>
    <div class="container">
      <div class="box">
        <div class="miniBox">
          <img src="../assets/mainLogo.png" alt="" />
          <ul class="socialContact d-flex">
            <li>
              <a href=""><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
            </li>
            <li>
              <a href=""><font-awesome-icon :icon="['fab', 'x-twitter']" /></a>
            </li>
            <li>
              <a href=""><font-awesome-icon :icon="['fab', 'instagram']" /></a>
            </li>
            <li>
              <a href=""><font-awesome-icon :icon="['fab', 'youtube']" /></a>
            </li>
          </ul>
        </div>

        <div class="miniBox">
          <ul>
            <li>
              <RouterLink style="text-decoration: none;color:var(--white)" to="/"><a style="color:var(--white)" class="home">Home</a></RouterLink>
            </li>
            <li>
              <RouterLink style="text-decoration: none" to=""><a href="#">About Us</a></RouterLink>
            </li>
            <li>
              <RouterLink style="text-decoration: none" to=""
                ><a href="#">Media Center</a></RouterLink
              >
            </li>
            <li>
              <RouterLink style="text-decoration: none" to=""
                ><a href="#"> Contact Us</a></RouterLink
              >
            </li>
          </ul>
        </div>

        <div class="miniBox">
          <ul>
            <li>
              <RouterLink style="text-decoration: none" to="/electronics"><a>Electronics</a></RouterLink>
            </li>
            <li>
              <RouterLink style="text-decoration: none" to="/jewlery"><a href="#">Jewelry </a></RouterLink>
            </li>
            <li>
              <RouterLink style="text-decoration: none" to="/menclothing"
                ><a href="#">Men Clothing</a></RouterLink
              >
            </li>
            <li>
              <RouterLink style="text-decoration: none" to="/womenclothing"
                ><a href="#">Women Clothing</a></RouterLink
              >
            </li>
          </ul>
        </div>

        <div class="miniBox">
          <ul>
            <li>
              <RouterLink style="text-decoration: none;" to="/"><a style="color:var(--white)">Contact Us</a></RouterLink>
            </li>
            <li>
              <RouterLink style="text-decoration: none" to=""
                ><a href="#">0999999999</a></RouterLink
              >
            </li>
            <li>
              <RouterLink style="text-decoration: none" to=""
                ><a href="#">almotthedon@gmail.com</a></RouterLink
              >
            </li>
          </ul>
        </div>
      </div>

      <p class="copyright">almotthedon 2024 All Rights Reserved</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>

<style scoped>
footer {
  height: 25vh;
}
footer .container {
  border-top: 1px solid var(--yellow);
}
.box {
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
  align-content: center;
  flex-wrap: wrap;
}
.miniBox:not(.miniBox:nth-child(1)) {
  display: flex;
  align-items: center;
}
.miniBox img {
  width: 200px;
}
.miniBox ul li {
  margin-right: 15px;
  list-style: none;
}
.miniBox ul li a {
  color: var(--yellow);
  font-size: 1.1rem;
  text-decoration: none;
}
.miniBox ul li svg {
  color: var(--white);
}
.miniBox ul li svg:hover{
  color: var(--yellow);
}
.copyright {
  text-align: center;
  color: white;
  border-top: 1px solid white;
  padding-bottom: 10px;
}
@media (max-width:992px) {
  .miniBox ul li a{
    font-size: 0.9rem;
  }
}
</style>
