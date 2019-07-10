import React, { Component } from 'react';
import dummyData from '../../../dummyData'
import DealCard from '../DealCard'

export default class Vault extends Component {
    render(){
        
        let vaultDeals=dummyData.deals.map(el=>{
            if(el.inVault){

                return <DealCard address={el.address} price={el.price} key={el.id} />
            }
        })
        
        return(
            <div>
                <h1>Vault</h1>
              {vaultDeals}  
            </div>
        )
    }
}