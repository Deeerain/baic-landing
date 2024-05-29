<script setup lang="ts">
import Container from '../Container.vue';

defineProps<{
    title: string
}>()

</script>

<template>
    <section>
        <Container>
            <div class="titled-section">
                <h2>{{ title }}</h2>
            </div>
        </Container>
    </section>
</template>

<style scoped lang="scss">
.titled-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: lighter;
    text-transform: uppercase;
    gap: 1rem;
    letter-spacing: 0.3rem;

    &::after {
        content: '';
        border-bottom: 4px solid #23009e;
        width: 100px;
    }
}   
</style>