import React, {Component} from 'react';


export default class ToDo extends Component {
  render(){
    return(
      <div className={this.props.isComplete ? 'completedToDo': 'incompleteToDo'}>
        
        <p>{this.props.text}</p>
        
        <input type="checkbox"/>
      </div>
    )
  }
}