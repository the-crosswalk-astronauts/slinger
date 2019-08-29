import React, { Component } from "react";
import CreateDealInput from "./CreateDealInput";
import ChecklistMaker from "./ChecklistMaker";
// So there's a really bad thing in this component- Before pushing to production, initialize state as blank strings/numbers...for all 5,000 inputs.

export default class CreateDeal extends Component {
  constructor() {
    super();
    this.state = {
      selectorValue: "defaultSeller",
      checklistMaker: false
    };
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
  };

  // the idea of this component is to create a deal- the user inputs all of the "hotsheet" info so that they can see it in an at-a glance somewhere else in the app.

  //they can also make a custom checklist, save it, then select one to use when they create a deal.

  render() {
    return (
      <div>
        <ChecklistMaker className={this.state.checklistMaker?'showMaker':'hidden'}/>

        <h1>Create Deal</h1>

        <div className="dealWizard">
          <div className="dealInfoHolder">
            <h2>Please select a checklist to use for this deal</h2>
            <button onClick={this.togglePopUp}>create checklist</button>
            {/* there will ahve to be an api call on this page to get the user's custom lists and then map them into the options section */}

            <select
              value={this.state.selectorValue}
              name="selectorValue"
              onChange={e => {
                this.setState({
                  selectorValue: e.target.value
                });
              }}
            >
              <option value="defaultBuyer">Default Buyer</option>
              <option value="defaultSeller">Default Seller</option>
            </select>
          </div>

          <div className="dealInfoHolder">
            <h2>Property Address</h2>
            <input
              type="text"
              placeholder="Property Address"
              required
              onChange={this.changeHandler}
            />

            <h2>MLS number</h2>
            <input
              type="number"
              placeholder="mls number"
              required
              onChange={this.changeHandler}
            />
          </div>

          <CreateDealInput title="buyer" inputHandler={this.changeHandler} />
          <CreateDealInput title="lender" inputHandler={this.changeHandler} />
          <CreateDealInput title="title" inputHandler={this.changeHandler} />
          <CreateDealInput
            title="listingAgent"
            inputHandler={this.changeHandler}
          />

          <div className="dealInfoHolder">
            <h2>Seller Disclosure Deadline</h2>
            <input
              type="date"
              required
              name="SDDeadline"
              onChange={this.changeHandler}
            />

            <h2>Buyer Due Diligence Deadline</h2>
            <input
              type="date"
              required
              name="BDDDeadline"
              onChange={this.changeHandler}
            />

            <h2>Financing/Appraisal Deadline</h2>
            <input
              type="date"
              required
              name="FADeadline"
              onChange={this.changeHandler}
            />

            <h2>Settlement Deadline</h2>
            <input
              type="date"
              required
              name="CDeadline"
              onChange={this.changeHandler}
            />
          </div>

          <div className="dealInfoHolder">
            <h2>Purchase Price</h2>
            <input
              type="number"
              required
              name="price"
              placeholder="250000"
              onChange={this.changeHandler}
            />

            <h2>Commission</h2>
            <input
              type="number"
              required
              name="commission"
              placeholder="commission"
              onChange={this.changeHandler}
            />

            <h2>Earnest Money</h2>
            <input
              type="number"
              required
              name="em"
              placeholder="Earnest Money"
              onChange={this.changeHandler}
            />
          </div>

          <button onClick={this.submitHandler}>Create Deal</button>
        </div>
      </div>
    );
  }
}
