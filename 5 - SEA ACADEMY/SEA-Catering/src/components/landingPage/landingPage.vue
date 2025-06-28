<template>
    <main>
        <!-- hero -->
        <HeroSection />
        <!-- carousel -->
        <Carousel />
        <!-- testimonial -->
        <Testimonial />
        <!-- footer -->
        <!-- <FooterSection /> -->
    </main>
</template>

<script setup>
import HeroSection from "./hero/hero.vue";
import Carousel from "./carousel/carousel.vue";
import Testimonial from "./testimonials/testimonial.vue";
// import FooterSection from "./footer/footer.vue";

</script>

<style scoped>
@import url("./src/style.css");
@import url("https://fonts.googleapis.com/css2?family=Radio+Canada:ital,wght@0,400..700;1,400..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap");

</style>