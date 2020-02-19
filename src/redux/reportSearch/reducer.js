import {
    REPORT_SEARCH_GET_REQUEST,
    REPORT_SEARCH_GET_SUCCESS,
    REPORT_SEARCH_GET_ERROR,
    REPORT_SEARCH_UPDATE,
} from '../varActions';

const initialState ={
    dataSelect: null,
    report: null,
    loading: true,
    error: false
}; 
 
const reducerSearch = (state = initialState, action) => {
    switch(action.type){
        case REPORT_SEARCH_GET_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case REPORT_SEARCH_GET_SUCCESS: 
            console.log(action.payload)
            return {
                ...state,
                report: action.payload,
                loading: false,
                error: false
            }

        case REPORT_SEARCH_GET_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            }
        case REPORT_SEARCH_UPDATE: 
        return {
            ...state,
            dataSelect: action.payload,
        }

        default: 
            return state;
    }
}

export default reducerSearch;