<script setup lang="ts">
</script>

<template>
    <section class="poster">
        <slot />
    </section>
</template>

<style scoped lang="scss">
.poster {
    overflow: hidden;
    height: 100vh;
    width: 100%;
    background-image: url(../../assets/img/poster.jpg);
    background-position: center;
  }
</style>