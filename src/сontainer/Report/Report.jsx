import React from 'react';

import ReportList from '../../сomponent/ReportList';
import Error from '../../сomponent/Error'; 
import Spiner from '../../сomponent/Spiner';

import NoneInfo from '../../сomponent/NonInfo';

import s from './Report.module.css';
 
const Report = ({data, loading, error, bool=true}) => {

  if (loading === true){ return <Spiner /> }

  else if(error === true ){ return <Error /> }
  
  else if(data.length === 0) { return <NoneInfo /> }

  else{ 
    const listItem = data.map(item => ( <div className={s.reporttlist} key={item.id}>
                                                  <ReportList item={item}/>
                                        </div>)) 
  
    return (
        <div className={s.reportt}> 
          {bool ? <h1>{data[0].nameTitle}</h1> : void 0}
          {listItem}
        </div>
    )
  } 

}

export default Report;