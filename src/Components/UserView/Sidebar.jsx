import React, { Component } from 'react'
import { deals } from '../../dummyData'


export default class Sidebar extends Component {
  render() {
    return (
      <div className='Sidebar'>
        <div className="search-hold">
          <input type="text" placeholder='Search your contracts' />
        </div>
        <div className="sidebar-cards-hold">
          {deals.map(element => (
            <div key={element.id} className='sidebar-card'>
              <p>{element.buyer}</p>
              <p>{element.address}</p>
            </div>
          ))}
        </div>
        <nav className="sidebar-nav-hold">
          <div className="sidebar-nav-item">home</div>
          <div className="sidebar-nav-item">add</div>
          <div className="sidebar-nav-item">vault</div>
          <div className="sidebar-nav-item">logout</div>
        </nav>
      </div>
    )
  }
}