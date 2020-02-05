import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import s from './ItemTileList.module.css';
import ItemTile from '../ItemTile'


const ItemTileList = (props) => {

    const Tile = props.data.map(item => (<Col lg="4" key={item.id}>
                                            <ItemTile item={item} />
                                        </Col>)) 
    return (
        <Row className={s.itemList}>
            { Tile }
        </Row>  
    )
}

export default ItemTileList;

