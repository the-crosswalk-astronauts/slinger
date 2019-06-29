import React, { Component } from 'react'
import ContactCard from './ContactCard'
import Checklist from './Checklist'
import dummyData from '../../../dummyData'
export default class Sidebar extends Component {
  render() {


    const contactsMap = dummyData.deals[0].contacts.map((el, i) => {
      return <ContactCard type={el.type} name={el.name} phone={el.phone} email={el.email} key={i} />
    })
    return (
      <div>

        <header className="propertyHeader">
          {/* this is the mls/address/price for the deal */}
          <h2>Address:{dummyData.deals[0].address}</h2>
          <h2>MLS #:{dummyData.deals[0].mls}</h2>
          <h2>Price:${dummyData.deals[0].price}</h2>
        </header>

        <div>
          {/* I was lazy and put an inline style here */}
          <h2 style={{
            textAlign: "center",
          }}>Contact Hotsheet</h2>
          <div className="contactsContainer">
            {contactsMap}
          </div>

        </div>

        <Checklist />


      </div>
    )
  }
}