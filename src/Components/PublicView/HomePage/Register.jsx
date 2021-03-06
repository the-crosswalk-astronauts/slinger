import React, { Component } from 'react'


//the component that will house the register for a user. 

export default class Register extends Component {
  constructor() {
    super()
    this.state = {
      userEmail: '',
      userPass: '',
      userFName: '',
      userLName: '',
      userPhone: '',
      userBrokerage: ''
    }
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    return (
      <div className='register'>

        <h2>Email</h2>
        <input onChange={this.changeHandler} type="email" name='userEmail' required placeholder="Email" />


        <h2>Password</h2>
        <input onChange={this.changeHandler} type="password" name='userPass' required placeholder="password" />


        <h2>First Name</h2>
        <input onChange={this.changeHandler} type="text" name='userFName' required placeholder="First Name" />


        <h2>Last Name</h2>
        <input onChange={this.changeHandler} type="text" name='userLName' required placeholder="Last Name" />


        <h2>Phone</h2>
        <input onChange={this.changeHandler} type="text" name='userPhone' required placeholder="Phone Number" />


        <h2>Brokerage</h2>
        <input onChange={this.changeHandler} type="text" name='userBrokerage' required placeholder="Brokerage" />


        <button onClick={() => {
          alert('Thank You For Registering!')
          this.setState({
            userEmail:'', 
            userPass:'', 
            userFName:'', 
            userLName:'', 
            userPhone:'', 
            userBrokerage:''
          })
        }}>Register!</button>

      </div>
    )
  }

}