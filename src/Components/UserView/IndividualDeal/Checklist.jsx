import React, {Component} from 'react'
import dummyData from '../../../dummyData'
import ToDo from './ToDo'

export default class CheckList extends Component {
  
  render() {
    
    const checklist=dummyData.deals[0].checklist.map((el, i)=> {
return <ToDo text={el.text} key={i} isComplete={el.isComplete} />
    })

    return (
      <div className="checklist">
        
        {checklist}


      </div>
    )
  }
}