import React, {Component} from 'react'
import ContactCard from './ContactCard'
import Checklist from './Checklist'
import deals from '../../../dummyData'
export default class Sidebar extends Component {
  render() {

    console.log(deals)
// const contactsMap= deals[0]
    return (
      <div>
        <h1>Deal</h1>
        
        <div>


          <Checklist /> 
        </div>


      </div>
    )
  }
}