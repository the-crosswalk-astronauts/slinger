import React, {Component} from 'react'
import DealDisplay from './DealDisplay';
import HomeLeftCol from './HomeLeftCol';
import CreateDeal from './CreateDeal';


export default class UserHome extends Component {
  render() {
    return (
      <div>
        UserHome
        <HomeLeftCol/>

        <DealDisplay/>

        <CreateDeal />
      </div>
    )
  }
}