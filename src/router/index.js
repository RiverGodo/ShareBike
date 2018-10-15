import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from '../views/home'
import Admin from '../views/admin'
import NotMatch from '../views/notMatch'
import OrederDemo from '../views/order_demo'
import BarDemo from '../views/echarts/bar_demo'
import PieDemo from '../views/echarts/pie_demo'
import OrderDetails from '../views/order_demo/details'



 class Router extends Component {
 
  render() {
    return (
       <BrowserRouter>
        <div>
          <Switch>
            <Route path='/common/order/detail/:detailid' component={OrderDetails}></Route>
          <Route path='/admin' render={()=>
            <Admin>
                <Switch>
                  <Route path='/admin/home'  component={Home}/>
                  <Route path='/admin/order_demo'  component={OrederDemo}/>
                  <Route path='/admin/echarts/bar_demo'  component={BarDemo}/>
                  <Route path='/admin/echarts/pie_demo'  component={PieDemo}/>
                  <Route component={NotMatch}/>
                </Switch>
              </Admin>
          }/>
          <Route component={NotMatch}/>
          </Switch>
        </div>
       </BrowserRouter>
  
    )
  }
}

export default Router