import React, { Component } from "react";
import dummyData from "../../../dummyData";
import DealCard from "../DealCard";
import SearchBar from "./SearchBar";
import { connect } from "react-redux";

//after creating this component I think it would just be better to have a "show archived/vault" checkbox on the user home page. almost all of the logic is the same. 

class Vault extends Component {
  render() {
    let vaultDeals = dummyData.deals
      .filter(el => {
        let buyerIndex = el.contacts.findIndex(contact => {
          return contact.type.toLowerCase() === "buyer";
        });

        let listingAgentIndex = el.contacts.findIndex(contact => {
          return contact.type.toLowerCase() === "listing agent";
        });

        let { searchVal } = this.props;
        searchVal.toLowerCase();
        if (
          el.contacts[buyerIndex].name.toLowerCase().includes(searchVal) ||
          el.contacts[listingAgentIndex].name
            .toLowerCase()
            .includes(searchVal) ||
          el.address.toLowerCase().includes(searchVal) ||
          el.mls.toString().includes(searchVal)
        ) {
          return el;
        }
      })
      .map(el => {
        if (el.inVault) {
          return <DealCard address={el.address} price={el.price} key={el.id} />;
        }
      });

    return (
      <div>
        <h1>Vault</h1>
        <SearchBar />
        {vaultDeals}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchVal: state.vaultSearch
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Vault);
