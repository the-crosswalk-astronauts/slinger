import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

//the component that will house the login bar for a user. 

class NavBar extends Component {
  constructor() {
    super()
    this.state = {
      userEmail: '',
      userPass: '',
    }
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    return (
      <div className="loginHolder">

        <div>
          <h2>Email</h2>
          <input type="email" name='userEmail' required placeholder="Email" onChange={this.changeHandler} />
        </div>
        
        
        <div>
          <h2>Password</h2>
          <input type="password" name='userPass' required placeholder="password" onChange={this.changeHandler} />
        </div>


        <button onClick={() => {
          alert('Logged In!')
          this.setState({
            userEmail: '',
            userPass: ''
          })
          this.props.history.push('/userHome')
        }}>Login</button>

      </div>
    )
  }

}

export default withRouter(NavBar)