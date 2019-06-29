import React, {Component} from 'react'


export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.type}</h2>
        
        <p>{this.props.phone}</p>
        <p>{this.props.email}</p>


      </div>
    )
  }
}