import React, { Component } from "react";
import { deals } from "../../dummyData";
import { updateDealDisplay } from "../../Redux/store";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Sidebar extends Component {
  state = {
    searchText: "",
    vaultDisplayed: false
  };

  changeHandler = e => {
    this.setState({
      searchText: e.target.value
    });
  };
  //You can currently search by buyer, listing agent, MLS number,  and address but the code is soggy AFffff
  stateTogglerCheckbox = e => {
    this.setState({
      [e.target.name]: !this.state.vaultDisplayed
    });
  };

  render() {
    return (
      <div className="Sidebar">
        <div className="search-hold">
          <input
            type="text"
            placeholder="Search your contracts"
            onChange={this.changeHandler}
          />
          {/* this checkbox allow the user to display the vault items in search */}
          
            <label htmlFor="vaultDisplayCheckbox">Include Vault Results In Search</label>

            <input
              type="checkbox"
              name="vaultDisplayed"
              onClick={this.stateTogglerCheckbox}
              id='vaultDisplayCheckbox'
            />




        </div>
        <div className="sidebar-cards-hold">
          {deals
            .filter((el, i) => {
              // Filter for searchBar
              let buyerIndex = el.contacts.findIndex(contact => {
                return contact.type.toLowerCase() === "buyer";
              });

              let listingAgentIndex = el.contacts.findIndex(contact => {
                return contact.type.toLowerCase() === "listing agent";
              });

              let { searchText } = this.state;
              searchText.toLowerCase();
              if (
                el.address.toLowerCase().includes(searchText.toLowerCase()) ||
                el.mls.toString().includes(searchText) ||
                el.contacts[buyerIndex].name
                  .toLowerCase()
                  .includes(searchText) ||
                el.contacts[listingAgentIndex].name
                  .toLowerCase()
                  .includes(searchText)
              ) {
                if (this.state.vaultDisplayed) {
                  return el;
                }

                if (!el.inVault) {
                  return el;
                }
              }
            })
            .map(element => (
              // THIS IS WHERE THINGS ACTUALLY GET MAPPED ONTO THE DOCUMENT
              <div
                key={element.id}
                className="sidebar-card"
                onClick={() => this.props.updateDealDisplay(element.id)}
              >
                <p>{element.buyer}</p>
                <p>{element.address}</p>
              </div>
            ))}
        </div>
        <nav className="sidebar-nav-hold">
          <div className="sidebar-nav-item">home</div>
          <div
            className="sidebar-nav-item"
            onClick={() => {
              this.props.history.push("/dealWizard");
            }}
          >
            add
          </div>
          <div
            className="sidebar-nav-item"
            onClick={() => {
              this.props.history.push("/Vault");
            }}
          >
            vault
          </div>
          <div className="sidebar-nav-item">logout</div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  updateDealDisplay
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Sidebar));
