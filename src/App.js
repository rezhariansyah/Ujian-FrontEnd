import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Product from './components/productList'
import ManageProduct from './components/admin/manageProduct'
import PageNotFound from './components/pageNotFound'
import ProductDetail from './components/productDetail'
import ScrollToTop from './components/scrollToTop'
import { Route ,withRouter, Switch } from 'react-router-dom' 
import {connect} from 'react-redux'
import cookie from 'universal-cookie'
import { keepLogin } from './1.actions'
import './App.css';
import scrollToTop from './components/scrollToTop';

// withRouter => Untuk tersambung ke Reducer dengan connect, 
// tapi di dalam komponen ada routing

const objCookie = new cookie()
class App extends Component {
  componentDidMount(){ //supaya ketriger dikomponent manapun setiap reload
    var terserah = objCookie.get('userData')
    if(terserah !== undefined){ //cookie jalan apabila login
      this.props.keepLogin(terserah)
    }
  }
  
  render() {
    return (
      <div>
          <Navbar/>
          <scrollToTop>
            <Switch>            
                <Route path='/' component={Home} exact/>
                <Route path='/login' component={Login} exact/>
                <Route path='/register' component={Register} exact/>
                <Route path='/product' component={Product} exact/>
                <Route path='/manage' component={ManageProduct} exact/>
                <Route path='/productDetail/:id' component={ProductDetail} exact/>
                <Route path='*' component={PageNotFound} exact/>              
            </Switch>
          </scrollToTop>
      </div>
    );
  }
}

export default withRouter(connect(null , {keepLogin})(App));
