import {
    REPORT_ITEM_GET_REQUEST,
    REPORT_ITEM_GET_SUCCESS,
    REPORT_ITEM_GET_ERROR
} from '../varActions';

const initialState = {
    reportData: null,
    loading: true,
    error: false
} 
const reducerReportItem = (state = initialState, action) => {
    switch(action.type){
        case REPORT_ITEM_GET_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case REPORT_ITEM_GET_SUCCESS: 
            return {
                ...state,
                reportData: action.payload,
                loading: false,
                error: false
            }

        case REPORT_ITEM_GET_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            }

        default: 
            return state;
    }
}

export default reducerReportItem;

