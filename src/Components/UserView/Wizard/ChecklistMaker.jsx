import React, { Component } from "react";
import Axios from "axios";

let id = 0;
export default class ChecklistMaker extends Component {
  constructor() {

    super();
    this.state = {
      listItems: [
        {
          text: "aowifjwe",
          id: ++id
        }
      ],
      item: "", 
      listTitle:'', 
    };
  }

  saveList=()=>{
//placeholder

    this.props.hideMe()
    //send request to backend, then updates state on parent. 
    //   Axios.post('/checklistMaker/createNewChecklist', {
    //       userId:this.props.activeUser, 
    //       listName:this.state.listTitle
    //   }).then(()=>{
    //       this.props.hideMe()
    //   })
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  deleter = e => {
    let spliceIndex = this.state.listItems.findIndex(el => {
      return el.text === e.target.innerText;
    });
    let newArr = [...this.state.listItems];

    newArr.splice(spliceIndex, 1);

    this.setState({
      listItems: newArr
    });
  };

  submitHandler = e => {
    e.preventDefault();
    if (!this.state.item) {
      alert("please fill in something!");
      return;
    }
    let newArr = [...this.state.listItems];
    newArr.push({
      text: this.state.item,
      id: ++id
    });
    this.setState({
      listItems: newArr,
      item: ""
    });
  };

  render() {
    let items = this.state.listItems.map((el, i) => {
      return (
        <li key={el.id} name={el.id} onClick={this.deleter}>
          {el.text}
        </li>
      );
    });
    return (
      <div className={this.props.ishidden?'hidden':'showMaker'}>
        <label htmlFor="listName">
          List Title
          <input name="listName" type="text" onChange={this.changeHandler} />
        </label>

        <div>
          <label htmlFor="listItem">
            List Item
            <input
              name="item"
              type="text"
              value={this.state.item}
              onChange={this.changeHandler}
            />
            <button onClick={this.submitHandler}>add Item</button>
          </label>

          <ul>{items}</ul>
        </div>


{/* do the axios request here */}
<button onClick={this.saveList}>Save List</button>

      </div>
    );
  }
}
