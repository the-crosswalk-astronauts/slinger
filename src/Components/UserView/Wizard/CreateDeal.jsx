import React, { Component } from 'react'
import CreateDealInput from './CreateDealInput';

// So there's a really bad thing in this component- Before pushing to production, initialize state as blank strings/numbers...for all 5,000 inputs. 


export default class CreateDeal extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()


  }

  // the idea of this component is to create a deal- the user inputs all of the "hotsheet" info so that they can see it in an at-a glance somewhere else in the app. 




  render() {
    return (
      <div>
        Create Deal


        <div className="dealWizard">

          <div className="dealInfoHolder">

            <h2>Property Address</h2>
            <input type="text" placeholder="Property Address" required onChange={this.changeHandler} />

            <h2>MLS number</h2>
            <input type="number" placeholder="mls number" required onChange={this.changeHandler} />


          </div>

          <CreateDealInput title="buyer" inputHandler={this.changeHandler} />
          <CreateDealInput title="lender" inputHandler={this.changeHandler} />
          <CreateDealInput title="title" inputHandler={this.changeHandler} />
          <CreateDealInput title="listingAgent" inputHandler={this.changeHandler} />


          <div className="dealInfoHolder">

            <h2>Seller Disclosure Deadline</h2>
            <input type="date" required name='SDDeadline' onChange={this.changeHandler} />

            <h2>Buyer Due Diligence Deadline</h2>
            <input type="date" required name='BDDDeadline' onChange={this.changeHandler} />

            <h2>Financing/Appraisal Deadline</h2>
            <input type="date" required name='FADeadline' onChange={this.changeHandler} />

            <h2>Settlement Deadline</h2>
            <input type="date" required name='CDeadline' onChange={this.changeHandler} />

          </div>


          <div className="dealInfoHolder">

            <h2>Purchase Price</h2>
            <input type='number' required name='price' placeholder="250000" onChange={this.changeHandler} />

            <h2>Commission</h2>
            <input type='number' required name='commission' placeholder='commission' onChange={this.changeHandler} />

            <h2>Earnest Money</h2>
            <input type='number' required name='em' placeholder='Earnest Money' onChange={this.changeHandler} />

          </div>

          <button onClick={this.submitHandler}>Create Deal</button>
        </div>

      </div>
    )
  }
}