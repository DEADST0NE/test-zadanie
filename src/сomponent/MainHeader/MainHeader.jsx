import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

import s from './MainHeader.module.css'
import LogoRD from '../../img/LogoRD';

import { getReportSearchUpdate } from '../../redux/reportSearch/actions';

const MainHeader = ({...props}) => {
    return (
        <header className={s.header}>
            <NavLink to="/categories" onClick={ ()=>{getReportSearchUpdate('') }}>
                <LogoRD />
                <span>Открытый Дагестан</span> 
            </NavLink>
        </header>
    )
}

const mapStateToProps = (state) => ({ 
})

const mapDispatchToProps = { 
    getReportSearchUpdate
}
 
export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);