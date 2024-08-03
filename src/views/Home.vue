<script setup>
import SlideShow from "../components/homeComponents/SlideShow.vue"
import LatestProducts from "../components/homeComponents/LatestProducts.vue"
import LuxurySection from '@/components/homeComponents/LuxurySection.vue'
import CategoriesSection from '@/components/homeComponents/CategoriesSection.vue'

</script>
<template>
    <slide-show/>
    <latest-products/>
    <luxury-section/>
    <categories-section/>
</template>


<script>
export default {
  components: { SlideShow, LatestProducts, LuxurySection },
    name:"HomeView"
}
</script>

<style>

</style>