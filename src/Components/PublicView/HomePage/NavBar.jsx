import React, {Component} from 'react'


//the component that will house the register for a user. 

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
        <input type="email" name='userEmail' required placeholder="Email"/>


        <h2>Password</h2>
        <input type="password" name='userPass' required placeholder="password"/>



      <button onClick={()=>alert('Logged In!')}>Login</button>

      </div>
    )
  }

}