import React from 'react'
import Cart from '../components/Cart'
import Topsales from '../components/Topsales'
import TopSeasonal from '../components/TopSeasonal'
import RecentlyViewed from '../components/RecentlyViewed'


function CartList(props:any){
    return(
   
        
        
        <div id='content'>

           <Cart cart={[1]}/>
           <RecentlyViewed viewName='Viewed Recently'/>
           <Topsales/>
           <TopSeasonal viewName='Seasonal product'/>

            
        </div>
        
    )

}

export default CartList