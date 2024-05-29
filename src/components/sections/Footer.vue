<script setup lang="ts">
import Container from '../Container.vue';
</script>

<template>
    <footer>
        <Container>
            <div class="footer-col flex-column">
                <div class="footer-col__copyright flex-row ceneter">
                    <p>Официальный дилер BAIC - Аксель-Архангельск</p>
                    <p>© 2024 Аксель BAIC</p>
                </div>
                <small>ООО "АКСЕЛЬ-АРХАНГЕЛЬСК", 163062, Архангельская Область, г.о. Город Архангельск, г Архангельск, ул Папанина, д. 21, помещ. 32, ИНН: 2901257453, ОГРН: 1152901003496</small>
            </div>
        </Container>
    </footer>
</template>

<style scoped lang="scss">
footer {
    background-color: #000;
    color: #fff;
    .container {
        .footer-col {
            height: 200px;
            justify-content: space-around;

            &__copyright {
                gap: 2rem;
            }
        }
    }
}
</style>