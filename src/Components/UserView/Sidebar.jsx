import React, { Component } from 'react'
import { deals } from '../../dummyData'
import { updateDealDisplay } from '../../Redux/store'
import { connect } from 'react-redux'

class Sidebar extends Component {
  state = {
    searchText: ''
  }

  changeHandler = (e) => {
    this.setState({
      searchText: e.target.value
    })
  }

  render() {
    return (
      <div className='Sidebar'>
        <div className="search-hold">
          <input type="text" placeholder='Search your contracts' onChange={this.changeHandler} />
        </div>
        <div className="sidebar-cards-hold">
          {deals.filter((el,i)=>{
            return el.address.toLowerCase().includes(this.state.searchText.toLowerCase())
          }).map(element => (    
         <div key={element.id} className='sidebar-card' onClick={() => this.props.updateDealDisplay(element.id)}>
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

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = {
  updateDealDisplay
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)