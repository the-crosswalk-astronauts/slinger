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
          setTimeout(() => {

            this.setState({
              individualDealDisplayed: true,
            })

          }, 1000);


        }}
        client={el.contacts.find(element => {
          return element.type === 'Buyer'
        })} />
    })


      return (
        <div className='UserHome'>
          <Sidebar />
          <IndividualDeal />

        </div>
      )
    
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