import React from 'react';

import MainHeader from '../MainHeader';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Search from '../Search';
import Tab from '../../сontainer/Tab'
 
import Report from '../../сontainer/Report';
  
const Main = (props) => {

    return (
        <BrowserRouter>
            <MainHeader />
            
            <Redirect to="/сategories/industries/"/>

            <Route path="/сategories/" component={() => <Search /> }/>
            <Route path="/сategories/" component={() => <Tab /> }/>
            <Route path="/report/" component={() => <Report /> }/>

            <Route path="/select/" component={() => <Report /> }/>

        </BrowserRouter>
    )
}

export default Main;