import React from 'react';
import { NavLink } from 'react-router-dom';

import './MainHeader.module.css'
import LogoRD from '../../img/LogoRD';


const MainHeader = () => {
    return (
        <header>
            <NavLink to="/">
                <LogoRD />
                <span>Открытый Дагестан</span>
            </NavLink>
        </header>
    )
}

export default MainHeader;