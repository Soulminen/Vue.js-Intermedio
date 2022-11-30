
<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from '@/shared/components/NavBar.vue';
import { characterRoute } from "../router";
</script>


<template>
        <h1>Personajes</h1>

        <!-- Navbar -->
        <NavBar 
            :show-icon="false" 
            :links="characterRoute.children"
        />

        <!-- RouterView + Suspense -->
        <RouterView />
</template>


<style scoped>

</style>