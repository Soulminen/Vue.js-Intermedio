<script setup lang="ts">
import { ref } from "vue";
import breakingBadApi from '@/api/breakingBadApi';
import type { Character } from '@/characters/interfaces/character';
import { useCharacters } from '@/characters/composables/useCharacters';

// const { data: characters } = await breakingBadApi.get<Character[]>('/characters');

const { isLoading, characters} = useCharacters();


</script>


<template>
    <h1 v-if="isLoading">Loading...</h1>
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