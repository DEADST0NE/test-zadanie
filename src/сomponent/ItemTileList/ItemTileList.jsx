import React from 'react'; 

import s from './ItemTileList.module.css';
import ItemTile from '../ItemTile'


const ItemTileList = ({data, color, fun}) => {
     
    color === 'red' ? color = s.tileRed : color = s.tileBlue;
 
    return (
        <div className={s.itemList}>
            { data.map(item => (<div className={`${s.itemMb} ${color}`} key={item.id}>
                                    <ItemTile fun={ fun } item={ item } />
                                </div>)) }
        </div>  
    )
}

export default ItemTileList;

