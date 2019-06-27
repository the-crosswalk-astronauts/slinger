import React from 'react'
import { Route, Switch } from "react-router-dom";
import UserHome from './Components/UserHome'
import Splash from './Components/Splash'
import CreateDeal from './Components/CreateDeal';

export default (
  <Switch>

  <Route  exact path='/' component={Splash} />
  <Route  path='/UserHome' component={UserHome} />
  <Route  path='/dealWizard' component={CreateDeal} />
  {/* 
  <Route  path='' component={}/>
  <Route  path='/' component={} />
  <Route  path='/' component={} />
  <Route  path='/' component={} />
 */}


  </Switch>
)