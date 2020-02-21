import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
 
import s from './ItemTile.module.css'

import { getReportItem } from '../../redux/reportItem/actions'

import GroupImg from '../../img/GroupImg';
import ImgMasks from '../../img/ImgMasks'
import ImgComp from '../../img/ImgComp'
import ImgFinans from '../../img/ImgFinans'

const ItemTile = (props) => {

    let logo = null;
    
    switch(props.item.name){
        case 'Демография':
            logo = <GroupImg />;
            break;
        case 'Культура и досуг':
            logo = <ImgMasks />;
            break;
        case 'Экономика':
            logo = <ImgComp />;
            break;
        case 'Финансы и бюджет':
            logo = <ImgFinans />;
            break;
        default:
            break;
    }

    return (
        <NavLink className={s.tile} onClick={ () => { props.getReportItem(props.item.id) } } to={`/report/${props.item.id}`}>   
                {logo}
                    {props.item.name} 
                <span>
                    {props.item.countReports} 
                </span> 
        </NavLink>
    )
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = { 
    getReportItem,
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ItemTile);