import { BrBadAPI } from "../components/api/api";

const SET_CHARACTERS = 'samurai-network/breakingBad/SET_CHARACTERS';
const SET_IS_FETCHING = 'samurai-network/breakingBad/SET_IS_FETCHING';
const SET_RANDOM_CHARACTERS = 'samurai-network/breakingBad/SET_RANDOM_CHARACTERS';
const SET_IS_FETCHING_CARD = 'samurai-network/breakingBad/SET_IS_FETCHING_CARD';
const SET_PARTICULAR_CHARACTER = 'samurai-network/breakingBad/SET_PARTICULAR_CHARACTER';
const SET_IS_FETCHING_CHARACTER = 'samurai-network/breakingBad/SET_IS_FETCHING_CHARACTER';



let initialState = {
    characters: [],
    pageSize: 10,
    charactersCount: 10,
    currentPage: 1,
    isFetching: false,
    isFetchingCard: false,
    isFetchingCharacter: false,
    randomCharacters: [],
    partCharacter: [{
        char_id: 23,
        name: "Andrea Cantillo",
        birthday: "Unknown",
        occupation: ["Unknown"],
        img: "https://vignette.wikia.nocookie.net/Brbad/images/5/51/Andrea_-_To%27hajilee.png/revision/latest?cb=20131025094457",
        status: "Deceased",
        nickname: "Andrea",
        appearance: [3, 4, 5],
        portrayed: "Emily Rios",
        category: "Br Bad",
        better_call_saul_appearance: []
    }]
}



const brBadReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHARACTERS: {
            return {
                ...state,
                characters: [...action.characters],
                currentPage: action.currentPage
            }
        }
        case SET_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_RANDOM_CHARACTERS: {
            return {
                ...state,
                randomCharacters: action.randomCharacters
            }
        }
        case SET_PARTICULAR_CHARACTER: {
            return {
                ...state,
                partCharacter: {...action.partCharacter}
            }
        }
        case SET_IS_FETCHING_CHARACTER: {
            return {
                ...state,
                isFetchingCharacter: action.isFetchingCharacter
            }
        }
        default:
            return state;
    }
}




export const setCharactersAC = (characters, currentPage) => ({ type: SET_CHARACTERS, characters, currentPage });
export const setIsFetchingAC = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });
export const setRandomCharactersAC = (randomCharacters) => ({ type: SET_RANDOM_CHARACTERS, randomCharacters });
export const setIsFetchingCardAC = (isFetching) => ({ type: SET_IS_FETCHING_CARD, isFetching });
export const setParticularCharacterAC = (partCharacter) => ({ type: SET_PARTICULAR_CHARACTER, partCharacter });
export const setIsFetchingCharacterAC = (isFetchingCharacter) => ({ type: SET_IS_FETCHING_CHARACTER, isFetchingCharacter });



export const getCharactersTC = (pageSize, currentPage) => async (dispatch) => {
    dispatch(setIsFetchingAC(true))
    let data = await BrBadAPI.getCharacters(pageSize, currentPage - 1);
    dispatch(setIsFetchingAC(false))
    dispatch(setCharactersAC(data, currentPage));
}
export const getRandomCharactersTC = () => async (dispatch) => {
    dispatch(setIsFetchingCardAC(true))
    let data = await BrBadAPI.getRandomCharacters();
    dispatch(setIsFetchingCardAC(false))
    dispatch(setRandomCharactersAC(data));
}
export const getParticularCharacterTC = (id) => async (dispatch) => {
    dispatch(setIsFetchingCharacterAC(true))
    let data = await BrBadAPI.getParticularCharacter(id);
    dispatch(setIsFetchingCharacterAC(false))
    dispatch(setParticularCharacterAC(data));
}




export default brBadReducer; 