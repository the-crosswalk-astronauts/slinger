import React, { Component } from 'react';
import {updateVaultSearch} from '../../../Redux/store'
import {connect} from 'react-redux'

 class SearchBar extends Component {
    state={
        searchText:''
    }
    
    searchHandler= (e)=> {
        this.props.updateVaultSearch(e.target.value)

        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return(
        <div>
            <input type="text" placeholder="search here" onChange={this.searchHandler}/>

        </div>
            )
    }
};

const mapStateToProps = (state) => {
    return {
  
    }
  }
  
  const mapDispatchToProps = {
    updateVaultSearch
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)