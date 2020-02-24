import React from 'react';
import { NavLink } from 'react-router-dom'; 
 
import s from './ItemTile.module.css'
 
import GroupImg from '../../img/GroupImg';
import ImgMasks from '../../img/ImgMasks'
import ImgComp from '../../img/ImgComp'
import ImgFinans from '../../img/ImgFinans'

const ItemTile = (props) => {

    let logo = null;
    let color = s.tileRed;
    switch(props.item.name){
        case 'Демография':
            logo = <GroupImg />;
            color=s.tileBlue;
            break;
        case 'Культура и досуг':
            logo = <ImgMasks />;
            color=s.tileBlue;
            break;
        case 'Экономика':
            logo = <ImgComp />;
            color=s.tileBlue;
            break;
        case 'Финансы и бюджет':
            logo = <ImgFinans />;
            color=s.tileBlue;
            break;
        default:
            break;
    }

    const click = (id) => {
        props.fun(id);
    }

    return (
        <NavLink className={`${s.tile} ${color}`} onClick={ () => { click(props.item.id) } } to={`/report/${props.item.id}`}>   
                {logo}
                    {props.item.name} 
                <span>
                    {props.item.countReports} 
                </span> 
        </NavLink>
    )
}

export default ItemTile;