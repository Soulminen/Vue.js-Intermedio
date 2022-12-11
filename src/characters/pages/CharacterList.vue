<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';

import breakingBadApi from '@/api/breakingBadApi';
import CardList from '@/characters/components/CardList.vue';

import type { Character } from '@/characters/interfaces/character';
import characterStore from '@/store/characters.store';

const props = defineProps<{ title: string, visible: boolean}>();

const getCharacters = async(): Promise<Character[]> => {
        const { data } = await breakingBadApi.get<Character[]>('/characters');
        return data.filter( character => ![14, 17, 39].includes(character.char_id) )
}


const { isLoading, data } = useQuery(
    ['characters'],
    getCharacters,
    {
        onSuccess( data ) {
            characterStore.loadedCharacters(data);
        },
    }
);




</script>


<template>

     <h1 v-if="characterStore.characters.isLoading">Loading...</h1>

     <template v-else>
     
        <h2>{{ props.title}}</h2>

        <CardList :characters="characterStore.characters.list" />

     </template>


</template>


<style scoped>

</style>