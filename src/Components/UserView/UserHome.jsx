import React, {Component} from 'react'
import DealDisplay from './DealDisplay';
import Sidebar from './Sidebar';


export default class UserHome extends Component {
  
  render() {
    

    return (
      <div className='UserHome'>
        <Sidebar/>
        <DealDisplay/>
      </div>
    )
  }
}