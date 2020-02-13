import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

import s from './Search.module.css'

import Report from '../../сontainer/Report'; 
import { getReportSearch } from '../../redux/reportSearch/actions';

const Search = (props) => {

    

    return (
    <>
        <div className={s.inputGroup}>
            <div className={s.searchW}>
                <input placeholder="Поиск" />  
                <NavLink onClick={ () => { props.getReportSearch('Гуниб') } } to="/search/">Найти</NavLink> 
            </div>
        </div>

        <Report />

    </>
    )
}


const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
    getReportSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
