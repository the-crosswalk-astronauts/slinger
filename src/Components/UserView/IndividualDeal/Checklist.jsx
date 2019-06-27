import React, {Component} from 'react'
import dummyData from '../../../dummyData'
import ToDo from './ToDo'
export default class Sidebar extends Component {
  
  render() {
    
    const checklist=dummyData.deals[0].checklist.map((el, i)=> {
return <ToDo text={el.text} key={i} isComplete={el.isComplete} />
    })

    return (
      <div>
        
        Hey man this is the checklist 
        {checklist}


      </div>
    )
  }
}