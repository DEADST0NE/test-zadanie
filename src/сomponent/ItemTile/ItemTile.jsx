import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './ItemTile.module.css'

import GroupImg from '../../img/GroupImg';
import ImgMasks from '../../img/ImgMasks'
import ImgComp from '../../img/ImgComp'

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
        default:
            break;

    }

    return (
        <NavLink className={s.tile} to={`/${props.item.mnemo}`}>   
                {logo}
                    {props.item.name} 
                <span>
                    {props.item.countReports} 
                </span> 
        </NavLink>
    )
}

export default ItemTile;