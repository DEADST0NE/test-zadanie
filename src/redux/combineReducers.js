import { combineReducers } from 'redux';

import reducerCategories from './categories/reducer';
import reducerSearch from './reportSearch/reducer';
import reducerReportItem from './reportItem/reducer'

const reducers = combineReducers({
    reducerCategories,
    reducerSearch,
    reducerReportItem
});

export default reducers;