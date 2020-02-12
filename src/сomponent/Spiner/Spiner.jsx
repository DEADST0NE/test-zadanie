import React  from 'react'; 

import s from './Spiner.module.css';

const Spinner = () => {
    
      return(
       <div className={s.mainspinner}>
         <span className={s.spinner}></span>  
       </div>
      );
  }

export default Spinner