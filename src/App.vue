<script setup lang="ts">
import Header from  './components/Header.vue';
import CarsSection from './components/CarsSection.vue';
import ContactSection from './components/ContactSection.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <Header />
  <section class="poster">
  </section>
  <section>
    <div class="container">
      <div class="titled-section">
        <h2>Модельный ряд</h2>
      </div>
    </div>
  </section>
  <CarsSection />
  <ContactSection />
  <Footer />
</template>

<style scoped lang="scss">
  .poster {
    overflow: hidden;
    height: 100vh;
    width: 100%;
    background-image: url(./assets/img/poster.jpg);
    background-position: center;
  }
</style>
