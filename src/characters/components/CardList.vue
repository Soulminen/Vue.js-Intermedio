<script setup lang="ts">
import { ref } from "vue";
import breakingBadApi from '@/api/breakingBadApi';
import type { Character } from '@/characters/interfaces/character';
import { useCharacters } from '@/characters/composables/useCharacters';
import { useQuery } from "@tanstack/vue-query";

//! 1- Normal suspense
// const { data: characters } = await breakingBadApi.get<Character[]>('/characters');
// const characters = ref<Character[]>( data );

//! 2- Composable functions
// const { isLoading, characters, hasError, errorMessage } = useCharacters();

//! 3- TanStack.Query
const getCharactersSlow = async():Promise<Character[]> => {
    const { data } = await breakingBadApi.get<Character[]>('/characters');
    return data;
}
const { isLoading, isError, data: characters, error} = useQuery(
    ['characters'],
    getCharactersSlow,
);


</script>


<template>
    <h1 v-if="isLoading">Loading...</h1>
    <h1 v-if="isError">{{ error }}</h1>
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