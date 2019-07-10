import React from 'react'
import { Route, Switch } from "react-router-dom";
import UserHome from './Components/UserView/UserHome'
import Splash from './Components/PublicView/HomePage/Splash'
import CreateDeal from './Components/UserView/Wizard/CreateDeal';
import IndividualDeal from './Components/UserView/IndividualDeal/IndividualDeal'
import Vault from './Components/UserView/Vault/Vault'
export default (
  <Switch>

  <Route  exact path='/' component={Splash} />
  <Route  path='/UserHome' component={UserHome} />
  <Route  path='/dealWizard' component={CreateDeal} />
  <Route  path='/Vault' component={Vault} />
  
  {/* this path will not go to production, it's just so I can work on the component */}
  <Route  path='/individualDeal' component={IndividualDeal}/>
  {/* 
  <Route  path='/' component={} />
  <Route  path='/' component={} />
 */}


  </Switch>
)