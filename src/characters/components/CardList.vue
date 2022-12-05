<script setup lang="ts">
import breakingBadApi from '@/api/breakingBadApi';

breakingBadApi.get('/characters')
    .then( resp => {
        console.log({ data: resp.data[0].name });
    });

</script>


<template>
    <ul>
        <li>Hola</li>
        <li>Hola</li>
        <li>Hola</li>
    </ul>
</template>


<style scoped>

</style>