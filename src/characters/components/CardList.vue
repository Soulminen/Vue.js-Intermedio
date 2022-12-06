<script setup lang="ts">
import { ref } from "vue";
import breakingBadApi from '@/api/breakingBadApi';
import type { Character } from '@/characters/interfaces/character';

// const { data: characters } = await breakingBadApi.get<Character[]>('/characters');


const characters = ref<Character[]>([]);

breakingBadApi.get<Character[]>('/characters')
    .then( resp => {
        characters.value = resp.data;
        // console.log({ data: resp.data[0].name });
        // const name = resp.data[0].name;
        // console.log({ name });
    });

</script>


<template>
    <ul>
        <li 
            v-for="{ char_id, name } of characters"
            :key="char_id"
        >

            {{ name }}
        </li>
        
    </ul>
</template>


<style scoped>

</style>