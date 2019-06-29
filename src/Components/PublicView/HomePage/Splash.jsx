import React, {Component} from 'react'
import NavBar from './NavBar'
import QuickSell from './QuickSell'
import Register from './Register'

export default class Splash extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        
        <QuickSell/>

        <Register/>

      </div>
    )
  }
}