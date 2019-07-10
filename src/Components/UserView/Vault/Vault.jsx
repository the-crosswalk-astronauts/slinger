import React, { Component } from "react";
import dummyData from "../../../dummyData";
import DealCard from "../DealCard";
import SearchBar from "./SearchBar";
import {connect} from 'react-redux'

class Vault extends Component {
  render() {
    let vaultDeals = dummyData.deals.filter(el=>{
        return 
    }).map(el => {
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

const mapStateToProps = (state) => {
    return {
        searchVal:state.vaultSearch
    }
  }
  
  const mapDispatchToProps = {
    
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Vault)