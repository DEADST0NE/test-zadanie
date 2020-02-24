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

const getReportItemIndustryAxios = async (id) => {
     
        return await axios.get(`Reports/categories/search?IndustryId=${id}`)
        .then(response => response.data)
        .then((data) => { data[0].nameTitle = data[0].industry; return data } ) 
};

const getReportItemOrganizationAxios = async (id) => {
     
    return await axios.get(`Reports/categories/search?OrganizationId=${id}`)
    .then(response => response.data)
    .then((data) => { data[0].nameTitle = data[0].organization; return data } ) 
};
 
export const getReportItemIndustry = (id) => (dispatch) => { 
    dispatch(getReportItemRequest());
    getReportItemIndustryAxios(id)
    
      .then((data) => dispatch(getReportItemSuccess(data)))
      .catch((err) => dispatch(getReportItemError(err)))
};

export const getReportItemOrganization = (id) => (dispatch) => { 
    dispatch(getReportItemRequest());
    getReportItemOrganizationAxios(id)
    
      .then((data) => dispatch(getReportItemSuccess(data)))
      .catch((err) => dispatch(getReportItemError(err)))
};
  