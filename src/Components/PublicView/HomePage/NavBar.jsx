import React, {Component} from 'react'


//the component that will house the login bar for a user. 

export default class NavBar extends Component {
  constructor() {
    super()
    this.state= {
      userEmail:'', 
      userPass:'',  
    }
  }

  changeHandler=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }


  render() {
    return(
      <div>
        
        <h2>Email</h2>
        <input type="email" name='userEmail' required placeholder="Email"  onChange={this.changeHandler}/>


        <h2>Password</h2>
        <input type="password" name='userPass' required placeholder="password" onChange={this.changeHandler}/>



      <button onClick={()=>{
        alert('Logged In!')
        this.setState({
          userEmail:'',
          userPass:''
        })
    }}>Login</button>

      </div>
    )
  }

}