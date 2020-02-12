import {
    CATEGORIES_GET_REQUEST,
    CATEGORIES_GET_SUCCESS,
    CATEGORIES_GET_ERROR
} from '../varActions';

const initialState = {
    categories: null,
    loading: true,
    error: false
} 
const reducerCategories = (state = initialState, action) => {
    switch(action.type){
        case CATEGORIES_GET_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case CATEGORIES_GET_SUCCESS: 
            return {
                ...state,
                categories: action.payload,
                loading: false,
                error: false
            }

        case CATEGORIES_GET_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            }

        default: 
            return state;
    }
}

export default reducerCategories;

