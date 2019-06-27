import React, { Component } from 'react'


export default class CreateDealInput extends Component {
  render() {
    return (
      <div className="contactform">
        <h2>{this.props.title} Contact info</h2>

        <input type="text" required 
        name={`${this.props.title}Name`} placeholder={`${this.props.title} Name`} onChange={this.props.inputHandler}/>

        <input type="email" required 
        name={`${this.props.title}Email`} placeholder={`${this.props.title} Email`} onChange={this.props.inputHandler}/>

        <input type="number" required 
        name={`${this.props.title}Phone`} 
        placeholder={`${this.props.title} Phone Number`} onChange={this.props.inputHandler}/>

      </div>

    )
  }
}