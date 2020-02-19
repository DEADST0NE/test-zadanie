import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

import s from './Search.module.css'
 
import { getReportSearch, getReportSearchUpdate } from '../../redux/reportSearch/actions';

const Search = (props) => {
    
    return (
    <>
        <div className={s.inputGroup}>
            <div className={s.searchW}>
                <input onChange={ (el)=>{ props.getReportSearchUpdate(el.target.value)} } placeholder="Поиск" />  
                <NavLink onClick={ () => { props.getReportSearch(props.dataSelect) } } to="/search/">Найти</NavLink> 
            </div>
        </div> 
    </>
    )
}


const mapStateToProps = (state) => ({
    dataSelect: state.reducerSearch.dataSelect,
})

const mapDispatchToProps = {
    getReportSearch,
    getReportSearchUpdate
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
