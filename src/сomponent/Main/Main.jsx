import React from 'react';

import MainHeader from '../MainHeader';
import { BrowserRouter } from 'react-router-dom';
import Search from '../Search';
import Tab from '../../сontainer/Tab'



//import Report from '../../сontainer/Report';
//import Error from '../Error';

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