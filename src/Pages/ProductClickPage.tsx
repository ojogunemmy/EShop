import React from 'react'
import Detials from '../components/Details'
import TopCombo from '../components/TopCombo'
import TopSeasonal from '../components/TopSeasonal'
import prod from '../components/images/images (13).jpeg'


function ProductFullDatails(props:any){
    return(
       
        
        
        <div className='mainSizing'>
            <Detials productImage={prod} rating='' reviews=''/>
            <TopCombo viewName='COMBO'/>
            <TopSeasonal viewName='SEASONAL'/> 
        </div>
     
    )

}

export default ProductFullDatails