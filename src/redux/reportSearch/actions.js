import axios from '../../axios';

import {
    REPORT_SEARCH_GET_REQUEST,
    REPORT_SEARCH_GET_SUCCESS,
    REPORT_SEARCH_GET_ERROR,
    REPORT_SEARCH_UPDATE,
} from '../varActions';

const getReportSearchRequest = () => ({
    type: REPORT_SEARCH_GET_REQUEST
 });

const getReportSearchSuccess = (items) => ({
    type: REPORT_SEARCH_GET_SUCCESS,
    payload: items
});

const getReportSearchError = () => ({
    type: REPORT_SEARCH_GET_ERROR,
    payload: true
});

export const getReportSearchUpdate = (date) => ({
    type: REPORT_SEARCH_UPDATE,
    payload: date,
})

const getReportSearchAxios = async (testSeach) => {
    return await axios.get(`Reports/categories/search?SearchText=${testSeach}`)
      .then(response => response.data)
};

export const getReportSearch = (testSeach) => (dispatch) => {
    console.log(testSeach);
    dispatch(getReportSearchRequest());
    getReportSearchAxios(testSeach)
      .then((data) => dispatch(getReportSearchSuccess(data)))
      .catch((err) => dispatch(getReportSearchError()));
};