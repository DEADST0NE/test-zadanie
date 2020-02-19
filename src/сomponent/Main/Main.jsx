import React from 'react';
import {connect} from 'react-redux';


import MainHeader from '../MainHeader';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Search from '../Search';
import Tab from '../../сontainer/Tab'
 
import Report from '../../сontainer/Report';
  
const Main = (props) => {

    return (
        <BrowserRouter>
            <MainHeader />
            
            <Redirect to="/categories/industries/"/>

            <Search />
            <Route path="/categories/" component={() => <Tab /> }/>

            <Route path="/report/" component={() => <Report /> }/>

            <Route path="/search/" component={() => <Report data={props.SearchDate} loading={props.SearchLoading} error={props.SearchError}/> }/>

        </BrowserRouter>
    )
}

const mapStateToProps = (state) => ({
    SearchDate: state.reducerSearch.report,
    SearchError: state.reducerSearch.error,
    SearchLoading: state.reducerSearch.loading,
})

const mapDispatchToProps = { 
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Main);