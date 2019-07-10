import React, { Component } from 'react';



export default class DealCard extends Component {
  render() {
    return (
      <div className="dealCard" onClick={() => this.props.fireUpdater(this.props.deleteId)
      }>

        <h2>Address:{this.props.address}</h2>
        <h2>Price:${this.props.price}</h2>
        

      </div>
    )
  }
}