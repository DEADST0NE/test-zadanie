import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { NavLink, Route } from 'react-router-dom';

import s from './Tab.module.css';
import ItemTileList from '../../сomponent/ItemTileList'
import { getCategories } from '../../redux/categories/actions';
import Spiner from '../../сomponent/Spiner';
import Error from '../../сomponent/Error';

const Tab = (props) => {

    useEffect(() => {
       props.getCategories()
    },[]);
  
    if(props.loading){
      return (<Spiner />)
    }

    else if(props.error){
      return (<Error />)
    }  

    else {return (
        <div className={s.categories}> 

          <div className={s.tab}>
            <nav>
              <NavLink to="/сategories/industries/" activeClassName={s.active}>По отраслям</NavLink>
              <NavLink to="/сategories/organizations/" activeClassName={s.active}>По ведомствам</NavLink>
            </nav>
          </div>

          <div className={s.tabContent}> 
            <Route path="/сategories/industries/" component={() => <ItemTileList data={props.categories.industries}/> }/>
            <Route path="/сategories/organizations/" component={() => <ItemTileList data={props.categories.organizations}/>} />
          </div> 

        </div>
    )}
} 

const mapStateToProps = (state) => ({
  categories: state.reducerCategories.categories,
  loading: state.reducerCategories.loading,
  error: state.reducerCategories.error,
})
  
const mapDispatchToProps = {
  getCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(Tab);
 