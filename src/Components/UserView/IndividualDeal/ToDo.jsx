import React, {Component} from 'react';


export default class ToDo extends Component {
  constructor(props) {
    super(props)
    this.state={
      isComplete: this.props.isComplete
    }
  }


  // toggles the state that effects the rendering of the classname of the todo. 
  toggleToDoClass= ()=> {
    this.setState({
      isComplete: !this.state.isComplete
    })
  }

  render(){
    return(
      <div className={this.state.isComplete ? 'completedToDo': 'incompleteToDo'}>
        
        <p>{this.props.text}</p>
        
        <input type="checkbox" onClick={this.toggleToDoClass}/>
      </div>
    )
  }
}