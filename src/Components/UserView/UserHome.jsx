import React, {Component} from 'react'
import DealDisplay from './DealDisplay';
import HomeLeftCol from './Sidebar';


export default class UserHome extends Component {
  
  render() {
    

    return (
      <div>

        <HomeLeftCol/>

        <DealDisplay/>


      </div>
    )
  }
}