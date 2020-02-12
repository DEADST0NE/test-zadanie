import { combineReducers } from 'redux';

import reducerCategories from './categories/reducer';

const reducers = combineReducers({
    reducerCategories,
});

export default reducers;