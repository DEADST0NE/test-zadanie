import axios from '../../axios';

import {
    REPORT_ITEM_GET_REQUEST,
    REPORT_ITEM_GET_SUCCESS,
    REPORT_ITEM_GET_ERROR,
 } from '../varActions';

 const getReportItemRequest = () => ({
    type: REPORT_ITEM_GET_REQUEST
 });

const getReportItemSuccess = (items) => ({
    type: REPORT_ITEM_GET_SUCCESS,
    payload: items
});

const getReportItemError = (error) => ({
    type: REPORT_ITEM_GET_ERROR,
    payload: error
});

const getReportItemAxios = async (id) => {
    
    if(String(id).length<5){
        return await axios.get(`Reports/categories/search?IndustryId=${id}`)
        .then(response => response.data)
    }
    else{
        return await axios.get(`Reports/categories/search?OrganizationId=${id}`)
        .then(response => response.data)
    }
};

export const getReportItem = (id) => (dispatch) => {
    dispatch(getReportItemRequest());
    getReportItemAxios(id)
      .then((data) => dispatch(getReportItemSuccess(data)))
      .catch((err) => dispatch(getReportItemError(err)))
};
  