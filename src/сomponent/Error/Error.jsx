import React from 'react';

import ErrorImg from '../../img/ImgError';
import s from './Error.module.css';


const Error = (props) => { 
    return (
        <div className={s.contetError}> 
            <ErrorImg />
        </div>
    ) 
}

export default Error;