import {createStore} from 'redux'
import dummyData from '../dummyData'

//YES. I did copy-paste this, but mostly just to have a placeholder


const initialState= {
  deals: dummyData.deals,

  dealOnDisplay:''
}


export const UPDATE_DEAL_DISPLAY='UPDATE_DEAL_DISPLAY'


export function updateDealDisplay(obj) {
  return {
    type:UPDATE_DEAL_DISPLAY, 
    payload:obj 
  }
}

function reducer(state=initialState, action) {
  const {type, payload}= action

  switch(type){
    case UPDATE_DEAL_DISPLAY:
      return {payload, ...state}
    
    default: 
    return state;
  }
}







export default createStore(reducer)