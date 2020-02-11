import axios from '../../axios';

import {
    CATEGORIES_GET_REQUEST,
    CATEGORIES_GET_SUCCESS,
    CATEGORIES_GET_ERROR,
 } from '../varActions';

 const getCategoriesRequest = () => ({
    type: CATEGORIES_GET_REQUEST
 });

const getCategoriesSuccess = (items) => ({
    type: CATEGORIES_GET_SUCCESS,
    payload: items
});

const getCategoriesError = (error) => ({
    type: CATEGORIES_GET_ERROR,
    payload: error
});

const getCategoriesAxios = async () => {
    return await axios.get(`Reports/categories`)
      .then(response => response.data)
};

export const getCategories = () => (dispatch) => {
    dispatch(getCategoriesRequest());
    getCategoriesAxios()
      .then((data) => dispatch(getCategoriesSuccess(data)))
      .catch((err) => dispatch(getCategoriesError(err)));
};
  