import React from 'react'; 

import s from './ItemTileList.module.css';
import ItemTile from '../ItemTile'


const ItemTileList = (props) => {

    const Tile = props.data.map(item => (<div className={s.itemMb} key={item.id}>
                                            <ItemTile item={item} />
                                        </div>)) 
    return (
        <div className={s.itemList}>
            { Tile }
        </div>  
    )
}

export default ItemTileList;

