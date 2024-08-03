<script setup>
import { ref, onMounted } from 'vue';
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import FooterSection from './components/FooterSection.vue';
import Loading from '../src/components/loadingScreen/LoadingScreen.vue'; //loading screen

const isLoading = ref(true); 

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 3000); // loading screen time
});
</script>

<template>
  <Loading :isLoading="isLoading" /> <!-- use the Loading component -->
  <NavBar />
  <RouterView v-if="!isLoading" /> <!-- only show RouterView when not loading -->
  <FooterSection />
</template>