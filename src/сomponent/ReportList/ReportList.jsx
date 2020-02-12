import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './ReportList.module.css'

import GroupImg from '../../img/GroupImg';
import ImgMasks from '../../img/ImgMasks'
import ImgComp from '../../img/ImgComp'

const selectLogo = (string) => {
    switch(string){
      case 'Демография':
        return <GroupImg />; 
      case 'Культура и досуг':
        return <ImgMasks />; 
      case 'Экономика':
        return <ImgComp />;
      default:
        return null; 
  }
}

const ReportList = (props) => {
      
    return (
        <div className={s.reportlist}>            
            {selectLogo(props.item.industry)}
                <div>
                    <h2> <NavLink to={`\${item.id}`}> {props.item.reportName} </NavLink> </h2> 

                    <NavLink className={s.aa} to="/">{props.item.organization}</NavLink>
                    <span>{props.item.period}</span>
                </div>
        </div> 
    )
}

export default ReportList;