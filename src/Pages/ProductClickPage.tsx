import React from 'react'
import Detials from '../components/Details'
import TopCombo from '../components/TopCombo'
import TopSeasonal from '../components/TopSeasonal'
import prod from '../components/images/images (13).jpeg'


function ProductFullDatails(props:any){
    return(
       
        
        
        <div id='content'>
            <Detials productImage={prod} rating='' reviews=''/>
            <TopCombo viewName='Combo product'/>
            <TopSeasonal viewName='Seasonal product'/> 
        </div>
     
    )

}

export default ProductFullDatails