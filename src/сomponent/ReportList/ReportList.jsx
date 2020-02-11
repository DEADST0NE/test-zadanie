import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './ReportList.module.css'


const ReportList = (props) => {

    let Report = props.data.map(item => (  <div className={s.reportlist}>
                                                {props.logo}
                                                    <div>
                                                        <h2>
                                                            <NavLink to={`\${item.id}`}> {item.reportName} </NavLink>
                                                        </h2> 
                                                            <NavLink className={s.aa} to="/">{item.organization}</NavLink>
                                                    </div>
                                            </div> ))

    return (
        {Report}
    )
}

export default ReportList;