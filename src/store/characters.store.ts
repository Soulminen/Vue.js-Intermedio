import { Character } from '@/characters/interfaces/character';


interface Store {
    characters: {
        list: Character[];
        count: number;
        isLoading: boolean;
        hasErro: boolean;
        errorMessage: string | null;     
    },

    // Metodos
    startLoadingCharacters: () => void;
    loadedCharacters: ( data: Character[] ) => void;
    loadedCharactersFailed: ( error: string ) => void;

}