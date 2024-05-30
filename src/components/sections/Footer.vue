<script setup lang="ts">
import Container from '../Container.vue';
</script>

<template>
    <footer>
        <Container>
            <div class="footer-col">
                <div class="footer-col__copyright row">
                    <div class="col">
                        <p>Официальный дилер BAIC - Аксель-Архангельск</p>
                    </div>
                    <div class="col">
                        <p>© 2024 Аксель BAIC</p>
                    </div>
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
    padding: 50px 0;

    .footer-col__copyright {
        margin-bottom: 40px;
    }
}
</style>