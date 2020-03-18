import React from 'react'; 

import s from './ItemTileList.module.css';
import ItemTile from '../ItemTile'


const ItemTileList = ({data, color, fun}) => {
    
    switch(color){
        case'red': 
            color = s.tileRed;
            break;
        case'blue':
            color = s.tileBlue;
            break;
        default:
            color = s.tileRed;
            break;
    } 

    const Tile = data.map(item => (<div className={`${s.itemMb} ${color}`} key={item.id}>
                                            <ItemTile fun={ fun } item={ item } />
                                        </div>)) 
    return (
        <div className={s.itemList}>
            { Tile }
        </div>  
    )
}

export default ItemTileList;

