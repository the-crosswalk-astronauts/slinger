import React, {Component} from 'react'
import {contracts} from './AndrewDummy/sidebarDummy'


export default class Sidebar extends Component {
  render() {
    return (
      <div className='Sidebar'>
        <div className="search-hold">
          <input type="text" placeholder='Search your contracts'/>
        </div>
        <div className="sidebar-cards-hold">
          {contracts.map(element => (
            <div className='sidebar-card'>
              <p>{element.buyer}</p>
              <p>{element.address}</p>
            </div>
          ))}
        </div>
        <div className="sidebar-nav-hold"></div>
      </div>
    )
  }
}