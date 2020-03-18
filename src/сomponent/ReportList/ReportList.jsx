import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './ReportList.module.css'

import SvgCotegories from '../../img/SvgCotegories'; 

const ReportList = ({item}) => {
      
    return (
        <div className={s.reportlist}>            
             <SvgCotegories memo={item.mnemo}/>
                <div>
                    <h2> <NavLink to={`\${item.id}`}> {item.reportName} </NavLink> </h2> 

                    <NavLink className={s.aa} to="/">{item.organization}</NavLink>
                    <span>{item.period}</span>
                </div>
        </div> 
    )
}

export default ReportList;