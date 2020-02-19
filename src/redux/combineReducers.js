import { combineReducers } from 'redux';

import reducerCategories from './categories/reducer';
import reducerSearch from './reportSearch/reducer';

const reducers = combineReducers({
    reducerCategories,
    reducerSearch
});

export default reducers;