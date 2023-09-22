import React from 'react'
import Detials from '../components/Details'
import TopCombo from '../components/TopCombo'
import TopSeasonal from '../components/TopSeasonal'
import prod from '../components/images/images (13).jpeg'
import { Helmet } from 'react-helmet'


function ProductFullDatails(props:any){
    return(
       <>
       <Helmet>
        <title>ESHOP | Detials</title>
       </Helmet>
        <div className='mainSizing'>
            <Detials productImage={prod} rating='' reviews=''/>
            <TopCombo viewName='COMBO'/>
            <TopSeasonal viewName='SEASONAL'/> 
        </div>
       </>
        
       
     
    )

}

export default ProductFullDatails