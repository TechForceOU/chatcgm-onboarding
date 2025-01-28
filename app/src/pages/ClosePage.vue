<template>
    <div class="close-page">
        <h1>Thanks for visiting!</h1>
        <p>Closing the app...</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
    name: 'ClosePage',
    setup() {
        onMounted(() => {
            // Close the app when component mounts
            window.Telegram?.WebApp?.close();
        })
    }
})
</script>

<style scoped>
.close-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
}
</style>