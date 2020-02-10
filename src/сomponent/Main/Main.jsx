import React from 'react';

import MainHeader from '../MainHeader';
import { BrowserRouter } from 'react-router-dom';
import Search from '../Search';
import Tab from '../../сontainer/Tab'

const Main = (props) => {

    return (
        <BrowserRouter>
            <MainHeader />
            <Search />
            <Tab />
        </BrowserRouter>
    )
}

export default Main;