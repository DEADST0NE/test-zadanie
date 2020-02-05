import React from 'react';
import Tabss from 'react-bootstrap/Tabs';
import Tabb from 'react-bootstrap/Tab';

import './Tab.css';

const Tab = (props) => {
    return (
        <div className='categories'>
            <Tabss defaultActiveKey="industries" justify>
                <Tabb eventKey="industries" title="По отраслям">
                    sadas
                </Tabb>

                <Tabb eventKey="organizations" title="По ведомствам">
                    adsad
                </Tabb>
            </Tabss>
        </div>
    )
}

export default Tab; 