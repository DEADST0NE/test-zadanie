import React from 'react';
import { NavLink } from 'react-router-dom'; 
 
import s from './ItemTile.module.css'
 
import SvgCotegories from '../../img/SvgCotegories'; 

const ItemTile = ({item, fun}) => {
 
    

    return (<>
            <NavLink className={s.tile} onClick={ () => { fun(item.id) } } to={`/report/${item.id}`}>   
                <SvgCotegories memo={item.mnemo}/>
                {item.name}  
            </NavLink>
            <span className={s.countReports}>
                {item.countReports} 
            </span> 
        </>
    )
}

export default ItemTile;