import React, { useEffect } from 'react';
import {connect} from 'react-redux'; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import s from './Tab.module.css';
import ItemTileList from '../../сomponent/ItemTileList'
import { getCategories } from '../../redux/categories/actions';

import { getReportItemIndustry, getReportItemOrganization } from '../../redux/reportItem/actions'

import Spiner from '../../сomponent/Spiner';
import Error from '../../сomponent/Error';

const TabCategories = ( {getCategories, getReportItemIndustry, getReportItemOrganization, categories, loading, error}) => {
 
    useEffect(() => {
      const GetCategories = getCategories;
      GetCategories();
    },[getCategories]);

    if(loading){
      return <Spiner /> 
    }
    else if (error){
      return <Error />
    }

    else{
      return (
          <div className={s.categories}> 
          
            <Tabs selectedTabClassName={s.active}>
              <TabList>  
                <div className={s.tab}> 
                    <Tab >По отраслям</Tab>
                    <Tab >По ведомствам</Tab> 
                </div>
              </TabList>
             
              <div className={s.tabContent}> 
              <TabPanel> <ItemTileList fun={ (id) => { getReportItemIndustry(id) } } data={categories.industries} color={'blue'}/></TabPanel>
              <TabPanel> <ItemTileList fun={ (id) => { getReportItemOrganization(id) } }  data={categories.organizations} color={'red'}/> </TabPanel> 
              </div> 

            </Tabs>
          </div> 
      )
    }
} 

const mapStateToProps = (state) => ({
  categories: state.reducerCategories.categories,
  loading: state.reducerCategories.loading,
  error: state.reducerCategories.error,
})
  
const mapDispatchToProps = {
  getCategories,
  getReportItemIndustry,
  getReportItemOrganization
}

export default connect(mapStateToProps, mapDispatchToProps)(TabCategories);
 