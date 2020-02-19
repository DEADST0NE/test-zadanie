import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './MainHeader.module.css'
import LogoRD from '../../img/LogoRD';


const MainHeader = () => {
    return (
        <header className={s.header}>
            <NavLink to="/categories/industries/">
                <LogoRD />
                <span>Открытый Дагестан</span> 
            </NavLink>
        </header>
    )
}

export default MainHeader;