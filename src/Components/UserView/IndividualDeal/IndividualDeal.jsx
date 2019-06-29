import React, {Component} from 'react'
import ContactCard from './ContactCard'
import Checklist from './Checklist'
import dummyData from '../../../dummyData'
export default class Sidebar extends Component {
  render() {


const contactsMap= dummyData.deals[0].contacts.map((el, i)=> {
  return <ContactCard type={el.type} name={el.name} phone={el.phone}  email={el.email} key={i} />
})
    return (
      <div>
        <h1>Individual Deal</h1>
        
        <div>
      {contactsMap}

          <Checklist /> 
        </div>


      </div>
    )
  }
}