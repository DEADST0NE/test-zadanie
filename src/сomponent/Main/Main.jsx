import React from 'react';

import MainHeader from '../MainHeader';
import { BrowserRouter, Route } from 'react-router-dom';
import Search from '../Search';

const Main = (props) => {
    return (
        <BrowserRouter>
            <MainHeader />
            <Search />
        </BrowserRouter>
    )
}

export default Main;