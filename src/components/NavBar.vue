<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg pt-0 pb-0">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img class="logoImage" src="../assets/mainLogo.png" alt="logo"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <font-awesome-icon :icon="['fas', 'bars']" />
      </button>
      <div class="collapse navbar-collapse align-items-end flex-column-reverse" id="navigation">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink style="text-decoration: none" to="/"
              ><a class="nav-link" href="#">Home</a></RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink style="text-decoration: none" to="/electronics"
              ><a class="nav-link" href="#">Electronics</a></RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink style="text-decoration: none" to="/jewlery"
              ><a class="nav-link" href="#">Jewelry</a></RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink style="text-decoration: none" to="/menclothing"
              ><a class="nav-link" href="#">Men Clothing</a></RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink style="text-decoration: none" to="/womenclothing"
              ><a class="nav-link">Women Clothing</a></RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink style="text-decoration: none" to="/MyCart"
              ><a class="nav-link">My Cart</a></RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink style="text-decoration: none" to=""
              ><a class="nav-link">Contact Us</a></RouterLink
            >
          </li>
        </ul>
        <form class="d-none d-lg-flex" role="search">
          <input
            class="form-control me-2 d-none"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div class="searchIcon me-2">
            <input type="text" placeholder="Search">
            <font-awesome-icon icon="magnifying-glass" />
          </div>
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
        </form>
      </div>
    </div>
  </nav>
</template>

<script scoped>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
/* Start NavBar */
.navbar {
  background-color: var(--black);
  border-bottom: 10px solid var(--yellow);
}
.logoImage {
  width: 150px;
}

.nav-link {
  color: var(--white);
}

.nav-link:hover,
.nav-link:focus,
.nav-link:active {
  color: var(--yellow);
}
.navbar-toggler {
  color: var(--white);
  border-color: var(--yellow);
}
.navbar-toggler:focus {
  box-shadow: none;
}
.navbar-toggler svg {
  color: var(--yellow);
}

.searchIcon {
  color: var(--white);
}
.searchIcon input{
  width: 0;
  margin-right: 10px;
  border: 1px solid var(--yellow);
  transition: 0.3s;
  outline: none;
  background-color: transparent;
  color:white;
  
}
.searchIcon input::placeholder{
  color:white;
}
.searchIcon:hover input ,.searchIcon input:focus{
  width: 200px ;
  padding: 0 10px;
}
.socialContact {
  list-style: none;
}

.socialContact li {
  border: 1px solid var(--yellow);
  width: 22px;
  height: 22px;
  text-align: center;
  border-radius: 50%;
  margin-left: 20px;
}
.socialContact li:hover{
  border-color: var(--white);
}
.socialContact li svg {
  font-size: 11px;
  color: var(--yellow);
  margin-bottom: 3px;
  padding-left: 1px;
}

.socialContact li:hover svg{
  color:var(--white)
}
/* End NavBar */
</style>
