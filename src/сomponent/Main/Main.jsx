import React from 'react';

import MainHeader from '../MainHeader';
import { BrowserRouter, Route } from 'react-router-dom';
import Search from '../Search';
import Tab from '../../сontainer/Tab'

import ItemTileList from '../ItemTileList';

const Main = (props) => {

    const TestData = [
        {
          "id": 1,
          "name": "Демография",
          "countReports": 51,
          "mnemo": "demography"
        },
        {
          "id": 6,
          "name": "Культура и досуг",
          "countReports": 1,
          "mnemo": "culture"
        },
        {
          "id": 22,
          "name": "Экономика",
          "countReports": 115,
          "mnemo": "economy"
        }
      ]

    return (
        <BrowserRouter>
            <MainHeader />
            <Search />
            <Tab />
            <ItemTileList data={TestData}/>
        </BrowserRouter>
    )
}

export default Main;