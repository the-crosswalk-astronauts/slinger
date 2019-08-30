import React, { Component } from "react";
import ContactCard from "./ContactCard";
import Checklist from "./Checklist";
import dummyData from "../../../dummyData";
import {getUserDeals} from '../../../Redux/store'
import { connect } from "react-redux";
import Axios from "axios";

class IndividualDeal extends Component {
  componentDidMount() {
    console.log("cdm");
  }
  closeDeal=()=>{

    //switches the status to vault, 
    this.props.getUserDeals(['hey','eey'])
    // Axios.put(`/deals/${this.props.deal.deal_id}/${this.props.deal.owning_user}`).then(res=>{

    // })
  }

  render() {
    //Up here I need to grab the state from redux (maybe an "dealOnDisplay" property) and then

    const activeDeal = dummyData.deals.find(el => {
      return +el.id === +this.props.deal;
    });

    const contactsMap = activeDeal.contacts.map((el, i) => {
      return (
        <ContactCard
          type={el.type}
          name={el.name}
          phone={el.phone}
          email={el.email}
          key={i}
        />
      );
    });
    return (
      <div>
        <header className="propertyHeader">
          {/* this is the mls/address/price for the deal */}
          <h2>Address:{activeDeal.address}</h2>
          <h2>MLS #:{activeDeal.mls}</h2>
          <h2>Price:${activeDeal.price}</h2>
          <button onClick={this.closeDeal}>Close Deal</button>

        </header>

        <div>
          {/* I was lazy and put an inline style here */}
          <h2
            style={{
              textAlign: "center"
            }}
          >
            Contact Hotsheet
          </h2>
          <div className="contactsContainer">{contactsMap}</div>
        </div>




        
        <Checklist />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    deal: state.dealOnDisplay
  };
};

const mapDispatchToProps = {
  getUserDeals:getUserDeals
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndividualDeal);
