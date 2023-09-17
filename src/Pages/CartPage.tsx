import React from 'react'
import Cart from '../components/Cart'
import Topsales from '../components/Topsales'
import TopSeasonal from '../components/TopSeasonal'
import RecentlyViewed from '../components/RecentlyViewed'
import { Helmet } from 'react-helmet'


function CartList(props:any){
    return(
   
        <>
        <Helmet>
            <title>ESHOP | Cart - make a move</title>
        </Helmet>
         <div className='mainSizing'>

<Cart cart={[1]}/>
<RecentlyViewed viewName='VIEWED'/>
<Topsales/>
<TopSeasonal viewName='SEASONAL'/>

 
</div>
        </>
        
       
        
    )

}

export default CartList