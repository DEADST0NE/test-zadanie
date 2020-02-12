import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './ReportList.module.css'


const ReportList = (props) => {
      
    return (
        <div className={s.reportlist}>            
            {props.logo}
                <div>
                    <h2> <NavLink to={`\${item.id}`}> {props.item.reportName} </NavLink> </h2> 

                    <NavLink className={s.aa} to="/">{props.item.organization}</NavLink>
                </div>
        </div> 
    )
}

export default ReportList;