import breakingBadApi from '@/api/breakingBadApi';
import type { Character } from '@/characters/interfaces/character';
import { reactive } from "vue";


interface Store {
    characters: {
        list: Character[];
        count: number;
        isLoading: boolean;
        hasError: boolean;
        errorMessage: string | null;     
    },

    // Metodos
    startLoadingCharacters: () => void;
    loadedCharacters: ( data: Character[] ) => void;
    loadedCharactersFailed: ( error: string ) => void;
}


// Initial State
const characterStore = reactive<Store>({
    characters: {
        count: 0,
        errorMessage: null,
        hasError: false,
        isLoading: true,
        list: []
    },

    // Métodos
    async startLoadingCharacters() {
        const { data } = await breakingBadApi.get<Character[]>('/characters');
        this.loadedCharacters( data );
    },
    loadedCharacters( data: Character[] ) {

        const characters = data.filter( character => ![14, 17, 39].includes(character.char_id) );

        this.characters = {
            count: characters.length,
            errorMessage: null,
            hasError: false,
            isLoading: false,
            list: characters,
        }
    },
    loadedCharactersFailed( error: string ) {

    }

});

characterStore.startLoadingCharacters();





export default characterStore;