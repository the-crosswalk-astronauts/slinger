import React, {Component} from 'react'
import Sidebar from './Sidebar';
import IndividualDeal from './IndividualDeal/IndividualDeal'

export default class UserHome extends Component {
  
  render() {
    

    return (
      <div className='UserHome'>
        <Sidebar/>
        <IndividualDeal/>
      </div>
    )
  }
}