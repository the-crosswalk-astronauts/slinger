import React, {Component} from 'react'


export default class DealDisplay extends Component {
  constructor(){
    super()
    this.state={
      //get this from redux state? 
      activeDeal:''
    }
  }
  render() {
    return (
      <div>
        DealDisplay
      </div>
    )
  }
}