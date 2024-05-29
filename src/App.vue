<script setup lang="ts">
import Header from  './components/sections/Header.vue';
import Poster from './components/sections/Poster.vue';
import TitledSection from './components/sections/TitledSection.vue'
import CarsSection from './components/sections/CarsSection.vue';
import ContactSection from './components/sections/ContactSection.vue';
import Footer from './components/sections/Footer.vue';
import SideNavigation from './components/SideNavigation.vue';
import Container from './components/Container.vue';

</script>

<template>
  <Header />
  <Poster>
    <Container>
      
    </Container>
  </Poster>
  <TitledSection title="Модельный ряд"/>
  <CarsSection />
  <TitledSection title="Контакты"/>
  <ContactSection />
  <Footer />
  <SideNavigation/>
</template>

<style scoped lang="scss">
</style>
