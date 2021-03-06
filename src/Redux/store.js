import {createStore} from 'redux'
import dummyData from '../dummyData'
import {devToolsEnhancer} from 'redux-devtools-extension';
//YES. I did copy-paste this, but mostly just to have a placeholder


const initialState= {
  deals: dummyData.deals,
  dealOnDisplay:'1', 
  vaultSearch:''
}


export const UPDATE_DEAL_DISPLAY='UPDATE_DEAL_DISPLAY'
export const VAULT_SEARCH='VAULT_SEARCH'

export function updateDealDisplay(obj) {
  return {
    type:UPDATE_DEAL_DISPLAY, 
    payload:obj 
  }
}

export function updateVaultSearch(obj){
  return {
    type:VAULT_SEARCH, 
    payload:obj
  }
}


function reducer(state=initialState, action) {
  const {type, payload}= action

  switch(type){
    case UPDATE_DEAL_DISPLAY:
      return {
        ...state,
        dealOnDisplay:payload
        }

    case VAULT_SEARCH:
      return {
        ...state, 
        vaultSearch:payload
      }
    
    default: 
    return state;
  }
}







export default createStore(reducer, devToolsEnhancer())