import React from 'react';

import ReportList from '../../сomponent/ReportList';
import Error from '../../сomponent/Error'; 
import Spiner from '../../сomponent/Spiner';

import s from './Report.module.css'
 
const Report = ({data, loading, error}) => {

  if (loading === true){ return <Spiner /> }

  else if(error === true || data === '' || data === null){ return <Error /> }
  
  else{ 
    const listItem = data.map(item => ( <div className={s.reporttlist} key={item.id}>
                                                  <ReportList item={item}/>
                                        </div>)) 
  
    return (
        <div className={s.reportt}> 
          <h1>{data[0].industry}</h1>
          {listItem}
        </div>
    )
  } 

}

export default Report;