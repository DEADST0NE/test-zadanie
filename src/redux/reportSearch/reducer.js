import {
    REPORT_GET_REQUEST,
    REPORT_GET_SUCCESS,
    REPORT_GET_ERROR,
} from '../varActions';

const initialState ={
    report: null,
    loading: true,
    error: false
}; 
 
const reducerSearch = (state = initialState, action) => {
    switch(action.type){
        case REPORT_GET_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case REPORT_GET_SUCCESS: 
            return {
                ...state,
                report: action.payload,
                loading: false,
                error: false
            }

        case REPORT_GET_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            }

        default: 
            return state;
    }
}

export default reducerSearch;