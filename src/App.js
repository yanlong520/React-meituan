import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Nav from './components/Nav'
import NavContent from './components/NavContent'
import ShoppingCarView from './components/ShoppingCarView'
import BottomBar from './components/BottomBar'
import ListView from './components/ListView'
import DetailView from './components/DetailView'
import OutView from './components/OutView'




class App extends Component {
  render() {
    return (
      <Router>
        <div className='wrap'>
          <Nav></Nav>
          <div className='App-main-view'>
            <Route path='/' exact component={NavContent}></Route>
            <Route className='main-view' path='/' exact component={ListView}></Route>

            <Route className='main-view' path='/detail/:id' exact component={DetailView}></Route>
            <Route className='main-view' path='/shopping_car' exact component={ShoppingCarView}></Route>
            {/* <Route className='main-view' path='/out' exact component={OutView}></Route> */}
          </div>
          <Route path="/" exact component={BottomBar}></Route> 

        </div>
      </Router>
    );
  }
}

export default App;



//问题：在商品详情页如何在顶部的标题栏显示详情