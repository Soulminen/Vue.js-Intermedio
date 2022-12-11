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
    startLoadingCharacters() {
        // console.log('Start Loading Characters');
    },
    loadedCharacters( data: Character[] ) {
        this.characters = {
            count: data.length,
            errorMessage: null,
            hasError: false,
            isLoading: false,
            list: data,
        }
    },
    loadedCharactersFailed( error: string ) {

    }

});

characterStore.startLoadingCharacters();





export default characterStore;