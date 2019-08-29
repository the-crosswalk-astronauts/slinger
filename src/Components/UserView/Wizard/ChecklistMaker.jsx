import React, { Component } from 'react';

let id=0
export default class ChecklistMaker extends Component {
constructor(){
    super()
    this.state = { 
        listItems:[{
            text:'aowifjwe', 
            id:++id
        }], 
        item:''
    }
}

     changeHandler=(e)=>{
         this.setState({
             [e.target.name]:e.target.value
         })
     }

     deleter=(e)=>{
console.log(e.target.innerText, 'value')

         let spliceIndex=this.state.listItems.findIndex(el=>{
             return el.text===e.target.innerText
         })
         let newArr=[...this.state.listItems]

         newArr.splice(spliceIndex,1)

         this.setState({
             listItems:newArr
         })

     }

     submitHandler=(e)=>{
         e.preventDefault()
         let newArr=[...this.state.listItems]
        newArr.push({
           text:this.state.item, 
            id:++id
        })
         this.setState({
             listItems:newArr, 
             item:''
         })

     }

    render() {

        let items=this.state.listItems.map((el, i)=>{
            return <li key={el.id} name={el.id} onClick={this.deleter}>{el.text}</li>
        })
        return (
            <div style={{
                display:'flex', 
                flexDirection:'column', 
                justifyContent:'center',
                alignItems:'center'
            }}>

<label htmlFor="listName">List Title
<input name='listName' type="text" onChange={this.changeHandler}/>
</label>

<div>
 
<label htmlFor="listItem">List Item
<input name='item' type="text" value={this.state.item} onChange={this.changeHandler}/>

<button onClick={this.submitHandler}>add Item</button>
</label>
 
    <ul>
        {items}

    </ul>
</div>


            </div>
        );
    }
}