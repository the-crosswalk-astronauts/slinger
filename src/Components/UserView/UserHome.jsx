import React, { Component } from 'react'
import Sidebar from './Sidebar';
import IndividualDeal from './IndividualDeal/IndividualDeal'
import { connect } from 'react-redux'
import { updateDealDisplay } from '../../Redux/store'
import dummyData from '../../dummyData'
import DealCard from './DealCard';


class UserHome extends Component {
  state = {
    individualDealDisplayed: false
  }
  render() {
    const dealMapper = dummyData.deals.map(el => {
      return <DealCard
        address={el.address}
        price={el.price}
        deleteId={el.id}
        key={el.id}
        fireUpdater={(id) => {
          updateDealDisplay(id)
          this.setState({
            individualDealDisplayed: true,
          })
        }}
        client={el.contacts.find(element => {
          return element.type === 'Buyer'
        })} />
    })


    if (this.state.individualDealDisplayed) {
      return (
        <div className='UserHome'>
          <Sidebar />
          <IndividualDeal />

        </div>
      )

    } else {
      return (
        <div className="UserHome">
          <Sidebar />
          <div className="dealCardHolder">
            {dealMapper}

          </div>
        </div>
      )
    }


  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = {
  updateDealDisplay
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHome)